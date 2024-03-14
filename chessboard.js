let size = 20;
let board = "";

for (let y = 0; y < size; y++) {

  for (let x = 0; x < size; x++) {
    //test to decide whether to print an empty space or hash, by even or odd
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);