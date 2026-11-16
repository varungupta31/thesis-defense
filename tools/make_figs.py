# Builds deck-ready figures from the arXiv sources into assets/made/.
import pymupdf, pathlib, io
from PIL import Image
AX = pathlib.Path('/tmp/thesis/arxiv'.replace('/tmp', str(pathlib.Path.home() / 'AppData/Local/Temp')))
OUT = pathlib.Path('Q:/thesis-defense/assets/made')

def pdf(src, zoom):
    pg = pymupdf.open(src)[0]
    pix = pg.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
    return Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB')

def save(im, rel, maxw=2400, photo=False):
    p = OUT / rel; p.parent.mkdir(parents=True, exist_ok=True)
    if im.width > maxw: im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    if photo: im.save(p, quality=86, optimize=True, progressive=True)
    else: im.save(p, optimize=True)
    print(f'{rel}\t{im.width}x{im.height}\t{p.stat().st_size//1024}KB')

def stack(ims, gap=24):
    w = max(i.width for i in ims)
    ims = [i.resize((w, round(i.height * w / i.width)), Image.LANCZOS) for i in ims]
    out = Image.new('RGB', (w, sum(i.height for i in ims) + gap * (len(ims) - 1)), 'white')
    y = 0
    for i in ims: out.paste(i, (0, y)); y += i.height + gap
    return out

C = AX / '2303.02641/Images'
save(pdf(C / 'Missing-TS-Sample-HighRes.pdf', 2), 'cuecan/missing-sign-samples.jpg', photo=True)   # Fig 2.2
save(pdf(C / 'TS+Context-Annotated_Improved.pdf', 2.5), 'cuecan/annotated-frames.jpg', photo=True)  # Fig 2.3
save(pdf(C / 'CueCAn-Improved.pdf', 2), 'cuecan/cuecan-unit.jpg', photo=True)                        # Fig 2.4
save(pdf(C / 'ICRA-Teaser.pdf', 2), 'cuecan/pipeline-teaser.jpg', photo=True)                        # Fig 2.1
save(pdf(C / 'GradCam_Ablation_Classifier.pdf', 3), 'cuecan/gradcam-ablation.jpg', photo=True)      # Fig 2.6
save(pdf(C / 'MissingTS-Matrix.pdf', 2), 'cuecan/localization.jpg', photo=True)                      # Fig 2.5

V = AX / '2406.10889/CVPR2025'
save(pdf(V / 'media/venn_v2.pdf', 3), 'velociti/venn.png')                                           # Fig 3.1
save(pdf(V / 'media/teaser.pdf', 3), 'velociti/tests-teaser.jpg', photo=True)                        # Fig 3.2
save(Image.open(V / 'media/scatter.png').convert('RGB'), 'velociti/scatter.png')                      # Fig 3.3
q = V / 'media_supplement/qualitative_analysis'
save(stack([pdf(q / 'dark_green/agbind.pdf', 4), pdf(q / 'light_green/actbind.pdf', 4), pdf(q / 'red/chrono.pdf', 4)]),
     'velociti/qualitative-strict-classic-fail.jpg', photo=True)                                     # Figs 3.6-3.8

O = AX / '2607.03738'
save(pdf(O / 'media/method/lazy_vs_total_updated_green.pdf', 6), 'otat/lazy-vs-total.png')         # Fig 4.2
save(pdf(O / 'media/bar_plots/fruit_math_ov7B_merged.pdf', 4), 'otat/bars-fruit-math-lov7b.png')    # Fig 4.4
save(pdf(O / 'media/bar_plots/math_fruit_ov7B_merged.pdf', 4), 'otat/bars-math-fruit-lov7b.png')    # Fig 4.5
save(pdf(O / 'media/bar_plots/vsr_lov7b_merged.pdf', 4), 'otat/bars-vsr-lov7b.png')                 # Fig 4.8
save(pdf(O / 'media/bar_plots/vsr_qvl7b_merged.pdf', 4), 'otat/bars-vsr-qvl7b.png')                 # Fig 4.8
save(Image.open(O / 'media/bird3.png').convert('RGBA').convert('RGB'), 'otat/bird.png', maxw=600)
for f in sorted(pathlib.Path('Q:/thesis-defense/assets/have/OTaT/qualitative').glob('*.pdf')):
    save(pdf(f, 4), f'otat/qualitative-{f.stem}.jpg', photo=True)                                   # Figs 4.12-4.16
