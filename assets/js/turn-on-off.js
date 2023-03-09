function hidePreloader(){
    let css = '.preloader{display: none !important;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}


    let SELECTOR_SCREEN_ELEMENT = '.screen-container';
    // var SELECTOR_SWITCHER_TV = '#switcher-tv';

    let isTurnedOn = true;

    let timeline;

    function buildTimeline() {
        timeline = new TimelineMax({
            paused: true
        });

        timeline
            .to(SELECTOR_SCREEN_ELEMENT, .2, {
                width: '100vw',
                height: '2px',
                background: '#ffffff',
                ease: Power2.easeOut
            })
            .to(SELECTOR_SCREEN_ELEMENT, .2, {
                width: '0',
                height: '0',
                background: '#ffffff'
            });
    }

    function turnOff(){
        timeline.restart();
    }

    function turnOn(){

        timeline.reverse();
    }

    function runLoader(){
        document.querySelector('.preloader').classList.add('animated');
        setTimeout(()=>{
            turnOff();
            setTimeout(()=>{
                turnOn();
            }, 400);
            document.querySelector('.preloader').classList.add('hidden');
            setTimeout(()=>{
                hidePreloader();
            },1000);
        },3100)
    }

    function toggleSwitcherTV() {
        if (isTurnedOn) {
            turnOff();
        }
        else {
            turnOn();
        }

        isTurnedOn = !isTurnedOn;
    }

    // Initialize
    function initScreen(){
        buildTimeline();
        turnOff();
        setTimeout(()=>{
            document.querySelector('.screen-container').classList.remove('not-ready');
            turnOn();
            setTimeout(()=>{
                runLoader();
            }, 800);
        },1000);
    }
    // $(document).ready(buildTimeline);

    // Bindings
    // $(document).on('click', SELECTOR_SWITCHER_TV, function () {
    //     toggleSwitcherTV();
    // });
