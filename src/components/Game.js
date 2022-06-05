//Daniel McColm
//251092776

import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';


const styles = {
    width: '400px',
    margin: '60px auto' 
};


const Game = () => {
   
    //variable for the board, initializes as a empty array 16 long
    const [board, setBoard] = useState([Array(16).fill(null)]);
    //variable for if blues turn is next, sets it as true to begin
    const [blueIsNext, setBlueisNext ] = useState(true);
    //Variable for who the winner is, uses calculateWinner from helper.js
    const winner = calculateWinner(board);

    //Returns the name of the colour of the winner, so that it does not display winner: #2CC5FF 
    const getWinner = i => {
        if (i === '#2CC5FF') return 'Blue';
        else if (i === '#FF456C')return 'Red';
        return null;

    };

    //handles the user clicking a square
    const handleClick = i => {
        //creates a copy of the board to manipulate
        const boardCopy = [...board];

        //returns without doing anything if there is a winner orr the square is occupied
        if (winner || boardCopy[i]) return;

        //Sets the square to the colour of the user on the board copy
        boardCopy[i] = blueIsNext ? '#2CC5FF' : '#FF456C';
        //sets the board copy as the new board
        setBoard(boardCopy);
        //changes whos turn it is now
        setBlueisNext(!blueIsNext);
    };
 
    //Button for starting a new game
    const startNewGame = () => ( 
        <button style = {{background : '#2CC5FF', width: '400px', height: '100px', fontSize: '20px', border: '15px solid #FF456C' }} onClick={() => setBoard(Array(16).fill(null))}>
            Start New Game
        </button>
    )

    //Displays the winner, or whos trun is next if there is no winner
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p style = {{color: 'white', fontSize: '20px'}}>{winner ? 'Winner: ' + getWinner(winner) : 'Next Player: ' + (blueIsNext ? 'Blue' : 'Red')}</p>
                {startNewGame()}
            </div>
        </>
    )
}

export default Game;