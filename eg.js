// var a=["abc"]
// a[2]="ball"
// console.log(a.length)
let randomNumber=Math.floor(Math.random(0,1)*6+1)
console.log(randomNumber)
let dice1=document.getElementsByClassName("dice")

console.log(dice1[0])
dice1[0].innerHTML=`
<p>Player 1</p>
<img class="img1" src="/Users/abhayakulkarni/Desktop/Coursework_WebD/Dicee Challenge - Starting Files/images/dice${randomNumber}.png">
`
let randomNumber1=Math.floor(Math.random(0,1)*6+1)
dice1[1].innerHTML=`
<p>Player 2</p>
<img class="img2" src="/Users/abhayakulkarni/Desktop/Coursework_WebD/Dicee Challenge - Starting Files/images/dice${randomNumber1}.png">`

let message=document.getElementById("message")
if(randomNumber<randomNumber1) {
    message.textContent="Player 2 Wins!!"
}
else if(randomNumber>randomNumber1) {
    message.textContent="Player 1 Wins!!"
}
else {
    message.textContent="Refresh Me!!"
}