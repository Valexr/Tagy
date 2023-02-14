import { writable, derived, get } from 'svelte/store';
import makeMatrix from './matrix';
import moveTiles from './tiles';
import type { Matrix } from '$types';

export const time = createTimer(0)
export const game = createGame()
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
            let m = Math.floor((i - 1) / 4),
                n = i - 1 - 4 * m;

            if ($positions[i].m !== m || $positions[i].n !== n) return false;
        }
        return true;
    }
    else return false;
});

function createTimer(ms = 0, started = false) {
    const time = (ms: number) => new Date(ms * 1000).toISOString().slice(11, -5)

    const { subscribe, set } = writable(time(ms))

    let interval = 0

    started && start()

    function start(up = 0) {
        ms = up || ms
        set(time(ms))
        clearInterval(interval);
        interval = setInterval(() => {
            set(time(ms += 1));
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

function createGame() {
    const { subscribe, set } = writable('')

    function shuffle(shuffle?: boolean) {
        matrix.set(makeMatrix(shuffle))
    }

    return {
        subscribe,
        start() {
            shuffle(true);
            time.start(0);
            set("play");
        },
        pause() {
            time.pause();
            set("pause");
        },
        resume() {
            time.start();
            set("play");
        },
        stop() {
            shuffle();
            time.stop();
            steps.set(0);
            set("");
        },
        movable(index: number) {
            const pos = (i: number) => get(positions)[i]
            return pos(index).n === pos(0).n || pos(index).m === pos(0).m;
        },
        move(number: number) {
            matrix.update(matrix => moveTiles(matrix, get(positions)[number]));
        }
    }
}