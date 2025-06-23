// How can I improve it?
// For large dataset, I would test the performance of this code using parallel processing (worker threads)

import * as fs from 'fs';
import * as readline from 'readline';

// Utility: Remove accents/diacritics
function removeDiacritics(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// List of words to ignore
const ignoreWords = new Set([
  'studio', 'studios', 'inc', 'ltd', 'llc', 'corp', 'co', 'company', 'games',
  'game', 'entertainment', 'interactive', 'software', 'group', 'plc', 'sa', 's.a.', 'srl', 'gmbh', 'bv', 'ag', 'limited', 'canada', 'usa', 'us', 'uk'
]);

// Normalize and tokenize company name
function normalizeTokens(name: string): string[] {
  name = removeDiacritics(name).toLowerCase();
  name = name.replace(/[^a-z0-9\s]/g, ' ');
  const tokens = name.split(/\s+/).filter(t => t && !ignoreWords.has(t));
  return tokens.sort(); // sort for consistent grouping
}

async function findDuplicatesFast(filePath: string) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const names: string[] = [];
  for await (const line of rl) {
    const trimmed = line.trim();
    if (trimmed) names.push(trimmed);
  }

  // Group by normalized token set
  const normalizedMap = new Map<string, string[]>();
  for (const name of names) {
    const tokens = normalizeTokens(name);
    if (tokens.length === 0) continue;
    const key = tokens.join(' '); // sorted, so same sets map together
    if (!normalizedMap.has(key)) normalizedMap.set(key, []);
    normalizedMap.get(key)!.push(name);
  }

  // Output groups with more than one member
  let found = false;
  for (const group of normalizedMap.values()) {
    if (group.length > 1) {
      found = true;
      console.log(group.join(' | '));
    }
  }
  if (!found) {
    console.log('No potential duplicate company name groups found.');
  }
}

// Run the function (adjust the path as needed)
findDuplicatesFast('./companies.txt');
