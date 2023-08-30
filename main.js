const BG_COLOR = "azure";

function populateBoard(size) {
  let color = "black";

  const board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(16, 1fr)`;
  board.style.gridTemplateRows = `repeat(16, 1fr)`;

  let drawing = false;

  board.addEventListener("mousedown", () => {
    drawing = true;
  });

  document.addEventListener("mouseup", () => {
    drawing = false;
  });

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.className = "square";

    square.addEventListener("mouseover", () => {
      if (drawing) {
        square.style.backgroundColor = color;
      }
    });
    board.appendChild(square);
  }
}


function main() {
  populateBoard(16);
}

function clearBoard() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((element) => {
    element.style.backgroundColor = BG_COLOR;
  });

  
}

main();
