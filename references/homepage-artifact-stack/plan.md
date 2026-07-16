# Homepage Artifact Stack Refresh Plan

Status: user-supplied final masters locked; five final content panels generated for review; layering deferred
North star: `artifact-stack-mockup-1.png`  
Prompt source: `prompts.md`

## Goal

Rebuild the homepage hero artifact as a restrained stack of five overlapping,
medium-thickness technical panels. Match the north star's angle, depth, and hierarchy
without making any panel busy or glossy. The final stack remains decorative,
static-site compatible, and legible in both themes.

## Final Stack Order

Top to bottom:

1. Facing terminal display with deterministic transcript and cursor.
2. Axonometric protein-peptide docking figure with receptor ribbons.
3. Axonometric city map with stops and radius-of-gyration circles.
4. Axonometric EDA worksheet with dataframe, scatter plot, and box plots.
5. Axonometric chessboard with seven separately placed Lomonosov pieces.

The current VM panel is retired and replaced by the map.

## Visual Contract

- `artifact-stack-mockup-1.png` is the sole composition reference.
- Panels preserve the two user-supplied 1080x720 final masters exactly,
  including thickness, rounded corners, inset, placement, and alpha silhouette.
- All structural edges use orthographic/axonometric construction. Corresponding
  straight edges remain exactly parallel with no convergence or warping.
- Every panel shares a long axis exactly 13 degrees north of east. Orientation
  A's standing edges are vertical. Orientation B's depth edges are exactly 42
  degrees south of east.
- Terminal uses the facing-screen orientation. Panels 2-5 share one consistent
  tabletop axonometric orientation.
- Palette stays warm off-white, charcoal-navy, slate-blue, and restrained
  amber-ochre.
- Generated assets contain no cast shadows or readable copy.
- Broad shadows are alpha-masked in CSS. Chess contact shadows are separate
  ellipses controlled in code.
- Generated art stays sparse. Remove subordinate marks before adding new ones
  when a panel feels busy at final hero size.

## Current Final-Panel Revision Gate

- [x] Lock `terminal-master-source-final.png` and
  `orientation-b-master-source-final.png` as immutable edit targets.
- [x] Prepare targeted edit prompts for terminal, protein, map, EDA, and chess.
- [x] Freeze and reuse the accepted v2 chess-piece sprites.
- [x] Generate terminal, protein, map, EDA, and chess content from the locked
  masters and save final public alpha PNGs.
- [x] Correct protein to exactly two stacked biostatistical figures.
- [x] Replace the drifting EDA structure with a measured five-column/eight-row
  overlay, one regression line, and four box plots.
- [x] Reject the generated 9x8 chess grid and reconstruct an exact 8x8 board;
  rectified validation passed all 64 alternating cells.
- [x] Validate that every final panel's alpha mask exactly matches its master
  and that public files match their generated-source copies.
- [ ] Obtain user approval for the five final content panels.
- [ ] Revisit layering, overlap, and chess placement.

Do not modify `HeroArtifactStack.astro` or the stack layering until the five
final content panels pass review.

## Milestone 1: Reference Baseline

- [x] Keep `artifact-stack-mockup-1.png` as the north star.
- [x] Retire and remove `artifact-stack-mockup-2.png`.
- [x] Save the approved prompts and production rules in `prompts.md`.
- [x] Save this handoff plan.

## Milestone 2: Generate and Approve Still Assets

- [x] Inspect mockup 1 immediately before generation and load it as a
  composition/perspective reference.
- [x] Generate one blank Orientation B master slab first; approval is the
  current revision gate.
- [x] Generate the terminal independently in Orientation A.
- [x] Populate protein, map, EDA, and chessboard variants from the same
  Orientation B master while preserving its silhouette and camera.
- [x] Generate one seven-piece chess sprite sheet with exactly the required
  white and black pieces.
- [x] Budget three or four focused attempts per difficult asset rather than
  changing several prompt variables at once.
