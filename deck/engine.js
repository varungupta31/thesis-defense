// Deck engine: parses the markdown block in index.html and renders slides.
(() => {
  const W = 1600, H = 900;
  const src = document.getElementById('slides').textContent;

  // ---------- parse ----------
  function parse(text) {
    const slides = [];
    let cur = null;
    for (const raw of text.replace(/\r/g, '').split('\n')) {
      const sep = raw.match(/^---\s*(.*)$/);
      if (sep) {
        const [id = '', layout = 'content', ...label] = sep[1].trim().split(/\s+/);
        cur = { id, layout, chapter: label.join(' '), lines: [] };
        slides.push(cur);
      } else if (cur && !/^\s*\/\//.test(raw)) {
        cur.lines.push(raw);
      }
    }
    return slides;
  }

  function blocks(lines) {
    const out = [], notes = [];
    let i = 0;
    const t = k => (lines[k] || '').trim();
    const take = (re, map) => { const items = []; while (i < lines.length && re.test(t(i))) items.push(map(t(i++))); return items; };
    while (i < lines.length) {
      const s = t(i);
      if (!s) { i++; continue; }
      if (s === '+++') { out.push({ type: 'col' }); i++; }
      else if (/^note:/i.test(s)) { notes.push(s.replace(/^note:\s*/i, '')); i++; }
      else if (s.startsWith('### ')) { out.push({ type: 'h3', text: s.slice(4) }); i++; }
      else if (s.startsWith('## ')) { out.push({ type: 'kicker', text: s.slice(3) }); i++; }
      else if (s.startsWith('# ')) { out.push({ type: 'h1', text: s.slice(2) }); i++; }
      else if (s.startsWith('>')) out.push({ type: 'take', text: take(/^>/, x => x.replace(/^>\s?/, '')).join(' ') });
      else if (/^[-*] /.test(s)) out.push({ type: 'ul', items: take(/^[-*] /, x => x.slice(2)) });
      else if (/^\d+\. /.test(s)) out.push({ type: 'ol', items: take(/^\d+\. /, x => x.replace(/^\d+\.\s/, '')) });
      else if (s.startsWith('|')) out.push({ type: 'table', rows: take(/^\|/, x => x).filter(r => !/^\|[\s:|-]+\|$/.test(r)).map(r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim())) });
      else if (/^\[(A\d+|media)\]/i.test(s)) { const m = s.match(/^\[([^\]]+)\]\s*(.*)$/); out.push({ type: 'media', id: m[1], text: m[2] }); i++; }
      else if (s.includes(' :: ')) out.push({ type: 'stats', items: take(/ :: /, x => x.split(' :: ')) });
      else if (s.startsWith('~ ')) { out.push({ type: 'small', text: s.slice(2) }); i++; }
      else { out.push({ type: 'p', text: s }); i++; }
    }
    return { out, notes };
  }

  // ---------- render ----------
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = s => esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<em>$2</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
  const initials = name => name.split(/[\s.]+/).filter(Boolean).map(w => w[0]).slice(0, 2).join('');

  function html(b, layout) {
    switch (b.type) {
      case 'h1': return `<h1>${inline(b.text)}</h1>`;
      case 'h3': return `<h3>${inline(b.text)}</h3>`;
      case 'kicker': return `<div class="kicker">${inline(b.text)}</div>`;
      case 'take': return `<p class="take">${inline(b.text)}</p>`;
      case 'p': return `<p>${inline(b.text)}</p>`;
      case 'small': return `<p class="small">${inline(b.text)}</p>`;
      case 'ol': return `<ol>${b.items.map(x => `<li>${inline(x)}</li>`).join('')}</ol>`;
      case 'ul':
        if (layout === 'people') return `<div class="faces">${b.items.map(x => `<figure><div class="face">${esc(initials(x))}</div><figcaption>${inline(x)}</figcaption></figure>`).join('')}</div>`;
        return `<ul>${b.items.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`;
      case 'stats': return `<div class="stats">${b.items.map(([v, l]) => `<div class="stat"><div class="v">${inline(v)}</div><div class="l">${inline(l || '')}</div></div>`).join('')}</div>`;
      case 'media': return `<figure class="media"><span class="tag">${esc(b.id)}</span><p>${inline(b.text)}</p></figure>`;
      case 'table': {
        const [head, ...rows] = b.rows;
        const tr = (r, cell) => `<tr${r.some(c => /^\*\*.*\*\*$/.test(c)) ? ' class="hl"' : ''}>${r.map(c => `<${cell}>${inline(c)}</${cell}>`).join('')}</tr>`;
        return `<table><thead>${tr(head, 'th')}</thead><tbody>${rows.map(r => tr(r, 'td')).join('')}</tbody></table>`;
      }
    }
    return '';
  }

  const slides = parse(src);
  const main = slides.filter(s => !s.id.startsWith('B'));

  // chapters for the progress bar
  const chapters = [];
  main.forEach((s, i) => {
    if (s.chapter) chapters.push({ label: s.chapter, start: i, n: 0 });
    if (chapters.length) chapters[chapters.length - 1].n++;
    s.ch = chapters.length - 1;
  });
  const progStart = chapters.length ? chapters[0].start : main.length;
  const progLen = main.length - progStart;

  function footer(s, idx) {
    if (s.id.startsWith('B')) return `<footer><span></span><span class="count">${esc(s.id)}</span></footer>`;
    const count = `<span class="count">${idx + 1} / ${main.length}<b>${esc(s.id)}</b></span>`;
    if (s.ch < 0 || s.layout === 'title') return `<footer><span></span>${count}</footer>`;
    const segs = chapters.map((c, k) => {
      const done = Math.max(0, Math.min(c.n, idx - c.start + 1));
      return `<div class="seg${k === s.ch ? ' on' : ''}" style="flex:${c.n}"><i style="width:${(done / c.n) * 100}%"></i><span>${esc(c.label)}</span></div>`;
    }).join('');
    return `<footer><div class="progress">${segs}</div>${count}</footer>`;
  }

  const deck = document.createElement('main');
  deck.id = 'deck';
  document.body.appendChild(deck);

  const frames = slides.map((s, idx) => {
    const { out, notes } = blocks(s.lines);
    s.notes = notes;
    let head = '', k = 0;
    while (k < out.length && (out[k].type === 'kicker' || out[k].type === 'h1')) head += html(out[k++], s.layout);
    const rest = out.slice(k);
    let body;
    if (rest.some(b => b.type === 'col')) {
      const cols = [[]];
      rest.forEach(b => b.type === 'col' ? cols.push([]) : cols[cols.length - 1].push(b));
      body = `<div class="cols">${cols.filter(c => c.length).map(c => `<div class="col">${c.map(b => html(b, s.layout)).join('')}</div>`).join('')}</div>`;
    } else {
      body = rest.map(b => html(b, s.layout)).join('');
    }
    const frame = document.createElement('div');
    frame.className = 'frame';
    frame.innerHTML = `<section class="slide ${esc(s.layout)}" data-id="${esc(s.id)}"><header>${head}</header><div class="body">${body}</div>${footer(s, main.indexOf(s))}</section>`;
    frame.addEventListener('click', () => { if (document.body.classList.contains('overview')) { go(idx); toggle('overview'); } });
    deck.appendChild(frame);
    return frame;
  });

  // flag slides whose content does not fit
  requestAnimationFrame(() => frames.forEach(f => {
    const b = f.querySelector('.body');
    f.style.display = 'block';
    const isOver = () => b.scrollHeight > b.clientHeight + 2 || b.scrollWidth > b.clientWidth + 2;
    // big tables shrink to fit before the slide is flagged
    const table = b.querySelector('table');
    for (let size = 24; table && isOver() && size >= 16; size -= 2) table.style.fontSize = size + 'px';
    const over = isOver();
    f.style.display = '';
    if (over) {
      f.firstElementChild.classList.add('overflow');
      console.warn('Overflowing slide:', f.firstElementChild.dataset.id);
    }
  }));

  // ---------- notes panel ----------
  const notes = document.createElement('aside');
  notes.id = 'notes';
  document.body.appendChild(notes);

  // ---------- navigation ----------
  let cur = 0;
  function go(i) {
    cur = Math.max(0, Math.min(frames.length - 1, i));
    frames.forEach((f, k) => f.classList.toggle('current', k === cur));
    const s = slides[cur];
    notes.innerHTML = `<b>${esc(s.id)}</b> ${s.notes.length ? s.notes.map(inline).join('<br>') : '<span class="none">No notes.</span>'}`;
    history.replaceState(null, '', '#' + s.id);
  }
  function fit() {
    const scale = Math.min(innerWidth / W, innerHeight / H);
    deck.style.setProperty('--scale', scale);
  }
  const toggle = cls => document.body.classList.toggle(cls);

  addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(k)) go(cur + 1);
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(k)) go(cur - 1);
    else if (k === 'Home') go(0);
    else if (k === 'End') go(main.length - 1);
    else if (k === 'n' || k === 'N') toggle('show-notes');
    else if (k === 'o' || k === 'O') { toggle('overview'); frames[cur].scrollIntoView({ block: 'center' }); }
    else if (k === 'Escape') document.body.classList.remove('overview');
    else if (k === 'f' || k === 'F') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    else return;
    e.preventDefault();
  });
  addEventListener('resize', fit);
  addEventListener('hashchange', () => {
    const i = slides.findIndex(s => '#' + s.id === location.hash);
    if (i >= 0 && i !== cur) go(i);
  });

  fit();
  const start = slides.findIndex(s => '#' + s.id === location.hash);
  go(start >= 0 ? start : 0);
})();
