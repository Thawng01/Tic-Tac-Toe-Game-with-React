import React from "react";

import Square from "./Square";
import { calculateWinner } from "../util";
import Status from "./Status";

const Board = ({ xIsNext, squares, onPlay }) => {
    const winner = calculateWinner(squares);

    const handleClick = (i) => {
        if (squares[i] || winner.status === "won") return;

        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = "X";
        } else {
            newSquares[i] = "O";
        }

        onPlay(newSquares);
    };

    return (
        <div>
            <Status winner={winner} nextPlayer={xIsNext} />
            <div className="grid grid-cols-3 gap-[2px] w-[16rem]">
                {squares.map((square, index) => (
                    <Square
                        key={index}
                        value={square}
                        id={index}
                        winner={winner.result}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;
