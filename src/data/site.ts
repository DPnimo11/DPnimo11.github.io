export const site = {
  name: "Darren Wang",
  title: "Darren Wang | Penn CS & Robotics Portfolio",
  description:
    "Portfolio of Darren Wang, a University of Pennsylvania computer science and robotics student building research software, ML/data pipelines, systems projects, and full-stack apps.",
  url: "https://dpnimo11.github.io",
  socialImage: "/img/social-preview.jpg",
  googleSiteVerification: "2sXiqOPoJsiIGYdDWY68K95sXJha6lBAP1xmRRett0A",
  github: "https://github.com/DPnimo11",
  linkedin: "https://www.linkedin.com/in/darren-wang-penn/",
  scholar: "https://scholar.google.com/citations?hl=en&user=fnvHV0cAAAAJ",
  emails: ["darrenwa@engineering.upenn.edu", "dpnimo11@gmail.com"],
  affiliation: "University of Pennsylvania",
  role: "Computer science and robotics student",
  keywords: [
    "Darren Wang",
    "University of Pennsylvania",
    "Penn CIS",
    "robotics",
    "software engineering",
    "machine learning",
    "computational biology",
    "systems programming",
    "full-stack development",
  ],
} as const;

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
