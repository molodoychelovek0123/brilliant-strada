// Этот файл лишь шиза Кирилла. Лучше отключи его, а то у него крышняк поехал, сейчас 02.03.2023 02:01, потрачено супер дохуя времени на всякую бесполезную ересь типо этого, а по факту нихуя не сделано
jQuery.fn.random = function() {
    var randomIndex = Math.floor(Math.random() * this.length);
    return jQuery(this[randomIndex]);
};
function randomGlitch(){
    if(Math.random() < 0.5){
        let el = jQuery('h1,h2,h3,h4,h5,h6').random();
        console.log(el);
        el.addClass('h-glitched');
        setTimeout(()=>{
            el.removeClass('h-glitched');
        }, 1800);
    }
}
jQuery(document).ready(function (){
    jQuery('body').on('click',function (){
        randomGlitch();
    });
    jQuery('h2,h3,h4,h5,h6').on('click',function (){
        let el = $(this);
        el.addClass('h-glitched');
        setTimeout(()=>{
            el.removeClass('h-glitched');
        }, 1800);
    });
    setInterval(()=>{
        randomGlitch();
    }, 10000);
})