- [x] Save every submitted prompt and decision in the run log.
- [x] Store accepted source and alpha-processed assets under versioned names;
  keep current production assets until the replacement stack is approved.

Acceptance gate: all five still panels must look coherent together before
adding terminal copy, chess pieces, shadows, or animation.

## Milestone 3: Alpha Processing and Asset Validation

- [x] Remove the flat chroma key with the installed imagegen helper.
- [x] Validate alpha channels, transparent corners, opaque panel interiors,
  clean edges, and the absence of green spill.
- [x] Crop the approved sprite sheet into seven consistently padded assets.
- [x] Confirm every sprite has the same base anchor convention and camera.
- [x] Optimize final files for hero use without blurring ink lines.

If chroma-key extraction fails for the chess pieces, retry the generated source
and local matte settings first. Do not switch to native-transparency CLI/model
generation without explicit user approval.

## Milestone 4: Assemble the Static Stack

- [x] Update `HeroArtifactStack.astro` to use terminal, protein, map, data, and
  chess layers in the approved order.
- [x] Replace the current VM layer and asset references with the map layer.
- [x] Place wrappers with `left` and `top` percentages; reserve transforms for
  drift and small final alignment corrections.
- [x] Preserve alpha-masked broad panel shadows and tune them against the new
  silhouettes.
- [x] Add deterministic terminal text only after the generated terminal slab
  matches the north star.
- [x] Measure chessboard basis vectors and place the seven sprites at the exact
  FEN squares, anchored by the center of each base.
- [x] Keep chess piece scale constant. Use z-order, bases, and contact shadows
  for depth.
- [x] Verify that the f6/g6/g7 white cluster remains distinguishable.

Lomonosov position:

```text
1n1k4/6Q1/5KP1/8/7b/1r6/8/8 w - - 0 1
```

## Milestone 5: Add Restrained Motion

- [x] Blink the terminal block cursor.
- [x] Add sparse map pings without changing either radius circle.
- [x] Animate `Kf6-f5` once on chess hover or keyboard focus, including its
  contact shadow.
- [x] Keep protein and EDA panels static.
- [x] Retain only 2-3 pixel out-of-phase panel drift; omit scroll parallax in
  the first pass.
- [x] Disable all motion under `prefers-reduced-motion: reduce`.

Do not add histogram breathing, hydrogen-bond crawling, regression draw-on,
sparkline growth, scanlines, piece-drop entrances, or a persistent chess loop.

## Milestone 6: Visual and Build Verification

- [ ] Review the hero at desktop and mobile sizes against mockup 1.
- [ ] Check that the stack supports the hero copy instead of obscuring it.
- [ ] Verify light and dark themes, especially paper contrast and shadow color.
- [ ] Confirm no panel or piece clips during drift, focus, or chess movement.
- [ ] Confirm reduced motion produces a fully static composition.
- [ ] Use the existing user-started local server for visual review; do not
  start a dev server from an agent session unless explicitly requested.
- [x] Run `npm run build` after Astro or CSS implementation changes.
- [x] Update `AGENTS.md` with the final assets and implementation behavior.

## Risks and Fallbacks

- Perspective drift: return to the approved Orientation B master and preserve
  its outer geometry as an edit invariant.
- Garbled text: keep all readable terminal content deterministic; do not spend
  rerolls trying to bake it into the image.
- Busy protein panel: remove supporting contact-map marks before simplifying
  the receptor and peptide ribbons.
- Busy map: reduce stray stops before reducing the two primary clusters.
- Chess overlap: narrow sprite bases or slightly reduce every piece equally;
  never move a piece off its FEN square.
- Weak depth: tune side-face contrast and alpha-masked panel shadows before
  adding more decoration or motion.
- Mobile clutter: reduce the stack's overall opacity and scale while preserving
  the layer order and silhouette.

## Out of Scope

- Three.js or a full 3D scene.
- Interactive terminal commands.
- Generated readable text.
- Scientific claims or fabricated metrics.
- Reworking unrelated homepage copy or sections.
- Replacing the project thumbnail system.
