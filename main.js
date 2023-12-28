onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function() {
        var audioButton = document.getElementById("audioButton");
        var audio = document.getElementById("backgroundAudio");
    
        audioButton.addEventListener("click", function() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    });
    