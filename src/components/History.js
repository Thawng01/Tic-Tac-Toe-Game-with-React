import React from "react";

const History = ({ sortHistory, isAsc, onJump, onSort }) => {
    const historyListItem = sortHistory.map((history, index) => {
        return (
            <li key={index} className="my-2">
                <button
                    className="bg-[#f1f1f1] py-1 px-4 border-2 rounded-sm"
                    onClick={() => onJump(history.length)}
                >
                    Your history #{history.length}
                </button>
            </li>
        );
    });
    return (
        <div className="mt-4">
            <div>
                <button
                    className="py-1 px-4 border-2 rounded-sm mr-4"
                    onClick={() => onJump(0)}
                >
                    Go to game start
                </button>
                <button
                    onClick={onSort}
                    className="py-1 px-4 border-2 rounded-sm"
                >
                    {isAsc ? "Sort By Des" : "Sort By Asc"}
                </button>
            </div>
            <ol>{historyListItem}</ol>
        </div>
    );
};

export default History;
