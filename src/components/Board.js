import React, { useState, useEffect } from 'react';
import ScoreCard from './ScoreCard';
import PreviousWinner from './PreviousWinner';
import TotalCounts from './TotalCounts';

const Board = () => {
    const [buttonStates, setButtonStates] = useState(Array(9).fill(null));
    const [turnofX, setTurnofX] = useState(true);
    const [Xscore, setXScore] = useState(0);
    const [Oscore, setOScore] = useState(0);
    const [Tiescore, setTieScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [previousWinner, setPreviousWinner] = useState([]);
    const [Xtotalwin, setXtotalwin] = useState(0);
    const [Ototalwin, setOtotalwin] = useState(0);
    const [previousState, setPreviousState] = useState([]);
    const [nextState, setNextState] = useState([]);
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


    useEffect(() => {
        if (gameOver) {
            reset();
        }
    }, [gameOver]);

    const handleClick = (index) => {
        const newButtonStates = [...buttonStates];
        setNextState([...newButtonStates]);
        if (newButtonStates[index] === null && !gameOver) {
            newButtonStates[index] = turnofX ? 'X' : 'O';
            setButtonStates(newButtonStates);
            setTurnofX(!turnofX);
            setPreviousState([...previousState, [...buttonStates]]);
        }
        const winner = checkWinner(newButtonStates);
        if (winner === 'X') {
            setXScore((prevScore) => prevScore + 1);
            setXtotalwin((prevTotal) => prevTotal + 1);
            setGameOver(true);
            setPreviousWinner((prevWinners) => [...prevWinners, winner]);
        } else if (winner === 'O') {
            setOScore((prevScore) => prevScore + 1);
            setOtotalwin((prevTotal) => prevTotal + 1);
            setGameOver(true);
            setPreviousWinner((prevWinners) => [...prevWinners, winner]);
        }

        let filled = true;
        newButtonStates.forEach((item) => {
            if (item === null) {
                filled = false;
            }
        });
        if (filled && winner === null) {
            setTieScore((prevScore) => prevScore + 1);
            setGameOver(true);
            setPreviousWinner((prevWinners) => [...prevWinners, "Tie"]);
        }
    };

    const checkWinner = (newButtonStates) => {
        for (let i = 0; i < WIN_CONDITION.length; i++) {
            const [x, y, z] = WIN_CONDITION[i];
            if (
                newButtonStates[x] !== null &&
                newButtonStates[x] === newButtonStates[y] &&
                newButtonStates[x] === newButtonStates[z]
            ) {
                setButtonStates(Array(9).fill(null));
                return newButtonStates[x];
            }
        }
        return null;
    };

    const reset = () => {
        setButtonStates(Array(9).fill(null));
        setGameOver(false);
    };

    const startnewgame = () => {
        setButtonStates(Array(9).fill(null));
        setOScore(0);
        setXScore(0);
        setTieScore(0);
        setGameOver(false);
        setPreviousWinner([]);
        setOtotalwin(0);
        setXtotalwin(0);
        setPreviousState([]);
    };

    const restart = () => {
        setButtonStates(Array(9).fill(null));
        setOScore(0);
        setXScore(0);
        setTieScore(0);
        setGameOver(false);
    }

    const undomove = () => {
        if (previousState.length > 0) {
            const prevState = previousState.pop();
            setButtonStates(prevState);
            setTurnofX(prevState => !prevState);
            setNextState([...nextState, [...buttonStates]]);
        }
    }

    const redomove = () => {
        if (nextState.length > 0) {
            const nextStateToRedo = nextState.pop();
            if (Array.isArray(nextStateToRedo) && nextStateToRedo.length === buttonStates.length) {
                setButtonStates(nextStateToRedo);
                setPreviousState(prevState => [...prevState, [...buttonStates]]);
                setTurnofX(prevState => !prevState);
            }
        }
    }

    return (
        <div className='row'>
            <div className='col-lg-4 col mt-5'>
                <TotalCounts Xtotalwin={Xtotalwin} Ototalwin={Ototalwin} />
                <PreviousWinner previousWinner={previousWinner} />
            </div>
            <div className='col'>
                <ScoreCard XScore={Xscore} OScore={Oscore} TieScore={Tiescore} />
                <div className="board">
                    <div className="row row-cols-3 gap-2" style={{ marginLeft: "10px" }}>
                        {buttonStates.map((state, index) => (
                            <button
                                key={index}
                                className={`col-3 board-cell`}
                                onClick={() => handleClick(index)}
                                disabled={gameOver || state !== null}
                            >
                                {state}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='mt-3'>
                    <button className='btn rounded bg-dark text-white' onClick={startnewgame}>Start New Game</button>
                    <button className='btn rounded bg-dark text-white mx-1' onClick={restart}>Restart Game</button>
                    <button className='btn rounded bg-dark text-white mx-1' onClick={undomove}>Undo Move</button>
                    <button className='btn rounded bg-dark text-white mx-1' onClick={redomove}>Redo Move</button>
                </div>
            </div>
        </div>
    );
};

export default Board;
