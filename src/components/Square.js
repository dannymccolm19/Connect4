import React from 'react';

//Creates the square
const Square = ({ value, onClick }) => (
    //Gives the square a border and changes the colour if it is clicked
    <button style ={{border: '10px solid yellow',  background : value}} onClick={onClick}>
         
    </button>
);

export default Square;