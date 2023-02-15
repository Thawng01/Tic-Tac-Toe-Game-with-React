import React from "react";

const Square = ({ value, id, winner, onClick }) => {
    let isWinner = false;

    for (let i = 0; i < winner?.length; i++) {
        if (winner[i] === id) {
            isWinner = true;
        }
    }

    return (
        <button
            onClick={onClick}
            className={`${
                isWinner ? "bg-[green] text-[white]" : "bg-[#f1f1f1]"
            } h-[5.5rem]  text-2xl font-medium`}
        >
            {value}
        </button>
    );
};

export default Square;
