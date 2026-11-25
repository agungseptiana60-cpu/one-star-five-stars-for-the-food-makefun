// Entry program for the make.fun bounty
// "One Star, Five Stars for the Food"
// (u-po-pu-one-star-five-stars-for-the-food-f9166ee7).
//
// The whole entry is one sentence, under 200 characters:
// an alien tourist's one-star review of Earth that still
// compliments the food. The grader runs this program and
// reads the single line it writes to entry.txt in the
// output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: trade the generic pardon for a sharper alien
// turn. The grievances get concrete and outsider-eyed —
// gravity that clings, rain that arrives uninvited, humans
// queuing as if standing were a sport — and the food
// compliment lands as the punchline: the midnight street
// noodles were so good the tourist asks to be abducted
// again. 186 characters, one sentence, one line.
export const ENTRY_LINE =
  "One star for Earth, where gravity clings, rain arrives uninvited, and humans queue as if standing were a sport, but the midnight street noodles were so good I asked to be abducted again.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 200 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
