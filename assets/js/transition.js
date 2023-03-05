const siteDomain = location.href.substring(0,location.href.lastIndexOf('/'));
//TODO:// Заменить на нормальную ссылку 404
const page404 = parseLink("/404.html");

function changePageTo(url){
    if(url.indexOf(siteDomain) > -1){
        turnOff();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            try {
                let newContent = xhr.response.querySelector('.screen').innerHTML;
                document.querySelector('.screen').innerHTML = newContent;
                initAll();

                // window.addEventListener('load', function() {
                //     console.log("wtf??");
                setTimeout(() => {
                    turnOn();
                }, 500);
                // });

                // Change link in browser address bar
                history.pushState({page: url}, '', url);
            }
            catch (e){
                showMessage(Types.ERROR,"Page not found", 404, false);
                changePageTo(page404);
            }
        };
        xhr.responseType = 'document';
        xhr.send();
    } else {
        window.open(url, '_blank');
    }
}
function parseLink(link) {
    if(link.indexOf("/") === 0) {
        let baseUrl = siteDomain;
        if (link.indexOf('/') > -1) {
            link = link.substring(link.lastIndexOf('/'));
        } else {
            link = "/" + link;
        }
        return baseUrl + link
    }
    else{
        return link;
    }
}
function handleBackForwardClicks(event) {
    let url = window.location.href;
    if(event.state){
        if(event.state.url) url = event.state.url;
        else if(event.state.page) url = event.state.page;
        else if(event.url) url = event.url;
    }
    // console.log(url,event.state);
    changePageTo(url);
}

window.addEventListener('popstate', handleBackForwardClicks);
