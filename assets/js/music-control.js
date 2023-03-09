const idAudioBlock = "audio1";

// volume slider

var $slider = $("#slider");
var $fill = $(".bar .fill");
var $percentage = $(".bar .fill .percentage");
var $notch = $(".slider-container .notch ");

function setBar() {
    let val = $slider.val();
    $fill.css("width", val + "%");
    $percentage.text(val + "%");
    $notch.css("width", val + "%");
    setVolume(val);
}

$slider.on("input", setBar);

setBar();


// audio block

var playing = false;

function setMusicSrc(src) {
    jQuery("#" + idAudioBlock).attr('src', src);
    if (playing) {
        document.getElementById(idAudioBlock).play();
    }
    playing = isPlaying();
    setClasses();

    setTimeout(() => {
        playing = isPlaying();
        setClasses();
    }, 800)
}

function setVolume(val) {
    document.getElementById(idAudioBlock).volume = val / 100;
    // jQuery('')
}

function startStopAudio() {
    if (playing) {
        document.getElementById(idAudioBlock).pause()
    } else {

        document.getElementById(idAudioBlock).play()
    }
    // playing = !playing;
    playing = isPlaying();
    setClasses();
    setTimeout(() => {
        playing = isPlaying();
        setClasses();
    }, 800)

}

function setClasses() {
    if (playing) {
        document.querySelector('.media-modal').classList.add("playing");
    } else {
        document.querySelector('.media-modal').classList.remove("playing");
    }
}

function isPlaying() {
    return document.getElementById(idAudioBlock).duration > 0 && !document.getElementById(idAudioBlock).paused;
}




function playSound(selector){
    try {
        const sound = document.getElementById(selector);
        sound.currentTime = 0;
        sound.play();
    }
    catch (e){
        console.warn(e);
    }
}