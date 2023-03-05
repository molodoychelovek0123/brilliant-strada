function initAll(){
    initProductSlider();
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