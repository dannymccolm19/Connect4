import React from 'react';
import Square from './Square';


//Creates a style variable for the board
const style = {
    //Sets a border
    border: '20px solid yellow',
    borderRadius: '10px',

    //Sets board size
    width: '400px',
    height: '400px',
    margin: '100px auto',
    //Makes the board a 4x4 grid
    display: 'grid',
    gridTemplate: 'repeat(4, 1fr) / repeat(4, 1fr)'

};

//Creates the board
const Board = ({ squares, onClick }) => (
    //Applies the style variable to the board
    <div style={style}>
        {//Maps the squares to the grid
        squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />

        ))}
    </div>
);

export default Board;