const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const calculateWinner = (squares) => {
    let winner = {
        name: null,
        result: null,
        status: "idle",
    };

    // check if all squares are filled with value, none of square with null
    const isGameOver = squares.filter((square) => square === null);

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        const isWon =
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c];

        if (isWon) {
            winner.name = squares[a];
            winner.status = "won";
            winner.result = [a, b, c];
        } else if (!isWon && isGameOver.length === 0) {
            winner.name = "None";
            winner.status = "Draw";
        }
    }
    return winner;
};

export const filterFunc = (arr) => {
    return (
        arr !== null && arr !== undefined && arr !== false && arr.length !== 0
    );
};
