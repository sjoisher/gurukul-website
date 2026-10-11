// Lists content that still needs real details before launch.
// Warns by default; `--strict` exits non-zero so a release build can refuse to ship them.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const PATTERNS = [/"[^"]*PLACEHOLDER[^"]*"/, /0000 ?0000/, /"0{6}"/];
const hits = [];

for (const file of readdirSync("lib")) {
  if (!file.endsWith(".ts")) continue;
  readFileSync(join("lib", file), "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (PATTERNS.some((p) => p.test(line))) hits.push(`  lib/${file}:${i + 1}  ${line.trim()}`);
    });
}

if (hits.length) {
  console.warn(`\n⚠  ${hits.length} placeholder value(s) still in use:\n${hits.join("\n")}\n`);
  if (process.argv.includes("--strict")) process.exit(1);
} else {
  console.log("✓ No placeholder values left.");
}
