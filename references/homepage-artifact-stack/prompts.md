# Homepage Artifact Stack Prompts

Status: user-supplied final masters locked; five final content panels generated and validated
North star: `artifact-stack-mockup-1.png`  
Companion plan: `plan.md`

This file is the source of truth for revising the homepage artifact panels.
The v4 content panels are retained only as content references. The locked edit
targets are `terminal-master-source-final.png` and
`orientation-b-master-source-final.png`, both supplied as transparent PNGs by
the user. The five completed panels use those exact alpha silhouettes. Stack
composition, overlap, and code changes remain deferred. Do not use retired
mockups as references.

## Production Rules

- Use the built-in image generation tool by default.
- Generate one distinct asset per call.
- Treat `artifact-stack-mockup-1.png` as a geometry and composition reference,
  not an edit target and not a source of panel content.
- Treat the two user-supplied `*-master-source-final.png` files as immutable
  geometry/material masters for all content-panel work.
- Use the measured scaffolds as the actual edit targets. The shared long
  axis is exactly 13 degrees north of east. Orientation A's standing axis is
  vertical. Orientation B's depth axis is exactly 42 degrees south of east.
- Use orthographic/axonometric construction only. Every pair of corresponding
  straight edges must remain exactly parallel. No vanishing points, lens
  perspective, converging edges, bowed rules, warped quadrilaterals, or
  freehand drift in structural lines.
- Use the approved per-orientation thickness from Orientation A v6 and
  Orientation B v7. The upright
  terminal exposes narrow top and left bands. The tabletop panel keeps the v1
  pose and stylized edge treatment with roughly half the original v1 depth.
- Generate on a flat `#00ff00` chroma-key background, then remove the key
  locally and validate the alpha channel.
- Do not bake cast shadows, contact shadows, animation marks, readable text,
  cursor blocks, ping ripples, move arrows, or square highlights into assets.
- Image generation owns tactile panel art, paper texture, ink work, and the
  thin visible slab edge. Code later owns placement, z-index, broad shadows,
  readable terminal text, restrained motion, and chess piece placement.
- Reuse the accepted chess piece sprites. Do not regenerate them in this pass.
- Existing v2 and v4 content panels may be supplied as content/material
  references, but never as geometry references or edit targets. All revised
  content panels must use the appropriate user-supplied final master as the
  edit target.
- Use versioned output names during iteration. Do not overwrite the current
  production assets until replacements are accepted.
- Record every submitted expanded prompt and output in the run log at the end
  of this file.

## Master Generation Style Block

Use this block only for the two blank masters:

```text
Use case: precise-object-edit
Asset type: blank homepage hero artifact master
Input images: Image 1 is the exact measured v6 scaffold and the only geometry
edit target. Image 2 is explicitly labeled by the orientation prompt and
supplies only material, edge-style, and analog-character reference. Preserve
Image 1's silhouette, corner locations, axis directions, thickness, inset rule,
scale, and placement without deviation.

Create a precise orthographic architectural plate with ruled structural
linework. Every straight structural edge must be truly straight, and every
pair of corresponding opposite edges must be exactly parallel. No vanishing
point, lens perspective, convergence, warped quadrilateral, bowed edge, or
freehand drift in the slab geometry.

Use dark charcoal-navy ink (#2B3038) on opaque warm off-white paper (#F5F2EB)
with faint natural grain, subtle graphite hatching on the thin side bands, and
slight analog ink character. No gradients, glossy 3D rendering, photorealism,
neon, or sci-fi styling.

The blank slab is the only object in the frame. Keep Image 1's scale and canvas
placement, keep it fully visible, and preserve its flat chroma-key background.
No cast shadow, drop shadow, contact shadow, reflection, ground plane,
dimension lines, crop marks, surrounding sketch marks, watermark, or readable
text.
```

## Content-Panel Shared Style Block

Prepend this block to every later content-panel edit prompt:

