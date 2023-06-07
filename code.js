function createSquares(n) {
  let singleSquareWidth = 100 / n;

  for (let i = 0; i < n * n; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = `${singleSquareWidth}%`;
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
    document.getElementById('squares').appendChild(square);
  }
}

function reset() {
  let n = parseInt(window.prompt('Enter the amount of squares per side you\'d like in your new sketch. Choose a number between 16 and 100.'));
  console.log(isNaN(n));
  while (n < 16 || n > 100 || isNaN(n)){
    n = parseInt(window.prompt('Input not valid. Try again'));
  }
  let squaresContainer = document.getElementById('squares');
  squaresContainer.innerHTML = '';
  createSquares(n);
}

createSquares(16);