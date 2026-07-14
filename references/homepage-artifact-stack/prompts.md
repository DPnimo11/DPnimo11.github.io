# Homepage Artifact Stack Prompts

Status: approved direction, not yet generated  
North star: `artifact-stack-mockup-1.png`  
Companion plan: `plan.md`

This file is the source of truth for generating the next homepage artifact
stack. The reference image controls the overall composition, overlap, depth,
and visual restraint. Do not use retired mockups as references.

## Production Rules

- Use the built-in image generation tool by default.
- Generate one distinct asset per call. The chess piece sheet counts as one
  asset and will be cropped into seven sprites after approval.
- Treat `artifact-stack-mockup-1.png` as a composition and perspective
  reference, not an edit target and not a source of panel content.
- Generate on a flat `#00ff00` chroma-key background, then remove the key
  locally and validate the alpha channel.
- Do not bake cast shadows, contact shadows, animation marks, readable text,
  cursor blocks, ping ripples, move arrows, or square highlights into assets.
- Image generation owns tactile panel art, paper texture, ink work, and visible
  slab thickness. Code later owns placement, z-index, broad shadows, readable
  terminal text, restrained motion, and chess piece placement.
- Use versioned output names during iteration. Do not overwrite the current
  production assets until replacements are accepted.
- Record every submitted expanded prompt and output in the run log at the end
  of this file.

## Shared Style Block

Prepend this block to every panel prompt:

```text
Use case: stylized-concept
Asset type: homepage hero artifact panel
Input images: Image 1 is the composition and perspective reference only. Use it
to match the restrained technical-sketchbook character, physical depth, and
overlapping slab treatment. Do not copy its panel content.

Technical sketchbook illustration resembling a precise architectural
axonometric plate. Hand-drawn dark charcoal-navy ink linework with subtle
graphite hatching and slight ink bleed. Restrained palette: dark charcoal-navy
ink (#2B3038), muted slate-blue accents (#5C7A99), and occasional warm
amber-ochre highlights (#C89B4A). No gradients, glossy 3D rendering,
photorealism, neon, or sci-fi interface styling.

The panel surface is opaque warm off-white paper (#F5F2EB) with faint natural
grain. The paper belongs to the object. The panel is a flat physical slab with
visible thickness; side faces are clean parallel bands with restrained
graphite shading, like foamcore or a thin display. Light comes from the
upper-left and lower-right-facing edges are darker.

The slab is the only object in the frame. Keep it floating free with a small,
even background margin. No cast shadow, drop shadow, contact shadow,
reflection, ground plane, dimension lines, crop marks, surrounding sketch
marks, watermark, or readable text unless a panel prompt explicitly requests
it.
```

Append this block to every panel and sprite prompt:

```text
Scene/backdrop: a perfectly flat solid #00ff00 chroma-key background for local
background removal. The background must be one uniform color with no shadows,
gradients, texture, reflections, floor plane, or lighting variation. Keep the
subject fully separated from the background with crisp edges and generous
padding. Do not use #00ff00 anywhere in the subject.
```

## Orientation A: Facing Display

Use only for Panel 1:

```text
The slab is a floating display facing the viewer, seen from slightly above and
to the right. It is rotated about 20 degrees to the left. Describe and render
the large visible surface as the front display face, not a top face. Its top
edge rises gently to the right, about 10 degrees above horizontal, while its
left edge runs steeply down-right, about 72 degrees from horizontal. The face
is tall rather than foreshortened: the viewer looks mostly at the screen, not
down onto it. About 10 pixels of thickness is visible along the bottom and
right edges, with the right edge darker. This is only a floating display slab:
no keyboard, laptop base, stand, hinge, cable, or surrounding device.
```

## Orientation B: Tabletop Axonometric

Use for Panels 2-5:

