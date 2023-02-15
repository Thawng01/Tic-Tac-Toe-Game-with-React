import React from "react";

const Status = ({ winner, nextPlayer }) => {
    let status = "";
    if (winner.status === "won") {
        status = (
            <p>
                Winner is : <span className="text-[green]">{winner.name}</span>
            </p>
        );
    } else if (winner.status === "Draw") {
        status = (
            <div>
                <p> Game Over!</p>
                <p>
                    Winner is : <span>{winner.name}</span>
                </p>
                <p>
                    Game Status : <span>{winner.status}</span>
                </p>
            </div>
        );
    } else {
        status = <p>Next player : {nextPlayer ? "X" : "O"}</p>;
    }
    return <p className="py-4 font-medium text-xl">{status}</p>;
};

export default Status;
