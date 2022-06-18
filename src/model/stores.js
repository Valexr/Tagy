import { writable, derived } from 'svelte/store';
import makeMatrix from './helpers/makeMatrix.js';

export const matrix = writable(makeMatrix());

// ======= MAKING ARRAY CONTAINING TILE POSITIONS =======

export const positions = derived( matrix, $matrix => {
    let positions = [];

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            positions[$matrix[i][j]] = {m:i, n:j};
    return positions;
} );

// ========== CHECKING IF THE BOARD IS SORTED ===========

export const isSorted = derived( positions, $positions => {
    if ($positions[0].n === 3 && $positions[0].m === 3) {
        for (let i = 15; i > 1; i--) {
            let m = Math.floor((i - 1) / 4),   // target position of tile
                n = i - 1 - 4*m;

            if ($positions[i].m !== m || $positions[i].n !== n) return false;
        }
        return true;
    }
    else return false;
} );