```text
Use case: stylized-concept
Asset type: homepage hero artifact panel
Input images: Image 1 is the approved blank geometry master and edit target for
content-panel calls. Additional images, when listed, are content or material
references only. Never copy their outer geometry.

Technical sketchbook illustration resembling a precise architectural plate.
Structural outlines, panel boundaries, frames, grids, tables, streets, and
board lines are ruled and geometrically exact. Hand-drawn character belongs
only inside the scientific/data artwork through subtle graphite hatching,
paper grain, restrained scribbles, and slight ink bleed. Restrained palette:
dark charcoal-navy ink (#2B3038), muted slate-blue accents (#5C7A99), and
occasional warm amber-ochre highlights (#C89B4A). No gradients, glossy 3D
rendering, photorealism, neon, or sci-fi interface styling.

The panel surface is opaque warm off-white paper (#F5F2EB) with faint natural
grain. The paper belongs to the object. The panel is a restrained flat physical
slab; preserve the approved orientation master thickness and every straight parallel
band exactly, with restrained graphite shading. Light comes from the upper-left
and lower-right-facing edges are slightly darker.

The slab is the only object in the frame. Keep it floating free with a small,
even background margin. No cast shadow, drop shadow, contact shadow,
reflection, ground plane, dimension lines, crop marks, surrounding sketch
marks, watermark, or readable text unless a panel prompt explicitly requests
it.
```

Append this block to every blank-master and content-panel prompt:

```text
Scene/backdrop: a perfectly flat solid #00ff00 chroma-key background for local
background removal. The background must be one uniform color with no shadows,
gradients, texture, reflections, floor plane, or lighting variation. Keep the
subject fully separated from the background with crisp edges and generous
padding. Do not use #00ff00 anywhere in the subject.
```

## Orientation A: Facing Display Geometry

Use only for Panel 1:

```text
Use `orientation-a-scaffold-v6.png` as Image 1 and preserve its exact upright
front-face corners, placement, scale, and thickness. Its long top and bottom
edges are exactly 13 degrees north of east. Its left and right front edges are
exactly vertical and straight down. Corresponding edges stay parallel.

The physical viewpoint is slightly above and left. Show only the scaffold's
narrow TOP and LEFT thickness faces. Show no bottom thickness face and no right
thickness face. Use `terminal-master-source-v5.png` only for restrained rounded
edge treatment, warm graphite side coloring, and paper texture, never for
geometry. This is only a floating display slab: no keyboard, laptop base,
stand, hinge, cable, or surrounding device.
```

## Orientation A Master Slab

Generate this blank intermediate before revising the terminal. Image 1 is the
exact Orientation A v6 scaffold and edit target. Image 2 is the terminal v5
master and supplies material/edge style only.

Combine the master-generation style block, Orientation A, this block, and the
chroma-key block:

```text
Primary request: create one completely blank facing technical display slab in
the specified Orientation A geometry. The large front face contains only warm
off-white paper grain and one very thin inset hairline border parallel to all
four outer edges. No title bar, gutter, controls, baseline guides, diagrams,
grids, windows, labels, marks, text, icons, or shadows.
```

Suggested source name: `terminal-master-source-v6.png`
Suggested processed name: `terminal-master-v6.png`

## Orientation B: Tabletop Axonometric Geometry

Use for Panels 2-5:

```text
Use `orientation-b-scaffold-v7.png` as Image 1 and preserve its exact top-face
four corners, landscape parallelogram, scale, placement, inset rule, and 24px
vertical thickness drop. Its long axes are exactly 13 degrees north of east;
its depth axes are exactly 42 degrees south of east. Every opposing pair stays
parallel.

Preserve the scaffold's constant 26px screen-space perpendicular inset on all
four sides. The inset is one smooth continuous hairline, and every straight
run remains parallel to its matching outer edge. Preserve the moderate rounded
corner easing: tactile rather than sharp, but never pill-shaped.

Use `orientation-b-master-source-v1.png` only for the preferred broad tabletop
pose character, rounded edge treatment, warm paper tone, graphite side
coloring, and analog texture. Never copy its geometry or thickness. Preserve
the scaffold's visible faces and middle-ground edge weight.
```

## Orientation B Master Slab

Generate this intermediate first. Image 1 is the exact Orientation B v7
scaffold and edit target. Image 2 is the v1 master and supplies only material,
rounded-edge, and pose-character reference. Use the accepted v7 output as the exact edit target for protein,
map, EDA, and chessboard assets.

Combine the master-generation style block, Orientation B, this block, and the
chroma-key block:

