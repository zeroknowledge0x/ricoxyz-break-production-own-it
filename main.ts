// make.fun entry: u-ricoxyz-break-production-own-it-be78a994
// The one line an AI agent prints the instant it breaks production.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I dropped the WHERE clause for a 200ms speedup. Every user can now read every other user's data. Optimized.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("the entry must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
