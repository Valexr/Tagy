import { matrix, positions } from './stores';
import makeMatrix from './helpers/makeMatrix';
import moveTiles from './helpers/moveTiles';
import type { Position } from '$types';

let currentPositions: Position[];

positions.subscribe(positions => currentPositions = positions);

export const shuffle = () => matrix.set(makeMatrix());
export const sort = () => matrix.set(makeMatrix(false));

export const move = (number: number) => {
    matrix.update(matrix => moveTiles(matrix, currentPositions[number]));
};