```text
Primary request: create one completely blank warm off-white technical display
slab in the specified Orientation B geometry. The top face contains only faint
paper grain and one very thin inset hairline border parallel to all four outer
edges. Preserve a broad usable surface. No diagrams, grids, windows, labels,
marks, controls, text, icons, or shadows.
```

Suggested source name: `orientation-b-master-source-v7.png`
Suggested processed name: `orientation-b-master-v7.png`

## Panel 1: Terminal

Use the approved Orientation A master as Image 1 and edit target. Use the
current terminal v2 only as Image 2, a content/material reference. Combine the
content-panel shared style block, this block, and the chroma-key block:

```text
Primary request: edit only the blank front face of Image 1 into a terminal
display. Preserve Image 1's exact outer silhouette, four front-face edges,
approved master thickness bands, parallel-line geometry, canvas placement, paper
texture, and chroma-key background without any change.

Add a thin title bar parallel to the top and bottom edges, with three small
circular controls at the left and one small plus symbol at the right. Below it
is a pale paper terminal surface with a narrow left gutter separated by one
fine rule parallel to the vertical side edges. Add only faint baseline guides
parallel to the title bar and restrained microtexture so deterministic
terminal copy can be overlaid later.

Keep the terminal body spacious and calm. Do not render letters, digits,
pseudo-text, timestamps, source code, a prompt symbol, a cursor, a scanline, or
an ASCII figure. No syntax-highlight colors. The only accent is restrained
slate-blue gutter and title-bar detail. No line may converge, bow, or drift away
from the master geometry.
```

Production name: `terminal-panel.png`

### Deterministic Terminal Overlay

This copy is rendered in code after the terminal image is accepted. It is not
part of the image-generation prompt.

```text
$ ls -la
drwxr-xr-x  trajectories/
-rw-r--r--  stops.parquet
-rw-r--r--  gyration.py
$ lomonosov probe --dtm
position: KQPKRBN
dtm: 549
best: Kf5
$ cowsay "still running"
 _______________
< still running >
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
$ python detect_stops.py --eps 50 --min-pts 4
[12:53] loading 1.2M pings ...
[12:57] clustering ... done
$ _
```

The last underscore is replaced visually by the code-owned blinking block
cursor. If the copy is too dense at final hero size, remove ordinary file and
status lines before removing the Lomonosov reference or breaking the cow.

## Panel 2: Protein-Peptide Docking

Use the approved Orientation B master as Image 1 and edit target. Use the
current protein v2 only as Image 2, a ribbon/content reference. Combine the
content-panel shared style block, this block, and the chroma-key block.

```text
Primary request: edit only the blank top face of Image 1 into a restrained
structural-biology figure showing protein-peptide docking. Preserve Image 1's
exact outer silhouette, top-face parallelogram, approved master thickness bands,
parallel-line geometry, canvas placement, paper texture, and chroma-key
background without any change.

The left three-quarters contains the dominant subject: a large receptor
protein rendered as a three-dimensional ribbon diagram. Draw three or four
alpha helices as classic coiled ribbons with visible edges, one beta sheet of
three or four aligned arrows, and a few loose connecting loops. Ribbons pass
behind and in front of one another and partially enclose a binding pocket.

Inside the pocket is a short docked peptide, not a small-molecule ligand. Draw
it as a compact secondary ribbon or short helix in muted amber-ochre so it is
clearly a separate peptide while remaining in the same hand-inked visual
language. Include only three or four short dashed interface contacts and a few
small contact-residue dots. The receptor remains the largest and prettiest
element.

The right quarter contains two small unframed biostatistical figures stacked
vertically with generous whitespace between them. The upper figure is a compact
residue-distance distribution: six or seven narrow slate bars with one smooth
ink density curve. The lower figure is a compact assay effect-size plot: one
thin vertical reference rule with five or six point-and-whisker estimates in
slate and amber. Use short unlabeled tick marks only. Both figures stay visibly
secondary to the receptor and follow the master panel axes. Do not add boxes,
titles, legends, readable labels, a contact matrix, or another molecular
close-up.

No ball-and-stick drug ligand, chemistry formula, circuit board, glowing node,
network graph, binary, lock icon, NMR squiggles, energy traces, or dashboard
chrome, contact matrix, dashboard panel, or duplicated binding-pocket view. No readable characters. No
structural line may converge, bow, or drift away from the master geometry.
```

