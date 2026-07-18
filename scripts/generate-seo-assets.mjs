import sharp from "sharp";

const displayImages = [
  ["public/img/hocking.jpg", "public/img/hocking-display.jpg"],
  ["public/img/yuanmingyuan.jpg", "public/img/yuanmingyuan-display.jpg"],
  ["public/img/pagoda.jpg", "public/img/pagoda-display.jpg"],
  ["public/img/falls.jpg", "public/img/falls-display.jpg"],
  ["public/img/smoky.jpg", "public/img/smoky-display.jpg"],
  ["public/img/ggb.jpg", "public/img/ggb-display.jpg"],
  ["public/img/conservatory.jpg", "public/img/conservatory-display.jpg"],
  ["public/img/ice.jpg", "public/img/ice-display.jpg"],
  ["public/img/new_york.png", "public/img/new-york-display.jpg"],
  ["public/img/cathy.jpg", "public/img/cathy-display.jpg"],
  ["public/img/wall.jpg", "public/img/wall-display.jpg"],
  ["public/img/gardens.jpg", "public/img/gardens-display.jpg"],
];

await Promise.all(
  displayImages.map(([source, destination]) =>
    sharp(source)
      .rotate()
      .resize({ width: 900, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(destination),
  ),
);

const gridLines = [
  ...Array.from({ length: 15 }, (_, index) => `<path d="M${180 + index * 56} 96v432"/>`),
  ...Array.from({ length: 7 }, (_, index) => `<path d="M96 ${132 + index * 56}h1008"/>`),
].join("");

const socialPreview = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f6f1e8"/>
  <path d="M80 86h1040M80 544h1040M148 60v520M1050 60v520" stroke="#242725" stroke-width="2" opacity="0.22"/>
  <g fill="none" stroke="#242725" opacity="0.12" stroke-width="1">${gridLines}</g>
  <rect x="770" y="118" width="274" height="306" fill="#ebe4d7" stroke="#242725" stroke-width="3"/>
  <rect x="804" y="154" width="206" height="28" fill="#242725"/>
  <rect x="804" y="214" width="168" height="16" fill="#242725" opacity="0.7"/>
  <rect x="804" y="252" width="128" height="16" fill="#242725" opacity="0.48"/>
  <rect x="804" y="290" width="188" height="16" fill="#242725" opacity="0.32"/>
  <circle cx="910" cy="370" r="34" fill="#9fb4aa" stroke="#242725" stroke-width="3"/>
  <path d="M860 468h166" stroke="#242725" stroke-width="3"/>
  <text x="132" y="206" fill="#242725" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="800">Darren Wang</text>
  <text x="136" y="274" fill="#5f6761" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700">Penn CS + Robotics</text>
  <text x="136" y="358" fill="#242725" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="700">Research software / ML / Systems</text>
  <text x="136" y="418" fill="#5f6761" font-family="Consolas, Menlo, monospace" font-size="26">darren-wang.dev</text>
  <path d="M136 472h390" stroke="#242725" stroke-width="3"/>
  <path d="M136 502h270" stroke="#242725" stroke-width="3" opacity="0.45"/>
</svg>`;

await sharp(Buffer.from(socialPreview))
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile("public/img/social-preview.jpg");
