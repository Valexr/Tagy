import type { Matrix } from "$types";

export default function makeMatrix(shuffle = false) {
    let arr: number[] = [],
        matrix: Matrix = Object.assign([], { void: { m: 0, n: 0 } }),
        arrIndex = 0

    makeArray();

    for (let i = 0; i < 4; i++) {
        matrix[i] = [];
        for (let j = 0; j < 4; j++) {
            if (arr[arrIndex]) {
                matrix[i][j] = arr[arrIndex];
            }
            else {
                matrix[i][j] = 0;
                matrix.void = { m: i, n: j };
            }
            arrIndex++;
        }
    }
    return matrix;

    function makeArray() {
        let isSolvable;

        function shuffleArray() {
            let randomIndex: number,
                temp: number;

            arr.map(function (value, index) {
                randomIndex = Math.floor(Math.random() * 16);
                if (arr[randomIndex] !== value) {
                    temp = arr[randomIndex];
                    arr[randomIndex] = value;
                    arr[index] = temp;
                }
            });
        }

        function checkIsSolvable() {
            let inversionCount = 0,
                nullIndex = 0;

            arr.map(function (value, index) {
                if (value === 0) nullIndex = index;
                else if (value > 1) for (let i = index + 1; i < 16; i++)
                    if (value > arr[i] && arr[i] !== 0) inversionCount++;
            });
            if (
                (!(inversionCount % 2) && ((nullIndex > 3 && nullIndex < 8) || (nullIndex > 11 && nullIndex < 16)))
                ||
                ((inversionCount % 2) && (nullIndex < 4 || (nullIndex > 7 && nullIndex < 12)))
            ) isSolvable = true;
        }

        for (let i = 0; i < 16; i++) arr.push(i);

        if (!shuffle) arr.push(Number(arr.shift()));

        while (shuffle && !isSolvable) {
            shuffleArray();
            checkIsSolvable();
        }
    }
}
