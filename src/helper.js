//Calculates the winner
export function calculateWinner(squares) {
    //Creates an array of all possible winning lines
    const lines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12],
    ];
    //loops through all line combinations
    for (let i = 0; i< lines.length; i++) {
        //splits the lines up into variables a, b, c, and d
        const [a, b, c, d] = lines[i];
        //checks if a === b === c === d if so then someone has won and it returns the winner
        if (squares[a]  && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
            return squares[a];
        }
    }
    //otherwise there is no winner yet and it returns null
    return null;
}

