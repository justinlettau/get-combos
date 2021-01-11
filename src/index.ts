import { Options } from './interfaces';

/**
 * Get all possible combinations of an array
 *
 * @param values Collection of values.
 * @param options Optional options.
 */
export function combinations<T = unknown>(values: T[], options?: Options) {
  const MAX = values.length - 1;
  const LENGTH = options?.length || values.length;
  const results: T[][] = [];
  const row: number[] = new Array(LENGTH).fill(0);
  let done = false;

  while (!done) {
    const item = row.map((index) => values[index]);
    let i = row.length;

    results.push(item);

    while (i--) {
      if (row[i] < MAX) {
        row[i]++;
        break;
      }

      if (row[i] === MAX) {
        row[i] = 0;
      }
    }

    if (row.every((x) => x === 0)) {
      done = true;
    }
  }

  return results;
}