Production name: `protein-panel.png`

## Panel 3: Stops and Radius of Gyration Map

Use the approved Orientation B master as Image 1 and edit target. Use the
current map v2 only as Image 2, an underlying-map content reference. Combine
the content-panel shared style block, this block, and the chroma-key block.

```text
Primary request: edit only the blank top face of Image 1 into a hand-drawn
urban street map with sparse stop distributions and two radius-of-gyration
overlays. Preserve Image 1's exact outer silhouette, top-face parallelogram,
approved master thickness bands, parallel-line geometry, canvas placement, paper
texture, and chroma-key background without any change.

The map is an irregular urban grid. A broad diagonal river runs from lower-left
to upper-right. Northwest of it is a denser regular grid of thin streets;
southeast is a looser curving road layout with two or three irregular parks
shown by light stipple. Two or three slightly heavier arterials cross the map.
A few blocks have faint hatching. No labels, street names, compass rose, scale
bar, buildings, or decorative landmarks.

Show exactly two data subjects. Keep every dot sparse and countable. Stops must
sit on land near streets or blocks. No stop dot may appear in the river, inside
a park, or outside the map.

Subject A uses slate-blue (#5C7A99): exactly 30 small solid stop dots arranged
as one loose, generally circular distribution centered northwest of the river.
Exactly 21 dots are inside its clean thin radius-of-gyration ellipse and 9 are
outside. Most outside dots remain northwest; three to five may cross the river
into the southeast district, but they must still sit on land. A small filled
square marks the centroid.

Subject B uses amber-ochre (#C89B4A): exactly 20 stop dots arranged as one
smaller, generally circular distribution in the southeast district. Exactly 14
dots are inside its clean thin dashed radius-of-gyration ellipse and 6 are
outside, all on southeast land. A hollow circular marker marks the centroid.

The two radius circles partially overlap but remain distinguishable in
grayscale through size and line style. Both are clean ellipses consistently
flattened in the panel plane, never irregular loops. No legend, annotation
text, coordinates, route lines, heatmap, or radiating ping rings. All map
frames, straight streets, and inset rules must follow the master panel's two
parallel axes; no line may converge, bow, or warp.
```

Production name: `map-panel.png`

## Panel 4: Exploratory Data Analysis

Use the approved Orientation B master as Image 1 and edit target. Use the
current EDA v2 only as Image 2, a three-region content reference. Combine the
content-panel shared style block, this block, and the chroma-key block.

```text
Primary request: edit only the blank top face of Image 1 into a restrained
exploratory-data-analysis worksheet divided into three regions by thin
hairline frames. Preserve Image 1's exact outer silhouette, top-face
parallelogram, approved master thickness bands, parallel-line geometry, canvas
placement, paper texture, and chroma-key background without any change.

The left and largest region is a dataframe table with about five columns and
seven rows plus a header. Use crisp ruled column separators and one heavier
rule beneath the header. Every table rule follows one of the master panel's two
axes and all corresponding rules are exactly parallel. Cell contents are
intentional illegible notebook shorthand: compact clusters of two to four
joined cursive-like loops, stems, and graphite strokes aligned consistently to
each row baseline. They should read as deliberate anonymized scribbles, not as
failed typography, random dashes, pseudo-words, digits, or recognizable
letters. One column contains tiny amber inline horizontal bars of varied
lengths.

The upper-right region is a scatter plot with about 35 small ink dots forming a
clear positive-slope cloud. Add exactly one thin regression line and a few
obvious outliers. Do not add a confidence band, secondary line, trend ribbon,
legend, annotation, or label.

The lower-right region is a row of three or four classic box-and-whisker plots
with varied boxes, median rules, whiskers, and occasional outlier dots.

No bar chart, histogram, dashboard metrics, cards, readable text, digits, or
letters. Axis ticks are short ink marks only. Keep whitespace between all three
regions and avoid visual clutter. Every frame, separator, table rule, axis, and
box-plot baseline must follow the master panel's two exact parallel directions;
no structural line may converge, bow, skew independently, or warp.
```

Production name: `data-panel.png`

## Panel 5A: Empty Chessboard

Use the approved Orientation B master as Image 1 and edit target. Use the
current empty board v2 only as Image 2, a graphite/material reference. Combine
the content-panel shared style block, this block, and the chroma-key block.

