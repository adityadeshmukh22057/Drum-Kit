var drums = document.querySelectorAll(".drum").length;

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            playSound("sounds/kick-bass.mp3");
            break;
        case "a":
            playSound("sounds/snare.mp3");
            break;
        case "s":
            playSound("sounds/tom-1.mp3");
            break;
        case "d":
            playSound("sounds/tom-2.mp3");
            break;
        case "j":
            playSound("sounds/tom-3.mp3");
            break;
        case "k":
            playSound("sounds/tom-4.mp3");
            break;
        case "l":
            playSound("sounds/crash.mp3");
            break;
    }
}

function playSound(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}
