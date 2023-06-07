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

createSquares(16);