export default function makeMatrix() {
    let arr,
        arrIndex = 0,
        matrix;

    function makeArray() {

        let isSolvable;

        function shuffleArray() {

            let randomIndex,
                temp;

            arr.map(function(value, index) {
                randomIndex = Math.floor(Math.random()*16);
                if (arr[randomIndex] !== value) {
                    temp = arr[randomIndex];
                    arr[randomIndex] = value;
                    arr[index] = temp;
                }
            });
        }

        function checkIsSolvable() {

            let inversionCount = 0,
                nullIndex;

            arr.map(function(value, index) {
                if (value === 0) nullIndex = index;
                else if (value > 1) for (let i = index+1; i < 16; i++)
                    if (value > arr[i] && arr[i] !== 0) inversionCount++;
            });
            if (
                (!(inversionCount%2) && ((nullIndex > 3 && nullIndex < 8) || (nullIndex > 11 && nullIndex < 16)))
                ||
                ((inversionCount%2) && (nullIndex < 4 || (nullIndex > 7 && nullIndex < 12)))
            ) isSolvable = true;
        }

        arr = [];
        for (let i = 0; i < 16; i++) arr.push(i);
        while (!isSolvable) {
            shuffleArray();
            checkIsSolvable();
        }
    }

    makeArray();
    matrix = [];
    for (let i = 0; i < 4; i++) {
        matrix[i] = [];
        for (let j = 0; j < 4; j++) {
            if (arr[arrIndex]) {
                matrix[i][j] = arr[arrIndex];
            }
            else {
                matrix[i][j] = 0;
                matrix.void = {m: i, n: j};
            }
            arrIndex++;
        }
    }
    return matrix;
}