```text
True axonometric/isometric projection with no vanishing point. The top face is
a parallelogram. From the far corner, the left edge runs down-right at about 30
degrees below horizontal and the right edge runs up-right at about 15 degrees
above horizontal. The nearest corner points toward the bottom-left of the
frame. About 10-14 pixels of thickness is visible along the bottom-left and
bottom-right faces, with the lower-right band darker.

Match the exact outer silhouette, top-face quadrilateral, thickness, camera,
lighting, scale, and canvas placement of the approved Orientation B master
slab. Change only the top-face content and any panel-specific bezel or margin.
```

## Orientation B Master Slab

Generate this intermediate first. Use it as the edit target or strict visual
reference for the protein, map, EDA, and chessboard assets.

Combine the shared style block, Orientation B, this block, and the chroma-key
block:

```text
Primary request: create one empty warm off-white technical display slab in the
specified axonometric orientation. The top face is blank except for faint paper
grain and a very thin inset hairline border. Preserve a broad usable top
surface. No diagrams, grids, windows, labels, marks, controls, text, icons, or
shadows.
```

Suggested source name: `orientation-b-master-source.png`

## Panel 1: Terminal

Combine the shared style block, Orientation A, this block, and the chroma-key
block:

```text
Primary request: create a floating terminal display slab. Add a thin title bar
along the top with three small circular controls at the left and one small plus
symbol at the right. Below it is a pale paper terminal surface with a narrow
left gutter separated by one fine vertical rule. Add only faint horizontal
baseline guides and restrained microtexture so deterministic terminal copy can
be overlaid later.

Keep the terminal body spacious and calm. Do not render letters, digits,
pseudo-text, timestamps, source code, a prompt symbol, a cursor, a scanline, or
an ASCII figure. No syntax-highlight colors. The only accent is the slate-blue
gutter and title-bar detail.
```

Suggested final name: `terminal-panel-v2.png`

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

Combine the shared style block, Orientation B, this block, and the chroma-key
block. Use the approved Orientation B master as the edit target or strict shape
reference.

```text
Primary request: turn the slab's top face into a restrained structural-biology
figure showing protein-peptide docking.

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

The right quarter contains one small, sparse residue contact map: a fine square
matrix with a restrained diagonal and a few slate-blue and amber contact marks.
It is subordinate and contains no labels.

No ball-and-stick drug ligand, chemistry formula, circuit board, glowing node,
network graph, binary, lock icon, NMR squiggles, energy traces, or dashboard
chrome. No readable characters. Axis ticks, if any, are short ink strokes only.
```

Suggested final name: `protein-panel-v2.png`

## Panel 3: Stops and Radius of Gyration Map

Combine the shared style block, Orientation B, this block, and the chroma-key
block. Use the approved Orientation B master as the edit target or strict shape
reference.

```text
Primary request: turn the slab's top face into a hand-drawn urban street map
with sparse stop clusters and two radius-of-gyration overlays.

The map is an irregular urban grid. A broad diagonal river runs from lower-left
to upper-right. Northwest of it is a denser regular grid of thin streets;
southeast is a looser curving road layout with two or three irregular parks
shown by light stipple. Two or three slightly heavier arterials cross the map.
A few blocks have faint hatching. No labels, street names, compass rose, scale
bar, buildings, or decorative landmarks.

Show exactly two data subjects. Keep every dot sparse and countable.

Subject A uses slate-blue (#5C7A99): about 30 small solid stop dots split into
two tight clusters, one in the northwest grid and one just southeast of the
river, with a thin scatter between them. A thin solid slate-blue radius circle
is centered between the clusters and encloses most but not all dots. A small
filled square marks the centroid.

Subject B uses amber-ochre (#C89B4A): about 20 stop dots, with one dense cluster
in the southeast district and a thin trail toward the top-right. A smaller thin
dashed amber radius circle is centered on the cluster. A hollow circular marker
marks its centroid.

The two radius circles partially overlap but remain distinguishable in
grayscale through size and line style. No legend, annotation text, coordinates,
route lines, heatmap, or radiating ping rings.
```

Suggested final name: `map-panel-v2.png`

## Panel 4: Exploratory Data Analysis

Combine the shared style block, Orientation B, this block, and the chroma-key
block. Use the approved Orientation B master as the edit target or strict shape
reference.

