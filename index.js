var randomNumber1 = Math.floor(Math.random()*6 +1);
var imageSource = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src" , imageSource)



var randomNumber2 = Math.floor(Math.random()*6 +1);
var imageSource = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src" , imageSource)
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player1 wins"
}
else if  (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player2 wins"
}
else {
    document.querySelector("h1").textContent = "Draw"

}