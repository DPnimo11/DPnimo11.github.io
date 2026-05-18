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
  demo: "leetloop" | "affinity" | "paper" | "terminal" | "pipeline" | "map" | "charts";
  visual: string;
  image?: string;
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
    visual: "queue",
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
    visual: "matrix",
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
    visual: "terminal",
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
    visual: "pipeline",
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
    visual: "map",
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
    visual: "chart",
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
      "The repository documents a 70-column final dataset and multiple model families for evaluating critical VM prediction.",
    stack: ["Python", "Jupyter", "LightGBM", "CatBoost", "MLP"],
    highlights: [
      "Request-time feature construction",
      "Tenant historical behavior features",
      "Time-based train, validation, and test split",
      "Classical ML and neural model notebooks",
    ],
    metrics: ["70-column ML table", "30-day window", "Multiple model families"],
    links: [{ label: "GitHub", href: "https://github.com/DPnimo11/CIS-5200-Final-Project" }],
    demo: "charts",
    visual: "chart",
  },
];

export const archiveProjects = [
  {
    title: "Paint",
    note: "Vanilla JavaScript drawing grid with color, rainbow, gradient, eraser, reset, and resize controls.",
    href: "https://github.com/DPnimo11/paint",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Calculator",
    note: "Browser calculator from an earlier frontend practice arc.",
    href: "https://github.com/DPnimo11/calculator",
    tags: ["JavaScript", "UI"],
  },
  {
    title: "Rock Paper Scissors",
    note: "Small interaction exercise from early web foundations work.",
    href: "https://github.com/DPnimo11/rock-paper-scissors",
    tags: ["HTML", "CSS"],
  },
  {
    title: "STWing Website",
    note: "React/Vite website for a student organization surface.",
    href: "https://github.com/DPnimo11/stwing_website",
    tags: ["React", "Vite"],
  },
  {
    title: "Spotify Data Engine",
    note: "React, Express, PostgreSQL music data app with table and chart surfaces.",
    href: "https://github.com/DPnimo11/Spotify-Data-Engine",
    tags: ["React", "Express", "Postgres"],
  },
  {
    title: "Chess",
    note: "Java chess implementation with piece logic and tests.",
    href: "https://github.com/DPnimo11/chess",
    tags: ["Java", "Game logic"],
  },
];
