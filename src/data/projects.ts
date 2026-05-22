export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  status: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  highlights: string[];
  metrics: string[];
  links: { label: string; href: string }[];
  demo:
    | "leetloop"
    | "affinity"
    | "paper"
    | "terminal"
    | "pipeline"
    | "structures"
    | "database"
    | "paint"
    | "chess"
    | "map"
    | "charts"
    | "azure-criticality"
    | "translator"
    | "hiring";
  visual: string;
  image?: string;
  thumbnailFrameBackground?: string;
  imageAttribution?: {
    title: string;
    creator: string;
    creatorHref: string;
    sourceHref: string;
    license: string;
    licenseHref: string;
  };
};

export const projects: Project[] = [
  {
    slug: "leetloop",
    title: "LeetLoop",
    kicker: "Product engineering",
    year: "2026",
    status: "Active build",
    summary:
      "A local-first spaced repetition tracker for coding interview prep.",
    problem:
      "LeetCode prep gets noisy fast. Solved problems disappear into a list, weak topics are hard to revisit intentionally, and most trackers are either too manual or too rigid.",
    approach:
      "I built a Next.js app with typed problem data, attempt logging, review scheduling, import/export backups, and curated templates for common study sets.",
    result:
      "The current version supports adding problems, logging attempts, reviewing scheduled work, and backing up local data as JSON.",
    stack: ["Next.js", "TypeScript", "React", "Vitest", "local data"],
    highlights: [
      "Spaced repetition scheduling for problem review",
      "Attempt modal with fast outcomes",
      "LeetCode 75 and Top Interview 150 templates",
      "JSON backup controls for local data",
    ],
    metrics: ["Client-first data model", "Template-backed problem sets", "Unit-tested date helpers"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/leetloop" }],
    demo: "leetloop",
    visual: "screenshot",
    image: "/img/leetloop.png",
    thumbnailFrameBackground: "#f1f7fb",
  },
  {
    slug: "boltz2-affinity",
    title: "Boltz-2 Affinity Embedding Modeling",
    kicker: "Computational biology",
    year: "2026",
    status: "Research prototype",
    summary:
      "Per-target ligand affinity models built from Boltz-2 affinity-module embeddings and benchmarked against scalar model outputs.",
    problem:
      "Published biomolecular models can expose useful internal representations, but it is not obvious whether those embeddings improve target-specific affinity prediction.",
    approach:
      "I built a Python pipeline that joins ULVSH labels, Boltz scalar outputs, docking features, and extracted affinity embeddings into comparable feature sets.",
    result:
      "The pipeline writes target-specific datasets, manifests, cross-validation metrics, predictions, and saved model artifacts.",
    stack: ["Python", "scikit-learn", "Boltz-2", "ULVSH", "joblib"],
    highlights: [
      "Feature sets for embeddings, Boltz scalars, ULVSH scores, and combined inputs",
      "Per-target classifier and regressor artifacts",
      "Manifest outputs for coverage and benchmark summaries",
      "Designed to compare learned representations against model scalar heads",
    ],
    metrics: ["1024 embedding features", "ROCK1 target pipeline", "Cross-validation outputs"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/boltz2_aff" }],
    demo: "affinity",
    visual: "screenshot",
    image: "/img/boltz.png",
    thumbnailFrameBackground: "#050807",
    imageAttribution: {
      title: "Boltz protein structure render",
      creator: "jwohlwend/boltz",
      creatorHref: "https://github.com/jwohlwend/boltz",
      sourceHref: "https://github.com/jwohlwend/boltz",
      license: "MIT License",
      licenseHref: "https://github.com/jwohlwend/boltz/blob/main/LICENSE",
    },
  },
  {
    slug: "pitt-binding-research",
    title: "Protein-Peptide Binding Research",
    kicker: "Published research",
    year: "2025",
    status: "Published",
    summary:
      "AI-assisted protocol for protein-peptide binding pose prediction using AlphaFold 2, ZDOCK, and ANI-2x refinement.",
    problem:
      "Protein-peptide docking is harder when there is no experimental structure to start from.",
    approach:
      "The study combined generated structures, docking candidates, and machine-learning potential refinement to rerank predicted poses.",
    result:
      "On 62 challenging systems, the method recovered the correct structure for 34 percent of top-ranked poses and 45 percent within the top three.",
    stack: ["AlphaFold 2", "ZDOCK", "ANI-2x", "Python", "JCC"],
    highlights: [
      "Co-authored peer-reviewed computational chemistry research",
      "No pre-existing experimental structural information required",
      "Tested across 62 challenging systems",
      "Follow-on work investigated AlphaFold confidence scores and binding affinity shifts",
    ],
    metrics: ["34 percent top-1 success", "45 percent top-3 success", "62 benchmark systems"],
    links: [{ label: "DOI", href: "https://doi.org/10.1002/jcc.70137" }],
    demo: "paper",
    visual: "paper",
    image: "/img/research-pitt.jpg",
    thumbnailFrameBackground: "#fff",
  },
  {
    slug: "pepdock",
    title: "PepDock",
    kicker: "Computational biology",
    year: "2026",
    status: "Research repo",
    summary:
      "A systematic evaluation of AlphaFold 3 for protein-peptide structure prediction.",
    problem:
      "AlphaFold 3 can produce strong-looking peptide-protein complexes, but its reliability for therapeutic peptide docking needs to be tested across structure, mutation, and affinity settings.",
    approach:
      "I evaluated AF3 across baseline docking accuracy, sequence perturbations, out-of-distribution targets, ligand-swapping controls, and confidence-metric correlation with experimental binding affinity.",
    result:
      "The repo documents strong median baseline DockQ performance alongside limits in sequence sensitivity, physical specificity, and using pLDDT or PAE as affinity proxies.",
    stack: ["AlphaFold 3", "Python", "Jupyter", "DockQ", "SKEMPI", "PepPCBench"],
    highlights: [
      "Benchmarks structural sensitivity to single and double mutations",
      "Tests generalization on unseen protein-peptide targets",
      "Compares confidence metrics against experimental binding-affinity changes",
      "Includes processed data, notebooks, results, figures, and example outputs",
    ],
    metrics: ["Median DockQ above 0.85 baseline", "Mutation and ligand-swapping tests", "May 2026 writeup"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/pepdock" }],
    demo: "structures",
    visual: "screenshot",
    image: "/img/pepdock.png",
    thumbnailFrameBackground: "#fff",
  },
  {
    slug: "pennos",
    title: "PennOS",
    kicker: "Systems",
    year: "2026",
    status: "Course project",
    summary:
      "A small Unix-like OS project with a cooperative threading kernel, shell, scheduler, job control, and PennFAT file system.",
    problem:
      "The project required shell-level behavior backed by process, scheduler, and file-system internals.",
    approach:
      "My partner and I implemented the project for CIS 5480 and published binaries while omitting source to preserve course integrity.",
    result:
      "The public repo includes runnable PennOS and PennFAT executables, with source omitted for course policy reasons.",
    stack: ["C", "Unix systems", "Shell", "Scheduler", "File system"],
    highlights: [
      "Foreground and background job control",
      "Priority-based scheduler with event logging",
      "Custom FAT-style file system",
      "Standalone PennFAT management shell",
    ],
    metrics: ["Public binaries only", "Academic integrity-safe repo", "Two-person build"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/PennOS" }],
    demo: "terminal",
    visual: "screenshot",
    image: "/img/pennos.jpg",
    thumbnailFrameBackground: "#fff",
  },
  {
    slug: "anime-analytics",
    title: "Anime Analytics",
    kicker: "Database systems",
    year: "2026",
    status: "Final project",
    summary:
      "A full-stack analytics app over MyAnimeList data with PostgreSQL ETL, Express APIs, and React dashboards.",
    problem:
      "Anime recommendation and comparison questions need joins across anime metadata, users, lists, genres, studios, and ratings without turning the frontend into a query layer.",
    approach:
      "We built a normalized PostgreSQL 16 schema on AWS RDS, Python ETL scripts for cleaned MyAnimeList CSVs, an Express backend with one parameterized SQL file per route, and a Vite/React frontend for browse, detail, profile, compare, trends, and studio views.",
    result:
      "The repo documents the full setup path, 12 backend routes, smoke tests, API docs, and a backend Vitest/Supertest suite with enforced coverage above 80 percent.",
    stack: ["PostgreSQL", "AWS RDS", "Express", "React", "Vite", "Python ETL", "Vitest"],
    highlights: [
      "Normalized schema and idempotent ETL for anime, users, and user-anime lists",
      "Parameterized SQL endpoints for browsing, recommendations, compatibility, trends, and studio quality",
      "React pages for home, browse, anime detail, user profile, compare, trends, and studios",
      "Backend route tests with a mocked database layer and coverage threshold",
    ],
    metrics: ["6,600+ anime", "100k+ users", "12 API routes", "99.77 percent backend line coverage"],
    links: [{ label: "GitHub", href: "https://github.com/laytcai/cis450-final-proj" }],
    demo: "database",
    visual: "screenshot",
    image: "/img/naruto.jpg",
    thumbnailFrameBackground: "#BE644A",
    imageAttribution: {
      title: "Naruto Minimalist Wallpaper",
      creator: "greenmapple17",
      creatorHref: "https://www.deviantart.com/greenmapple17",
      sourceHref: "https://www.deviantart.com/greenmapple17/art/Naruto-Minimalist-Wallpaper-546005960",
      license: "CC BY-NC-ND 3.0",
      licenseHref: "https://creativecommons.org/licenses/by-nc-nd/3.0/",
    },
  },
  {
    slug: "cis5810-collision-demo",
    title: "Image-to-Collision Physics Demo",
    kicker: "Robotics and vision",
    year: "2025",
    status: "Final project",
    summary:
      "A local-first web demo that turns two uploaded images into meshes, estimates object properties, and renders a Blender collision video.",
    problem:
      "The project connects a browser UI to a long-running local pipeline for property estimation, mesh generation, and rendering.",
    approach:
      "We built a Flask backend with job progress, a React/Vite frontend, Gemini property estimation, TripoSR mesh generation, and headless Blender rendering.",
    result:
      "The browser flow covers upload, analysis, property edits, generation, progress tracking, and video playback/download.",
    stack: ["Flask", "React", "Vite", "Gemini", "TripoSR", "Blender"],
    highlights: [
      "Job queue with progress tracking",
      "Editable physics properties before generation",
      "Mesh generation and headless render pipeline",
      "Browser playback and download flow",
    ],
    metrics: ["Two-image input", "Four-stage pipeline", "Local-first architecture"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/cis-5810-final-project" }],
    demo: "pipeline",
    visual: "screenshot",
    image: "/img/collision.jpg",
    thumbnailFrameBackground: "#111613",
  },
  {
    slug: "spark-social-map",
    title: "Spark Social Map",
    kicker: "Full-stack app",
    year: "2026",
    status: "Hack build",
    summary:
      "A real-time social map where users can pin text, image, and video posts to locations and filter by their following network.",
    problem:
      "The app treats the map as the main feed rather than a secondary filter.",
    approach:
      "I built a Next.js app with Mapbox, Clerk auth, Supabase data/storage, profile sync, media upload, and social follow filters.",
    result:
      "The deployed prototype supports map navigation, marker creation, post viewing, user search, follows, and network-only filtering.",
    stack: ["Next.js", "TypeScript", "Mapbox", "Clerk", "Supabase"],
    highlights: [
      "Mapbox-powered dark map UI",
      "Pinned media posts",
      "Follow graph and network filter",
      "Supabase row-level security and storage",
    ],
    metrics: ["4-5 hour build", "Netlify deployment", "Auth-backed prototype"],
    links: [
      { label: "GitHub", href: "https://github.com/DPnimo11/spark-challenge" },
      { label: "Live site", href: "https://spark-proj.netlify.app/" },
    ],
    demo: "map",
    visual: "screenshot",
    image: "/img/spark.jpg",
    thumbnailFrameBackground: "#f8fbfb",
  },
  {
    slug: "manga-translator",
    title: "Manga Translator",
    kicker: "Hackathon app",
    year: "2025",
    status: "PennApps build",
    summary:
      "A Chrome extension and FastAPI backend that translate manga pages and overlay English text back onto the page.",
    problem:
      "Reading untranslated manga in-browser usually means leaving the page, running separate OCR or translation tools, and losing the layout context.",
    approach:
      "We built a Manifest V3 extension that finds large page images and sends them to a FastAPI backend for OCR, text grouping, translation, and overlay rendering.",
    result:
      "The MVP runs locally, supports optional Google Cloud Vision, Cerebras, or Gemini integrations, and falls back gracefully when external services are unavailable.",
    stack: ["Python", "FastAPI", "Chrome extension", "OCR", "Gemini", "Cerebras"],
    highlights: [
      "Chrome extension discovers manga page images",
      "Backend groups detected text regions before translation",
      "Translated text overlays render back on the source page",
      "Built in 36 hours at PennApps 2025",
    ],
    metrics: ["36-hour hackathon build", "Manifest V3 extension", "Local FastAPI backend"],
    links: [{ label: "GitHub", href: "https://github.com/MoodyMarshmallow/manga-translator" }],
    demo: "translator",
    visual: "pipeline",
  },
  {
    slug: "nexhacks-swipehire",
    title: "SwipeHire",
    kicker: "AI product prototype",
    year: "2026",
    status: "NexHacks build",
    summary:
      "A hiring tool for screening startup applicants with AI resume parsing, swipe review, and personalized candidate outreach.",
    problem:
      "Early-stage teams need to triage candidates quickly, but resume review is slow, repetitive, and usually disconnected from follow-up outreach.",
    approach:
      "We built a Next.js app with structured job setup, token-compressed resume parsing through The Token Company, batch candidate processing, swipe decisions, dashboard review, and an LLM email agent.",
    result:
      "The deployed prototype supports candidate profiles, AI summaries, interested/pass/starred states, dashboard review, and customized emails that reference profile-specific details.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Cerebras AI", "The Token Company"],
    highlights: [
      "Swipe interface for fast candidate decisions",
      "Token compression to reduce resume-parsing input size and improve performance",
      "AI-generated resume summaries and skill extraction",
      "LLM agent for customized candidate emails",
      "Dashboard for interested, starred, and passed candidates",
    ],
    metrics: ["Live deployment", "Token-compressed parsing", "Profile-aware outreach"],
    links: [
      { label: "Live site", href: "https://swipehire.online" },
      { label: "Devpost", href: "https://devpost.com/software/swipehire-pz06i5" },
      { label: "GitHub", href: "https://github.com/DPnimo11/nexhacks" },
    ],
    demo: "hiring",
    visual: "logo",
    image: "/img/swipehire.jpg",
    thumbnailFrameBackground: "#fff",
  },
  {
    slug: "cis2450-sentiment-finance",
    title: "Bluesky Sentiment and Stock Movement",
    kicker: "Data science",
    year: "2026",
    status: "Final project",
    summary:
      "A modeling pipeline that merges Bluesky sentiment with Yahoo Finance hourly data to test short-term stock movement signals.",
    problem:
      "The project tests whether social sentiment adds anything useful once timestamps, targets, and train/test splits are handled carefully.",
    approach:
      "I structured collection, audit, feature engineering, modeling, evaluation, and dashboard work into reusable notebooks and Python modules.",
    result:
      "The repo includes EDA figures, processed feature tables, trained models, and result tables.",
    stack: ["Python", "Jupyter", "pandas", "scikit-learn", "Streamlit"],
    highlights: [
      "Hourly finance and social sentiment merge",
      "Chronological train/test split",
      "Intraday and overnight target variants",
      "EDA figures and model result tables",
    ],
    metrics: ["Three-stage notebook workflow", "Train-only scaling", "Resampling comparisons"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/cis-2450-final-proj" }],
    demo: "charts",
    visual: "screenshot",
    image: "/img/bluesky.jpg",
    thumbnailFrameBackground: "#fff",
  },
  {
    slug: "cis5200-azure-criticality",
    title: "Azure VM Criticality Prediction",
    kicker: "Machine learning",
    year: "2025",
    status: "Final project",
    summary:
      "A full ML pipeline for predicting whether a new Azure VM request is critical using configuration, CPU behavior, and tenant history.",
    problem:
      "The modeling task uses request-time features while the criticality label depends on later VM behavior.",
    approach:
      "The pipeline builds request-level tables, tenant history features, time-based splits, and model notebooks for classical and neural methods.",
    result:
      "The repository documents a 70+ column request-level dataset and multiple model families for evaluating critical VM prediction.",
    stack: ["Python", "Jupyter", "LightGBM", "CatBoost", "MLP"],
    highlights: [
      "Request-time feature construction",
      "Tenant historical behavior features",
      "Time-based train, validation, and test split",
      "Classical ML and neural model notebooks",
    ],
    metrics: ["70+ column request table", "30-day window", "Multiple model families"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/CIS-5200-Final-Project" }],
    demo: "azure-criticality",
    visual: "screenshot",
    image: "/img/azure.jpg",
    thumbnailFrameBackground: "#fff",
  },
  {
    slug: "paint",
    title: "Paint",
    kicker: "Frontend exercise",
    year: "2025",
    status: "Earlier build",
    summary:
      "A vanilla JavaScript drawing grid with color, rainbow, gradient, eraser, reset, and resize controls.",
    problem:
      "The goal was to build a small browser interaction from scratch: grid generation, brush state, pointer events, and reset/resize behavior.",
    approach:
      "I wrote the drawing board in plain HTML, CSS, and JavaScript, with scoped state for brush mode, color, opacity, and board size.",
    result:
      "The project works as a compact drawing toy and became the first interactive artifact embedded in this portfolio.",
    stack: ["JavaScript", "HTML", "CSS", "DOM events"],
    highlights: [
      "Dynamic drawing grid",
      "Color, rainbow, gradient, and eraser modes",
      "Reset and board resize controls",
      "No framework or drawing library",
    ],
    metrics: ["Vanilla JS", "Interactive browser UI", "Earlier frontend build"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/paint" }],
    demo: "paint",
    visual: "screenshot",
    image: "/img/paint.png",
    thumbnailFrameBackground: "#c3d3e4",
  },
  {
    slug: "chess",
    title: "Chess",
    kicker: "Game logic",
    year: "2025",
    status: "Course project",
    summary:
      "A Java chess implementation with piece movement logic, board state, and tests.",
    problem:
      "Chess is a useful test of object modeling because each piece has different legal moves while sharing one board and game state.",
    approach:
      "I modeled pieces, positions, moves, board behavior, and game flow in Java, with tests covering core rules and compilation.",
    result:
      "The repo contains the implementation and test structure for a playable chess project.",
    stack: ["Java", "JUnit", "Maven", "Game logic"],
    highlights: [
      "Piece-specific move logic",
      "Board and position modeling",
      "Game flow classes",
      "Test coverage for core behavior",
    ],
    metrics: ["Java implementation", "Piece hierarchy", "Tested rules"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/chess" }],
    demo: "chess",
    visual: "screenshot",
    image: "/img/chess.png",
    thumbnailFrameBackground: "#111613",
  },
];
