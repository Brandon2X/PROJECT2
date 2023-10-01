console.log('Your JS is linked up. Be the person you needed when you were little.')
/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
    };
    init();
    function render() {
        board.forEach(function(mark, index){
            console.log(mark, index);
            });
     
    };
// new code below
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    };
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
// new code below
const messages = document.querySelector('h2');
/*----- functions -----*/
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });

    board[idk] = turn;
    console.log(board);
}