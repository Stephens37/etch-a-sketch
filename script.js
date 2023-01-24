let userInput = prompt("Choose the number of squares.");
squareContainer = document.getElementById("grid-container");
function createDivs(num){
for(let x=num; x>num; x++){
    squares = document.createElement("div");
    squares.classList.add = "sketch";
    document.getElementsByClassName("sketch").innerHtml = "I have changed."
    document.getElementById("grid-container").appendChild(squares)
    }
}
createDivs(userInput);