```text
Primary request: edit only the blank top face of Image 1 into an empty chess
study panel. Preserve Image 1's exact outer silhouette, top-face parallelogram,
approved master thickness bands, parallel-line geometry, canvas placement, paper
texture, and chroma-key background without any change.

Place one complete regular 8 by 8 checkerboard on the left two-thirds of the
top face. The complete board border and all 64 squares must be visible with a
clear paper margin on every side; nothing may be cropped at the left or any
other edge. Construct the grid from nine equally spaced parallel rules in each
of the master panel's two axis directions. All cells are equal in the panel
plane. Do not stretch the board to fill the rectangular slab.

Dark squares use rough graphite-charcoal texture with visible grain and
stipple rather than flat black. Light squares are opaque warm off-white paper.
The right quarter remains quiet warm paper with one optional thin empty notes
frame aligned to the panel axes. No diagram or generated filler is required.

The board is completely empty. No pieces, silhouettes, shadows, move arrows,
square highlights, coordinates, margin ticks, text, or objects standing on it.
No grid line or frame may converge, bow, skew independently, or warp.
```

Production name: `chess-board.png`

## Panel 5B: Accepted Chess Piece Sprites

Do not submit another chess-piece generation. Reuse the accepted sprites
unchanged:

- `chess-white-king.png`
- `chess-white-queen.png`
- `chess-white-pawn.png`
- `chess-black-king.png`
- `chess-black-rook.png`
- `chess-black-bishop.png`
- `chess-black-knight.png`

## Chess Position and Easter Egg

Use the Lomonosov seven-piece DTM-549 position:

```text
FEN: 1n1k4/6Q1/5KP1/8/7b/1r6/8/8 w - - 0 1

White: king f6, queen g7, pawn g6
Black: king d8, knight b8, bishop h4, rook b3
Best first move: Kf5
```

Source references:

- https://chess.stackexchange.com/questions/37240/what-is-the-longest-known-7-piece-checkmate
- https://en.chessbase.com/newsroom/post/8-piece-endgame-tablebases-first-findings-and-interview?page=0

Place pieces manually from measured board basis vectors. Anchor each sprite by
the center of its elliptical base. Use constant piece scale because the board
is axonometric; establish depth through board placement, overlap order, visible
bases, and contact shadows rather than rank-based scaling. Keep bases at about
55-60 percent of a square width so the white cluster on f6, g6, and g7 remains
readable.

The visible Easter egg belongs in the deterministic terminal transcript as
`dtm: 549` and `best: Kf5`, not as generated chessboard text.

## Motion Specification

Motion is implemented after the still assets are approved. None of these marks
should be baked into generated images.

- Terminal: blink only the final block cursor with a `step-end` rhythm around
  1.06 seconds.
- Protein: static.
- Map: pick four to six existing stop dots and emit sparse, staggered ping
  ripples. Show no more than one or two ripples at once. Use a slow 12-16 second
  overall cycle. Keep both radius-of-gyration circles fixed.
- EDA: static.
- Chess: on hover or keyboard focus, animate the tablebase move `Kf6-f5` once.
  Give the king a small lift, reduce and lighten its contact shadow at the
  midpoint, then let it settle. Reset unobtrusively when interaction ends. Do
  not run a persistent automatic chess loop.
- Stack: retain only a low-amplitude out-of-phase vertical drift, about 2-3
  pixels per panel. Do not add scroll parallax in the first pass.
- Reduced motion: keep every panel, cursor, ping, and chess piece static.

## Shadow Specification

- Use each transparent panel PNG as the alpha mask for one broad CSS stack
  shadow. This creates safe silhouette-aligned depth even when the asset is
  already angled.
- Do not fake broad shadows with the rectangular image canvas.
- Give chess pieces separate small contact-shadow ellipses beneath their bases:
  ink-navy, about 70 percent of base width, offset down-right 2-3 pixels, around
  0.22 opacity, and lightly blurred.
- Keep contact shadows separate from piece sprites so the `Kf6-f5` lift can
  animate naturally.

## Chroma-Key Post-Processing

For each accepted built-in generation, copy the source into the workspace or a
temporary imagegen folder and run the installed helper:

