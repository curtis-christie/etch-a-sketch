let container_div = document.querySelector(".container");
let button_b = document.querySelector(".btn");
let numOfSquares = 0;

for (let ii = 1; ii < 257; ii++) {
  let div;
  div = document.createElement("div");
  container_div.appendChild(div);
};

let divList = document.querySelectorAll(".container > div");

divList.forEach((e) => {
  e.addEventListener("mouseenter", 
    (Event) => {
      Event.target.style.backgroundColor = "Yellow";
    }
  );
});

button_b.addEventListener("click",
  () => {
    numOfSquares = Number(prompt("How many squares per row? (Max of 100)", "10"));
    if (numOfSquares > 100) {
      numOfSquares = 100;
    }
    createGrid(numOfSquares);
  }
);

function createGrid(num) {
  clearGrid();
  for (let ii = 1; ii < (numOfSquares * numOfSquares) + 1; ii++) {
    let div;
    div = document.createElement("div");
    container_div.appendChild(div);
  };
  
  let widthValue = 960 / numOfSquares;

  divList = document.querySelectorAll(".container > div");

  divList.forEach((e) => {
    e.setAttribute("style", `width: ${widthValue}px; height: ${widthValue}px`);
  })

  divList.forEach((e) => {
    e.addEventListener("mouseenter", 
      (Event) => {
        Event.target.style.backgroundColor = "Yellow";
      }
    );
  });
  
};

function clearGrid() {
  container_div.innerHTML = "";
};



