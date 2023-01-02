const allButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < allButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", addFeedback);
    function addFeedback() {

        const buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    }
}


document.addEventListener("keydown", function (event) {
    
    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'd':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'l':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(buttonInnerHtml);
            break;
    }
}
function buttonAnimation(currentKey){
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}


// this is for changing the input \\

     //    const anuj = (this.style.color = "white");
    //    return (anuj);