
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
        },1000);
    }
    // $(document).ready(buildTimeline);

    // Bindings
    // $(document).on('click', SELECTOR_SWITCHER_TV, function () {
    //     toggleSwitcherTV();
    // });
