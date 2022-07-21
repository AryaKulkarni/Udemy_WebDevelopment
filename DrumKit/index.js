for(let i=0;i<7;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        let letter=document.querySelectorAll(".drum")[i].textContent
        console.log(letter)
        let audio
        switch(letter) {
        case "w":audio=new Audio("sounds/crash.mp3")
        break
        case "a":audio=new Audio("sounds/kick-bass.mp3")
        break
        case "s":audio=new Audio("sounds/snare.mp3")
        break
        case "d":audio=new Audio("sounds/tom-1.mp3")
        break
        case "j":audio=new Audio("sounds/tom-2.mp3")
        break
        case "k":audio=new Audio("sounds/tom-3.mp3")
        break
        case "l":audio=new Audio("sounds/tom-4.mp3")
        break
        }
        audio.play()
        buttonAnimation(letter)

    })
    document.addEventListener("keydown",function (event) {
        switch(event.key) {
            case "w":audio=new Audio("sounds/crash.mp3")
            break
            case "a":audio=new Audio("sounds/kick-bass.mp3")
            break
            case "s":audio=new Audio("sounds/snare.mp3")
            break
            case "d":audio=new Audio("sounds/tom-1.mp3")
            break
            case "j":audio=new Audio("sounds/tom-2.mp3")
            break
            case "k":audio=new Audio("sounds/tom-3.mp3")
            break
            case "l":audio=new Audio("sounds/tom-4.mp3")
            break
            }
            audio.play()
            buttonAnimation(event.key)


    })
}
function buttonAnimation(currentKey) {
    let activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}
