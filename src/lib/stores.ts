import { writable, derived } from 'svelte/store';
import makeMatrix from './helpers/makeMatrix';
import type { Matrix } from '$types';

export const score = writable<number>(0)
export const matrix = writable<Matrix>(makeMatrix());

export const positions = derived(matrix, $matrix => {
    let positions = [];

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            positions[$matrix[i][j]] = { m: i, n: j };
    return positions;
});

export const sorted = derived(positions, $positions => {
    if ($positions[0].n === 3 && $positions[0].m === 3) {
        for (let i = 15; i > 1; i--) {
            let m = Math.floor((i - 1) / 4),   // target position of tile
                n = i - 1 - 4 * m;

            if ($positions[i].m !== m || $positions[i].n !== n) return false;
        }
        return true;
    }
    else return false;
});
