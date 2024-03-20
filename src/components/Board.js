import React, { useState } from 'react';
import ScoreCard from './ScoreCard';

const Board = () => {
    const [buttonStates, setButtonStates] = useState(Array(9).fill(null));
    const [turnofX, setTurnofX] = useState(true);
    const [Xscore, setXScore] = useState(0);
    const [Oscore, setOScore] = useState(0);
    const [Tiescore, setTieScore] = useState(0);
    const [gameOver, setgameOver] = useState(false);
    const WIN_CONDITION = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const handleClick = (index) => {
        const newButtonStates = [...buttonStates];
        if (newButtonStates[index] === null) {
            newButtonStates[index] = turnofX ? 'X' : 'O';
            setButtonStates(newButtonStates);
            setTurnofX(!turnofX);
            const winner = checkWinner(newButtonStates);
            if (winner === 'X') {
                setXScore((prevScore) => prevScore + 1);
                setgameOver(true);
            } else if (winner === 'O') {
                setOScore((prevScore) => prevScore + 1);
                setgameOver(true);
            }
        }

    };

    const checkWinner = (newButtonStates) => {
        for (let i = 0; i < WIN_CONDITION.length; i++) {
            const [x, y, z] = WIN_CONDITION[i];
            if (
                newButtonStates[x] &&
                newButtonStates[x] === newButtonStates[y] &&
                newButtonStates[x] === newButtonStates[z]
            ) {
                return newButtonStates[x];
            }
        }
        return null;
    };

    const reset = () => {
        setgameOver(false);
        setButtonStates(Array(9).fill(null));
    };

    const restart = () => {
        setgameOver(false);
        setButtonStates(Array(9).fill(null));
        setOScore(0);
        setXScore(0);
    }
    return (
        <div>
            <ScoreCard XScore={Xscore} OScore={Oscore} />
            <div className="board">
                <div className="row row-cols-3 gap-4">
                    {buttonStates.map((state, index) => (
                        <button
                            key={index}
                            className={`col-3 board-cell`}
                            onClick={gameOver === true ? reset : () => handleClick(index)}
                        >
                            {state}
                        </button>
                    ))}
                </div>
            </div>
            <button className='btn rounded bg-dark text-white' onClick={restart}>Restart Game</button>
        </div>
    );
};

export default Board;
