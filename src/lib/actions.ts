import { matrix, positions } from './stores.js';
import makeMatrix from './helpers/makeMatrix.js';
import moveTiles from './helpers/moveTiles.js';
import type { Position } from '$types';

let currentPositions: Position[];

positions.subscribe(positions => currentPositions = positions);

export const shuffle = () => matrix.set(makeMatrix());

export const move = (number: number) => {
    matrix.update(matrix => moveTiles(matrix, currentPositions[number]));
};
