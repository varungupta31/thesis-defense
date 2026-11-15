# Defense Outline — Slide Mock

> **Owner: Varun.** Source of truth for slide content and order.
> Agents: build from this; never rewrite it without being asked. Suggestions go in `> 💬` lines.

**Talk:** 45 min · **Date:** 21-11-2026 · **Committee:** Prof. PJN

Following is the broad idea I have in plan; we may split or combine depending on space and clarity.

---
Attending to Visual Representations: Context, Reasoning, and
Multimodal Generation

MS By Research
Public Defense

---
Meet Et al.

Photo of Collaborators
circular profile pictures
Makarand Tapaswi, Vineet Gandhi, C.V. Jawahar, Subhashini Venugopalan, Anbumani Subramanian, Rohit Saluja
Darshan, Darshana

---

Table of Contents

Based on what we finally add
nice to have a progress bar at the bottom

---

Chapter 1

Introduction

In the interest of conveying maximal information in least amount of time, lets stick to a structure
Problem/Motivation/Why → Prior → How → Results


---

Abstract and Introduction

Overview of what to anticipate
vision is fundamental to intelligence
Show progression of the visual intelligence from
CNN specialists to billion-scale LLM generalist

---

Abstract and Introduction

Overview of what to anticipate
Across tasks
CNN + Visual Information steering to solve road signs issue
VLM + Compositional reasoning
Multimodal autoregressive interpretability
Broadly these are: Context + Reasoning + Generation
Play the key gifs of the 3 works

---

Chapter 2

Contextual Attention and Missing Traffic Signs Dataset

In the interest of conveying maximal information in least amount of time, lets stick to a structure
Problem/Motivation/Why → Prior → How → Results

---

Missing Traffic Signs and Road Safety [problem/motive/why]

Road signs play an important role in road safety
A lot of road patches are poorly maintained and road signs remain missing.
Some key statistics from the paper.
Interesting design challenges
Conventional object detection identifies objects, missing signs poses
Where is the data? what is the ground truth?
How do you identify something that is missing?


---

Prior Works of the time

Work on missing object localization
Sun et al. [13] aim to improve city accessibility for people with mobility disabilities by detecting regions with missing curbs. 
Dataset comparison table (missing traffic data doesn't exist)
However, these datasets do not involve diversity in the object cues. However, in the case of traffic signs, multiple cues exist, i.e., the cue for left-hand-curve is different from that of right-hand-curve, and for bus-bay is much different from that of pedestrian-crossing, etc.
However, local information in the spatial vicinity of the signs is irrelevant for identifying missing traffic signs, as they are predominantly at a location away from their cue.


---

MTSVD

banner gif

---

MTSVD

dataset collection details
Key statistics


---

CueCAN

Explain the method


---

What do we with this? Method

Train the classifier for binary cue detection with CueCAN


---

Results

GradCAM
Tables
Video outputs

---

Chapter 3

VELOCITI: Video et Language Compositionality Through Time

In the interest of conveying maximal information in least amount of time, lets stick to a structure
Problem/Motivation/Why → Prior → How → Results


---

Compositional Reasoning in Video [problem/motive/why]

What is it and why it is important
GIF to explain
How well do models do?


---

Prior Works of the time

Much saturated space, even at the time!
Show the table
Clear distinctions on how we differ.


---
VELOCITI

banner of the tests in VELOCITI
Hierarchy of difficulty and broader themes (action, people), granularity


---

Evaluation Metrics

Traditional vs StrictVLE
Analysis of StrictVLE

---

Results

GradCAM
Tables
Video outputs

---


Video Benchmark?

Evaluating benchmark properties
COT effect
Impact of increased frame rate

---

Video Benchmark?

Human evaluation
Qualitative Analysis of failures
Video index flex

---

Chapter 4

OTaT: Attending to Multimodal Generation One Token at a Time

In the interest of conveying maximal information in least amount of time, lets stick to a structure
Problem/Motivation/Why → Prior → How → Results

---
Multimodal Models Autoregressive Text Generation [problem/motive/why]

Barlow framing
The combining of signals across modalities to facilitate text generation

---

Prior Works of the time

Mostly trying to focus on attention heads and layer specific
we global, in favour of time

---

Tasks

Introduced
Fruit-Math
why?
Existing
ChartQA
MixedSignals


---

OTaT Method

Information is spread across different input chunks
We study all!
Averaging business
Attention blocking
Attention boosting


---

Results

Tables
Quantitative


---

Results

Qualitative
Show the cool failure modes!