function createSquares(n) {
  for (let i = 0; i < n * n; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    document.getElementById('squares').appendChild(square);
  }
}

createSquares(16);