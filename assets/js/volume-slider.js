var $slider = $("#slider");
var $fill = $(".bar .fill");
var $percentage = $(".bar .fill .percentage");
var $notch = $(".slider-container .notch ");

function setBar() {
    $fill.css("width", $slider.val() + "%");
    $percentage.text($slider.val() + "%");
    $notch.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();