function addToCart( name, values) {
    let $cart = $('header .cart');
    $cart.attr('data-count', Number($cart.attr('data-count')) + 1);
    $cart.find('.text').text(Number($cart.find('.text').text()) + 1);
    console.log(values);

    //xhr здесь где-то должен запрос ajax к API которое когда-нибудь создаст Игорь


    // sOmEtHiNg likE if(successful){
    showMessage(Types.INFO,name+" added to cart", 0);

    // }
}
function initFormSubmit(){
    $('form.product-actions').submit(function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event);
        addToCart($(this).find('input[name=name]').val(), $(this).serialize());
    });
}
