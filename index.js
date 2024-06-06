randomVariable1 = Math.floor(Math.random() * 6) + 1;

randomVariable2 = Math.floor(Math.random() * 6) + 1;

var images = document.querySelectorAll("div img");

// player 1 
images[0].setAttribute("src", "./images/dice" + randomVariable1 + ".png")

// player 2
images[1].setAttribute("src", "./images/dice" + randomVariable2 + ".png")

// result
if (randomVariable1 == randomVariable2){
    document.querySelector("div h1").innerHTML = "Draw";
}else if(randomVariable1 > randomVariable2){
    document.querySelector("div h1").innerHTML = "🚩Player 1 wins"
}else {
    document.querySelector("div h1").innerHTML = "Player 2 wins🚩"
}
