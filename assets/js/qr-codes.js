function initQrCodes(){

    $('.page-with-qr .qr').on('click',function(event){
        event.preventDefault();
        event.stopPropagation();

        if(event.target.tagName.toLowerCase() === "span" || window.innerWidth < 767){
            window.open($(this).attr('data-href'), '_blank');
        }
        else{
            $(this).find('.qr__generated').toggleClass('active');
        }
    });
    $('.page-with-qr').on('click',function (){
        // Found all qr's and remove class active
        $('.qr__generated').removeClass('active');
    })

}