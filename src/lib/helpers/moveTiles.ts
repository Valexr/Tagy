import type { Matrix, Position } from "$types";

export default function moveTiles(matrix: Matrix, position: Position) {
    const amountOfTiles = Math.abs(position.m - matrix.void.m || position.n - matrix.void.n);

    function moveUp() {
        for (let i = matrix.void.m + 1; i <= position.m; i++)
            matrix[i - 1][matrix.void.n] = matrix[i][matrix.void.n];
        matrix.void.m += amountOfTiles;
    }

    function moveDown() {
        for (let i = matrix.void.m - 1; i >= position.m; i--)
            matrix[i + 1][matrix.void.n] = matrix[i][matrix.void.n];
        matrix.void.m -= amountOfTiles;
    }

    function moveToTheRight() {
        for (let i = matrix.void.n - 1; i >= position.n; i--)
            matrix[matrix.void.m][i + 1] = matrix[matrix.void.m][i];
        matrix.void.n -= amountOfTiles;
    }

    function moveToTheLeft() {
        for (let i = matrix.void.n + 1; i <= position.n; i++)
            matrix[matrix.void.m][i - 1] = matrix[matrix.void.m][i];
        matrix.void.n += amountOfTiles;
    }

    if (position.m !== matrix.void.m) {
        if (position.m > matrix.void.m) moveUp();
        else moveDown();
    }
    else {
        if (position.n < matrix.void.n) moveToTheRight();
        else moveToTheLeft();
    }
    matrix[matrix.void.m][matrix.void.n] = 0;
    return matrix;
}
