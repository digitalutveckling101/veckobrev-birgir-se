import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, "..", "public", "og-image.png");

const cream100 = "#F5EFE2";
const ink900 = "#1A1713";
const ink500 = "#6B5F52";
const amber700 = "#A25B2A";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${cream100}" />
  <g transform="translate(80 130)">
    <text
      font-family="Inter, system-ui, sans-serif"
      font-size="22"
      font-weight="600"
      letter-spacing="4"
      fill="${amber700}"
    >VECKOBREV</text>
  </g>
  <g transform="translate(80 220)">
    <text
      font-family="Georgia, 'Source Serif 4', serif"
      font-size="72"
      font-weight="600"
      fill="${ink900}"
    >Veckobrev om AI, etik</text>
    <text
      x="0"
      y="92"
      font-family="Georgia, 'Source Serif 4', serif"
      font-size="72"
      font-weight="600"
      fill="${ink900}"
    >och <tspan font-style="italic" font-weight="500" fill="${amber700}">vibe coding</tspan></text>
    <text
      x="0"
      y="190"
      font-family="Inter, system-ui, sans-serif"
      font-size="26"
      fill="${ink500}"
    >Varje onsdag eftermiddag. En personlig reflektion,</text>
    <text
      x="0"
      y="226"
      font-family="Inter, system-ui, sans-serif"
      font-size="26"
      fill="${ink500}"
    >en AI-insikt, en mikroövning. Inget spam.</text>
  </g>
  <g transform="translate(80 560)">
    <text
      font-family="Inter, system-ui, sans-serif"
      font-size="22"
      font-weight="600"
      fill="${ink900}"
    >birgir.se</text>
  </g>
  <rect x="1080" y="40" width="8" height="550" fill="${amber700}" />
</svg>
`;

const png = await sharp(Buffer.from(svg))
  .png()
  .toBuffer();

await writeFile(outPath, png);
console.log("Wrote", outPath, png.length, "bytes");
