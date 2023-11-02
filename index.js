
var dice1 = Math.floor(Math.random() * 6) + 1;

var dice2 = Math.floor(Math.random() * 6) + 1;

var random_image1 = "dice" + dice1 + ".png";
var random_image2 = "dice" + dice2 + ".png";

var randsource1 = "./images/" + random_image1;
var randsource2 = "./images/" + random_image2;


document.querySelector(".img1").setAttribute("src", randsource1);
document.querySelector(".img2").setAttribute("src", randsource2);


if(dice1 > dice2)
{
    document.querySelector("h1").innerHTML = "Player one wins";
}
else if (dice1 < dice2){
    document.querySelector("h1").innerHTML = "Player two wins";
}

else{
    document.querySelector("h1").innerHTML = "This is a draw!";
}