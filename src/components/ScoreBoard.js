import React from "react";

const ScoreBoard = ({ score }) => {
    return (
        <div className="score-board">
            <div>
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>
            <div className="score">
                <p>SCORE</p>
                <h2>{score}</h2>
            </div>
        </div>
    );
};

export default ScoreBoard;