```text
python "$CODEX_HOME/skills/.system/imagegen/scripts/remove_chroma_key.py" --input <source> --out <final.png> --auto-key border --soft-matte --transparent-threshold 12 --opaque-threshold 220 --despill
```

Validate transparent corners, an opaque slab or piece interior, plausible
subject coverage, and the absence of a green fringe. Retry once with
`--edge-contract 1` if a thin fringe remains. Ask before switching to a model
or CLI path that provides native transparency.

## Run Log

For every generation, append the date, exact expanded prompt, reference inputs,
tool/mode, source path, processed output path, and decision. Keep rejected
outputs only when they are useful for diagnosing the next revision.

| Date | Asset | Prompt revision | Reference inputs | Source/output | Decision | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-07-14 | Orientation B master | v1: `Shared Style Block` + `Orientation B` + `Orientation B Master Slab` + `Chroma-Key` | mockup 1 | `generated-sources/orientation-b-master-source-v1.png` -> `generated-sources/orientation-b-master-v1.png` | accepted | Established the shared 1536x1024 slab silhouette and camera. |
| 2026-07-14 | Terminal | v2: `Shared Style Block` + `Orientation A` + `Panel 1` + `Chroma-Key` | mockup 1 | `generated-sources/terminal-panel-source-v2.png` -> `public/img/home-artifacts/terminal-panel-v2.png` | accepted | Spacious text-free display; deterministic transcript added in Astro. |
| 2026-07-14 | Protein-peptide docking | v2: edit master; preserve outer geometry; apply `Panel 2` content verbatim | Orientation B master, mockup 1 | `generated-sources/protein-panel-source-v2.png` -> `public/img/home-artifacts/protein-panel-v2.png` | accepted | Receptor ribbon, amber peptide, and subordinate contact map remained sparse. |
| 2026-07-14 | Stops / radius-of-gyration map | v2: edit master; preserve outer geometry; apply `Panel 3` content verbatim | Orientation B master, mockup 1 | `generated-sources/map-panel-source-v2.png` -> `public/img/home-artifacts/map-panel-v2.png` | accepted | Two subjects, overlapping radius circles, river, and sparse street fabric. |
| 2026-07-14 | EDA worksheet | v2: edit master; preserve outer geometry; apply `Panel 4` content verbatim | Orientation B master, mockup 1 | `generated-sources/data-panel-source-v2.png` -> `public/img/home-artifacts/data-panel-v2.png` | accepted | Dataframe strokes, positive-slope scatter, and four box plots; no readable text. |
| 2026-07-14 | Empty chessboard | v2: edit master; preserve outer geometry; apply `Panel 5A` content verbatim | Orientation B master, mockup 1 | `generated-sources/chess-board-source-v2.png` -> `public/img/home-artifacts/chess-board-v2.png` | accepted | Empty 8x8 graphite board with consistent slab silhouette. |
| 2026-07-14 | Seven chess sprites | v2: `Panel 5B` + `Chroma-Key` | accepted empty chessboard | `generated-sources/chess-piece-sheet-source-v2.png` -> seven `public/img/home-artifacts/chess-*-v2.png` crops | accepted | Exactly seven requested Staunton pieces; opaque interiors and consistent base anchors. |
| 2026-07-14 | Orientation A blank master | v3.3: master style + exaggerated 320px rightward rise + 5px thickness + chroma key | mockup 1; terminal v2 material reference | `generated-sources/terminal-master-source-v3.png` -> `generated-sources/terminal-master-v3.png` | rejected | Too thin, and the visible side face put the upright panel on the wrong camera handedness. |
| 2026-07-14 | Orientation B blank master | v3.3: master style + explicit four-corner parallelogram guide + 5px thickness + chroma key | Orientation B v1 material reference | `generated-sources/orientation-b-master-source-v3.png` -> `generated-sources/orientation-b-master-v3.png` | rejected | Parallel geometry was improved, but the slab read as paper-thin. |
| 2026-07-14 | Orientation A blank master | v4: exact reference slope + shared left-facing camera + 10–12px left/bottom thickness + chroma key | mockup 1; Orientation B v3 camera reference; terminal v3 material reference | `generated-sources/terminal-master-source-v4.png` -> `generated-sources/terminal-master-v4.png` | accepted | Blank face only. Right edge is higher than left; the visible side face stays on the left and bottom, with no right-side band. |
| 2026-07-14 | Orientation B blank master | v4: precise v3 master edit + 10–12px target thickness on nearer/left faces + chroma key | Orientation B v3 edit target | `generated-sources/orientation-b-master-source-v4.png` -> `generated-sources/orientation-b-master-v4.png` | accepted | Preserved the accepted top-face angle and parallel geometry while moving the edge weight between the chunky v2 and thin v3 passes. |
| 2026-07-14 | Terminal | v4: precise master-face edit; sparse title bar, gutter, and baseline guides; no generated copy | Orientation A v4 master edit target; terminal v2 content reference | `generated-sources/terminal-panel-source-v4.png` -> `generated-sources/terminal-panel-v4.png` | pending user review | Preserved the approved left-viewed silhouette and added only code-ready terminal structure. |
| 2026-07-14 | Protein-peptide docking | v4: precise master-face edit; dominant ribbon complex plus unframed binding-pocket close-up | Orientation B v4 master edit target; protein v2 ribbon reference | `generated-sources/protein-panel-source-v4.png` -> `generated-sources/protein-panel-v4.png` | pending user review | Replaced the contact matrix with a secondary receptor-peptide interface close-up. |
| 2026-07-14 | Stops / radius-of-gyration map | v4.2: precise master-face edit followed by dot-only river/park placement correction | Orientation B v4 master edit target; map v2 content reference | `generated-sources/map-panel-source-v4.png` -> `generated-sources/map-panel-v4.png` | pending user review | Two circular 70/30-style distributions; all colored marks remain on land and outside parks. The first candidate was discarded because blue outliers touched the river corridor. |
| 2026-07-14 | EDA worksheet | v4: precise master-face edit; intentional notebook shorthand, one regression line, four box plots | Orientation B v4 master edit target; EDA v2 layout reference | `generated-sources/data-panel-source-v4.png` -> `generated-sources/data-panel-v4.png` | pending user review | Removed the confidence band and replaced dash-like cells with authored semi-legible scribbles. |
| 2026-07-14 | Empty chessboard | v4: precise master-face edit; complete 8x8 board at left with empty notes field | Orientation B v4 master edit target; chessboard v2 graphite reference | `generated-sources/chess-board-source-v4.png` -> `generated-sources/chess-board-v4.png` | pending user review | Complete uncropped board, no coordinates, and no generated pieces. Existing v2 sprites remain frozen. |
| 2026-07-15 | Orientation A blank master | v5: top-left viewpoint and middle-ground thickness while retaining the v4 material treatment | terminal v4 edit target | `generated-sources/terminal-master-source-v5.png` -> `generated-sources/terminal-master-v5.png` | superseded | Material, rounded corners, and top/left thickness were strong, but its long axis did not match the tabletop stack. |
| 2026-07-15 | Orientation B blank master | v5: preserve v1 pose/material treatment with the thinner v4 edge weight | Orientation B v1 edit target; v4 thickness reference | `generated-sources/orientation-b-master-source-v5.png` -> `generated-sources/orientation-b-master-v5.png` | superseded | Strong visual reference for v6, but the stack now uses explicitly measured axes. |
| 2026-07-15 | Orientation A blank master | v6: exact scaffold edit; 13-degree shared long axis; vertical standing axis; top/left thickness only | `orientation-a-scaffold-v6.png`; terminal v5 material reference | `generated-sources/terminal-master-source-v6.png` -> `generated-sources/terminal-master-v6.png` | accepted | Built-in edit followed by chroma removal and face rectification against the measured scaffold. |
| 2026-07-15 | Orientation B blank master | v6: exact scaffold edit; 13-degree long axis; 42-degree depth axis; 24px vertical thickness drop | `orientation-b-scaffold-v6.png`; Orientation B v1 material reference | `generated-sources/orientation-b-master-source-v6.png` -> `generated-sources/orientation-b-master-v6.png` | superseded | Geometry was correct, but the rectified inset was visibly uneven and some seams were rough. |
| 2026-07-15 | Orientation B blank master | v7: constant 26px inset, moderate rounded corners, exact 13/42-degree scaffold, generated paper texture, deterministic clean linework | `orientation-b-scaffold-v7.png`; Orientation B v1 material reference | `generated-sources/orientation-b-master-source-v7.png` -> `generated-sources/orientation-b-master-v7.png` | pending user review | Imagegen supplies the paper character; the measured vector scaffold owns the silhouette, inset, hatching boundaries, and antialiased structural lines. |
| 2026-07-15 | Final blank masters | user-supplied transparent masters | user-authored final Orientation A and B PNGs | `generated-sources/terminal-master-source-final.png`; `generated-sources/orientation-b-master-source-final.png` | accepted / locked | These two 1080x720 alpha PNGs supersede all generated blank-master candidates. |
| 2026-07-15 | Terminal | final: locked-master face edit; sparse title bar, gutter, baseline guides; no generated copy | final terminal master; terminal v2 content reference | `generated-sources/terminal-panel-source-final.png` -> `public/img/home-artifacts/terminal-panel-final.png` | generated for review | The final output reuses the user's alpha mask byte-for-byte; readable transcript remains code-owned. |
| 2026-07-15 | Protein-peptide docking | final: dominant receptor/peptide ribbon plus exactly two unframed biostatistical figures | final Orientation B master; protein v2 ribbon reference | `generated-sources/protein-panel-source-final.png` -> `public/img/home-artifacts/protein-panel-final.png` | generated for review | A targeted second pass combined the histogram and density curve into one upper figure and retained one lower point-and-whisker figure. |
| 2026-07-15 | Stops / radius-of-gyration map | final: pale river/parks with sparse blue and amber circular distributions | final Orientation B master; map v4 content reference | `generated-sources/map-panel-source-final.png` -> `public/img/home-artifacts/map-panel-final.png` | generated for review | Colored stops remain on land; river and parks are subtly tinted for legibility. |
| 2026-07-15 | EDA worksheet | final: five-column, eight-row table; authored scribbles; single-line scatter; four box plots | final Orientation B master; EDA imagegen pass as visual reference | `generated-sources/data-overlay-final.svg` -> `public/img/home-artifacts/data-panel-final.png` | generated for review | Structural content was rebuilt on an affine overlay derived from the master's axes after the imagegen table drifted. Hough validation clusters at the final master directions. |
| 2026-07-15 | Empty chessboard | final: exact empty 8x8 board plus quiet study-note area | final Orientation B master; generated graphite-square texture | `generated-sources/chess-board-source-final.png` -> `public/img/home-artifacts/chess-board-final.png` | generated for review | The imagegen result was 9x8 and rejected. The final board deterministically reconstructs 64 alternating cells; rectified validation passed 64/64. |

