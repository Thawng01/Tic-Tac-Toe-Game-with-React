import React, { useState } from "react";
import Board from "../components/Board";
import History from "../components/History";
import { filterFunc } from "../util";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]); // [[null, null, ...], [null, null,...],...]
    const [currentMove, setCurrentMove] = useState(0);
    const [sortHistory, setSortHistory] = useState([]);
    const [isAsc, setIsAsc] = useState(true);

    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    const handlePlay = (newSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
        setCurrentMove(nextHistory.length - 1);
        setHistory(nextHistory);

        const sortHistoryFilter = nextHistory
            .map((arr) => arr.filter(filterFunc))
            .filter(filterFunc);

        if (!isAsc) {
            sortHistoryFilter.sort((a, b) => b.length - a.length);
        }
        setSortHistory(sortHistoryFilter);
    };

    const handleJump = (move) => {
        if (move === 0) {
            setSortHistory([]);
        }
        setCurrentMove(move);
    };

    const handleSort = () => {
        if (sortHistory.length === 0) return;
        if (isAsc) {
            sortHistory.sort((a, b) => b.length - a.length);
        } else {
            sortHistory.sort((a, b) => a.length - b.length);
        }

        setIsAsc(!isAsc);
    };

    return (
        <div className="grid grid-cols-2 w-1/2 mx-auto">
            <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
            />
            <History
                sortHistory={sortHistory}
                onJump={handleJump}
                onSort={handleSort}
                isAsc={isAsc}
            />
        </div>
    );
};

export default Game;
