let container_div = document.querySelector(".container");

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