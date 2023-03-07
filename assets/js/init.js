function initAll(){
    initProductSlider();
    initQrCodes(); // initialize before links for working qr codes on pc
    jQuery('a').on('click', function (event){
        event.preventDefault();
        event.stopPropagation();
        let url = jQuery(this).attr('href');
        if(url.length > 1 || url === '/')
            changePageTo(parseLink(url));
    });
    initFormSubmit();
    initMessageContainer();
}

document.addEventListener("DOMContentLoaded", function(event) {
    initScreen();
    initAll();
})