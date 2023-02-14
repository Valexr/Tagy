import { writable, derived } from 'svelte/store';
import makeMatrix from './helpers/makeMatrix';
import type { Matrix } from '$types';

export const time = timer(0)
export const game = writable('')
export const steps = writable(0)
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

export function timer(ms = 0, started = false) {
    const time = (ms: number) => new Date(ms).toISOString().slice(11, -5)

    const { subscribe, set } = writable(time(ms))

    let interval = 0

    started && start()

    function start(up = 0) {
        ms = up || ms
        set(time(ms))
        stop()
        interval = setInterval(() => {
            ms = ms + 1000
            if (ms < 0) stop()
            else set(time(ms));
        }, 1000);
    }

    function pause() {
        clearInterval(interval);
    };
    function stop() {
        clearInterval(interval);
        ms = 0
    };

    return {
        subscribe, set, start, pause, stop
    }
};