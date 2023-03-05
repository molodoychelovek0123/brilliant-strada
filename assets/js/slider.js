function initProductSlider() {

    const section = "section.slider .slider__images";
    if (document.querySelector(section) != null) {
        const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {

            direction: 'vertical',
            slidesPerView: 4,
            spaceBetween: 24,
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
    }

    const lookbookSection = ".lookbook-slider";
    if (document.querySelector(lookbookSection) != null) {

        const sliderLookbook = new Swiper(lookbookSection + ' .swiper-container', {

            direction: 'horizontal',
            slidesPerView: 1,
            // spaceBetween: 32,
            spaceBetween: 0,
            mousewheel: true,

            navigation: {
                nextEl: lookbookSection + ' .slider__next',
                prevEl: lookbookSection + ' .slider__prev'
            },
            on: {
                slideChange: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(lookbookSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));

                        let slides = jQuery(lookbookSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(lookbookSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;
                    }, 300);
                },
                resize: function () {
                    setTimeout(() => {
                        let activeIndex = jQuery(lookbookSection + ' .swiper-slide-active').attr('data-swiper-slide-index') - 1 + 1;
                        activeIndex = Math.ceil((activeIndex)) < 10 ? "0" + Math.ceil((activeIndex)) : +Math.ceil((activeIndex));

                        let slides = jQuery(lookbookSection + ' .swiper-slide:not(.swiper-slide-duplicate)').length;
                        slides = Math.ceil((slides)) < 10 ? "0" + Math.ceil((slides)) : +Math.ceil((slides));
                        document.querySelector(musicSection + ' .slider__fraction').innerHTML = activeIndex + '/' + slides;
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
                }
            }
        });
    }

}