import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office reply: the sender is away, the email is forwarded
// to a future self who is no more helpful than the present one.
const LINE =
  "I'm out of office until Monday. I've forwarded your email to Future Me, who read it, sighed, and closed the tab.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
