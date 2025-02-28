var pick = prompt("Pick 1: Player 1 or Player 2?");


var randomNumber = Math.random();
var randomNumberFloor = Math.floor(randomNumber * 6) + 1;

var imageElement = document.getElementsByClassName("img1")[0];

if(randomNumberFloor === 3){

imageElement.setAttribute("src", "dice3.png");}
else if(randomNumberFloor === 2){

imageElement.setAttribute("src", "dice2.png");
}

else if(randomNumberFloor === 1){

    imageElement.setAttribute("src", "dice1.png");
    }

    else if(randomNumberFloor === 4){

        imageElement.setAttribute("src", "dice4.png");
        }

        else if(randomNumberFloor === 5){

            imageElement.setAttribute("src", "dice5.png");
            }
            else if(randomNumberFloor === 6){

                imageElement.setAttribute("src", "dice6.png");
                }
console.log(randomNumberFloor);

// for image 2

var randomNumber2 = Math.random();
var randomNumberFloor2 = Math.floor(randomNumber2 * 6) + 1;

var imageElement = document.getElementsByClassName("img2")[0];

if(randomNumberFloor2 === 3){

imageElement.setAttribute("src", "dice3.png");}
else if(randomNumberFloor2 === 2){

imageElement.setAttribute("src", "dice2.png");
}

else if(randomNumberFloor2 === 1){

    imageElement.setAttribute("src", "dice1.png");
    }

    else if(randomNumberFloor2  === 4){

        imageElement.setAttribute("src", "dice4.png");
        }

        else if(randomNumberFloor2  === 5){

            imageElement.setAttribute("src", "dice5.png");
            }
            else if(randomNumberFloor2  === 6){

                imageElement.setAttribute("src", "dice6.png");
                }
console.log(randomNumberFloor2);




if(randomNumberFloor > randomNumberFloor2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumberFloor2 > randomNumberFloor){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

