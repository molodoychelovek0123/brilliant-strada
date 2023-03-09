function initLinks(initial = false){

    let selector = initial ? "*" :  ".screen *" ;
    jQuery(selector + '[data-sound]').on('click',function (){
       playSound(jQuery(this).attr('data-sound-name'));
    });
    selector = initial ? "a" :  ".screen a" ;

    jQuery(selector).on('click', function (event){
        event.preventDefault();
        event.stopPropagation();
        let url = jQuery(this).attr('href');
        if(url.length > 1 || url === '/')
            changePageTo(parseLink(url));
    });
}

function initAll(initial){
    initProductSlider();
    initQrCodes(); // initialize before links for works qr codes on pc
    initLinks(initial);
    initFormSubmit();
    initMessageContainer();
}

document.addEventListener("DOMContentLoaded", function(event) {
    initScreen();
    initAll(true);
})