```text
Primary request: turn the slab's top face into a restrained exploratory-data-
analysis worksheet divided into three regions by thin hairline frames.

The left and largest region is a dataframe table with about five columns and
seven rows plus a header. Use crisp ruled column separators and one heavier
rule beneath the header. Cell contents are short horizontal ink strokes of
varying lengths, never digits or letters. One column is right-aligned, one is
left-aligned, and one contains tiny amber inline horizontal bars of different
lengths.

The upper-right region is a scatter plot with about 35 small ink dots forming a
clear positive-slope cloud. Add one thin regression line, a faint dashed
confidence band, and a few obvious outliers.

The lower-right region is a row of three or four classic box-and-whisker plots
with varied boxes, median rules, whiskers, and occasional outlier dots.

No bar chart, histogram, dashboard metrics, cards, readable text, digits, or
letters. Axis ticks are short ink marks only. Keep whitespace between all three
regions and avoid visual clutter.
```

Suggested final name: `data-panel-v2.png`

## Panel 5A: Empty Chessboard

Combine the shared style block, Orientation B, this block, and the chroma-key
block. Use the approved Orientation B master as the edit target or strict shape
reference.

```text
Primary request: turn the slab into an empty axonometric chessboard viewed from
White's side. Rank 1 is nearest the viewer and rank 8 is farthest; the a-file is
to the viewer's left and the h-file to the right.

Draw a standard 8 by 8 checkerboard as the top-face parallelogram. Dark squares
use rough graphite-charcoal texture with visible grain and stipple rather than
flat black. Light squares are opaque warm off-white paper. A thin ruled border
frames the playing field, surrounded by a slightly wider wooden margin with
faint grain. Add only tiny abstract margin ticks, never letters or numbers.

The board is completely empty. No pieces, silhouettes, shadows, move arrows,
square highlights, coordinates, text, or objects standing on it.
```

Suggested final name: `chess-board-v2.png`

## Panel 5B: Seven Chess Piece Sprites

This is a separate generation. Combine this block with the chroma-key block;
do not apply either slab-orientation block.

```text
Use case: stylized-concept
Asset type: homepage hero chess piece sprite sheet
Input images: Image 1 is the approved empty chessboard and defines the camera,
lighting, ink style, material treatment, and piece viewing angle. Do not include
the board itself in this asset.

Primary request: create exactly seven distinct three-dimensional Staunton chess
pieces in the same technical sketchbook style as the board. View them from a
slightly elevated three-quarter angle from the upper-left so each is seen a bit
from above and from the side. Every piece stands upright with a clear flat
elliptical base and consistent camera angle.

Arrange the seven pieces as one clean sprite sheet in two centered rows with
generous spacing and no overlap:

Top row, three white pieces: king, queen, pawn.
Bottom row, four black pieces: king, rook, bishop, knight.

White pieces have opaque warm off-white bodies (#F5F2EB), clean charcoal-navy
contours, and restrained lower-right graphite hatching for volume. Their
interiors must remain opaque and must not become transparent holes. Black
pieces use the same silhouettes filled with dense graphite-charcoal texture
and a small reserved upper-left highlight.

Use recognizable classic Staunton forms: kings with cross finials, queen with
a crown, rook with crenellations, bishop with a split mitre, knight with a
restrained carved horse-head silhouette, and pawn with a simple sphere on a
collared stem. Keep bases relatively narrow so adjacent board pieces remain
legible at hero size.

Exactly seven pieces and no eighth object. No board, squares, shadows, ground
plane, labels, text, badges, border, or decorative objects. No piece may touch
another. Do not crop any piece.
```

Suggested source name: `chess-piece-sheet-source-v2.png`

Crop accepted sprites into:

- `chess-white-king-v2.png`
- `chess-white-queen-v2.png`
- `chess-white-pawn-v2.png`
- `chess-black-king-v2.png`
- `chess-black-rook-v2.png`
- `chess-black-bishop-v2.png`
- `chess-black-knight-v2.png`

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
| TBD | Orientation B master | v1 | mockup 1 | TBD | pending | Establish shared perspective first. |

