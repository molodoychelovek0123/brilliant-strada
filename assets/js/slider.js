function initProductSlider() {

    const section = "section.slider .slider__images";
    if (document.querySelector(section) != null) {
        const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {

            direction: 'vertical',
            slidesPerView: 5,
            spaceBetween: 8,
            navigation: {
                nextEl: 'section.slider .slider__next',
                prevEl: 'section.slider .slider__prev'
            },
            freeMode: true,
            breakpoints: {
                0: {
                    direction: 'horizontal',
                },
                768: {
                    slidesPerView: 4,
                    direction: 'vertical',
                }
            }
        });

        const sliderImages = new Swiper('.slider__images .swiper-container', {

            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 32,
            mousewheel: true,

            navigation: {
                nextEl: 'section.slider .slider__next',
                prevEl: 'section.slider .slider__prev'
            },
            on: {
                slideChange: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(section + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));

                        let slides = jQuery(section + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(section + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;
                    }, 300);
                },
                resize: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(section + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));

                        let slides = jQuery(section + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(section + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;
                    }, 300);
                }


            },
            grabCursor: true,
            thumbs: {
                swiper: sliderThumbs
            },
            breakpoints: {
                0: {
                    direction: 'horizontal',
                },
                768: {
                    direction: 'horizontal',
                }
            }
        });
    }
    const musicSection = ".important-option";
    if (document.querySelector(musicSection) != null) {

        const sliderMusic = new Swiper(musicSection + ' .swiper-container', {

            direction: 'horizontal',
            slidesPerView: 1,
            // spaceBetween: 32,
            spaceBetween: 0,
            mousewheel: true,

            navigation: {
                nextEl: musicSection + ' .slider__next',
                prevEl: musicSection + ' .slider__prev'
            },
            on: {
                slideChange: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(musicSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));

                        let slides = jQuery(musicSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(musicSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;


                        let music_src = jQuery(musicSection + ' .swiper-slide-active').attr('data-music-src');
                        setMusicSrc(music_src);
                    }, 300);
                },
                resize: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(musicSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));

                        let slides = jQuery(musicSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(musicSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;


                        let music_src = jQuery(musicSection + ' .swiper-slide-active').attr('data-music-src');
                        setMusicSrc(music_src);
                    }, 300);
                }


            },
            grabCursor: true,
            breakpoints: {
                0: {
                    direction: 'horizontal',
                },
                768: {
                    direction: 'horizontal',
                }
            }
        });
        $(".btn-play").on('click',function(){
           startStopAudio();
        });
        jQuery(".open-music-controls").on('click',function (event){
            event.preventDefault();
            jQuery('.media-modal').toggleClass('active');
        });
        jQuery('.media-modal .close').on('click',function (){
            jQuery('.media-modal').removeClass('active');
        });
        jQuery('.media-modal').css({'display' : 'block'});
    }

    const lookbookSection = ".lookbook-slider";

    if (document.querySelector(lookbookSection) != null) {
        let previousIndex = -1;
        const sliderLookbook = new Swiper(lookbookSection + ' .swiper-container', {

            direction: 'horizontal',
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            loop: true,
            // spaceBetween: 32,
            spaceBetween: 0,
            mousewheel: true,
            loopedSlides: 3,
            // loopedSlides: 12,

            navigation: {
                nextEl: lookbookSection + ' .slider__next',
                prevEl: lookbookSection + ' .slider__prev'
            },
            on: {
                slideChange: function  (sw){
                    // console.log(sw);
                    // console.log(sw.activeIndex, sw.previousIndex);
                    // if(sw.activeIndex !== sw.previousIndex) {
                    //     if (sw.activeIndex > sw.previousIndex)
                    //         playSound("lookbook-next");
                    //     else
                    //         playSound("lookbook-prev");
                    // }


                    setTimeout(() => {
                        let activeIndex = jQuery(lookbookSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        let slides = jQuery(lookbookSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;

                        activeIndex+=1;
                        if(activeIndex !== previousIndex && previousIndex !== -1) {
                            if (activeIndex > previousIndex || (activeIndex === 1 && previousIndex === slides))
                                playSound("lookbook-next");
                            else
                                playSound("lookbook-prev");
                        }
                        previousIndex = activeIndex;


                        if(jQuery(productsSection + ' .swiper-slide-active').hasClass('swiper-slide-duplicate')) activeIndex -= slides;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(lookbookSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;

                    }, 300);
                },
                resize: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(lookbookSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex+=1;

                        let slides = jQuery(lookbookSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;

                        if(jQuery(productsSection + ' .swiper-slide-active').hasClass('swiper-slide-duplicate')) activeIndex -= slides;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(lookbookSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;
                    }, 300);
                }


            },
            grabCursor: true,
            breakpoints: {
                0: {
                    direction: 'horizontal',
                },
                768: {
                    direction: 'horizontal',
                    slidesPerView: 3,
                    loop: document.querySelectorAll(lookbookSection + ' .swiper-slide').length > 3 * 2
                }
            }
        });
        setTimeout(()=>{
            if(document.querySelector(lookbookSection + " .swiper-initialized") != null){
                document.querySelector('.scrollable-mask').classList.add('lookbook-mask')
            }
        },300);
    }


    const productsSection = ".products-slider";
    if (document.querySelector(productsSection) != null) {

        const sliderProducts = new Swiper(productsSection + ' .swiper-container', {

            direction: 'horizontal',
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            // spaceBetween: 32,
            spaceBetween: 0,
            mousewheel: true,
            // loopAdditionalSlides: 6,
            // loopedSlides: 6,
            loop: true,
            slideToClickedSlide: true,

            navigation: {
                nextEl: productsSection + ' .slider__next',
                prevEl: productsSection + ' .slider__prev'
            },
            on: {
                slideChange: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(productsSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex+=1;

                        let slides = jQuery(productsSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        if(jQuery(productsSection + ' .swiper-slide-active').hasClass('swiper-slide-duplicate')) activeIndex -= slides;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(productsSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;
                    }, 300);
                },
                resize: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(productsSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex+=1;

                        let slides = jQuery(productsSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        if(jQuery(productsSection + ' .swiper-slide-active').hasClass('swiper-slide-duplicate')) activeIndex -= slides;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(productsSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;
                    }, 300);
                }


            },
            grabCursor: true,
            breakpoints: {
                0: {
                    direction: 'horizontal',
                },
                768: {
                    direction: 'horizontal',
                    slidesPerView: 3,
                    loop: document.querySelectorAll(productsSection + ' .swiper-slide').length > 3 * 2
                }
            }
        });
        // sliderProducts.loopDestroy();
        // sliderProducts.loopCreate();
    }

}