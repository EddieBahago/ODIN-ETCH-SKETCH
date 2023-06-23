document.addEventListener("DOMContentLoaded", function(){
   creatBoard(16);
    console.log("hi")
})

function creatBoard(size){
    let container = document.querySelector(".container");

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    container.insertAdjacentElement("beforeend", square);
}

}