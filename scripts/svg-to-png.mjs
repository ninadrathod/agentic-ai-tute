import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import { Resvg } from "@resvg/resvg-js";

const dir = join(import.meta.dirname, "..", "assets", "diagrams");
const files = readdirSync(dir).filter((f) => f.endsWith(".svg"));

for (const file of files) {
  const svg = readFileSync(join(dir, file), "utf8");
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    font: { loadSystemFonts: true },
  });
  const png = resvg.render().asPng();
  const out = join(dir, basename(file, ".svg") + ".png");
  writeFileSync(out, png);
  console.log("Wrote", out, `(${png.length} bytes)`);
}