All calls used the built-in image generation mode. The v2 prompt revision
column records the approved block assembly from the earlier pass. The selected
v3 terminal call strengthened the requested diagonal to a 320-pixel rightward
rise so the generated face would approach the mockup's visible angle. The
selected v3 tabletop call used the explicit top-face corner guide `(160,370)`,
`(1160,130)`, `(400,790)`, `(1400,550)` and required identical opposite-edge
vectors. These are generation guides rather than claims about exact output
pixels.

Chroma-key removal used the installed helper with border auto-key, soft matte,
thresholds 12/220, and despill. The v3, v4, v5, and v6 blank-master outputs are
1536x1024 32-bit alpha PNGs with fully transparent corners. No CLI fallback or
native-transparency model was used. The first v4 terminal attempt correctly
moved the visible side to the left but reversed the reference slope, so it was
discarded before copying into the repository. The five v4 content panels also
used built-in precise-object edits followed by the same chroma-key helper. No
v4 chess sprites or combined stack asset was generated. The v6 pass used the
measured scaffold silhouettes as a final local rectification mask so imagegen
could supply tactile material treatment without being trusted to preserve the
requested axes on its own. The v7 Orientation B redo keeps generated paper
character but renders its outer geometry and constant-width inset directly from
the measured scaffold, avoiding the v6 face-rectification seams. The final
content pass used the built-in image-generation mode for terminal, protein,
map, EDA reference art, and chess texture, then composited content only inside
the two user-supplied final masters. All five final files are 1080x720 alpha
PNGs whose alpha masks match their corresponding master exactly. The EDA grid
and 8x8 chessboard use deterministic measured overlays because those structures
failed raw generation validation. No component or layering code changed during
this pass.
