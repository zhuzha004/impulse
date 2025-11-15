const delay = 400

window.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu__item')
    const header = document.querySelector('.header')

    function openMenu(item, submenu) {

        closeAllMenus()
        item.classList.add('active')
        submenu.classList.add('active')
    }

    function closeMenu(item, submenu) {

        item.classList.remove('active')
        submenu.classList.remove('active')
    }

    function closeAllMenus() {
        menuItems.forEach(item => {
            item.classList.remove('active')
            const submenu = item.querySelector('.submenu')
            if (submenu) {
                submenu.classList.remove('active')
            }
        })
    }

    for (let index = 0; index < menuItems.length; index++) {
        const item = menuItems[index]

        const subitem = item.querySelector('.menu__subitem')
        const submenu = item.querySelector('.submenu')

        if (!subitem || !submenu) continue

        item.addEventListener('mouseenter', function () {
            openMenu(item, submenu)
        })

        header.addEventListener('mouseleave', function () {
            closeMenu(item, submenu)
        })
    }
    // Меню

    // const menu = document.querySelector('.header__menu')
    // const header = document.querySelector('.header')
    // let lock = false
    // const burger = document.querySelector('.header__burger')
    //
    // burger.addEventListener('click', function() {
    //
    //     if (lock) return
    //
    //     lock = true
    //
    //     toggleMenu()
    //
    //     setTimeout(() => {
    //         lock = false
    //     }, delay)
    // })
    //
    // function toggleMenu() {
    //     burger.classList.toggle('active')
    //     menu.classList.toggle('active')
    //     header.classList.toggle('active')
    //     lockBody()
    // }


    function lockBody() {
        const scrollWidth = window.innerWidth - document.body.clientWidth

        document.body.classList.toggle('lock')

        document.body.style.paddingRight = scrollWidth + 'px'
    }

    // header.addEventListener('click', function(e) {
    //     if (
    //         document.querySelector('.header__menu.active')
    //         && !e.target.closest('.header__burger')
    //     ) {
    //         toggleMenu()
    //     }
    // })


    if (document.querySelector('.cases__slider')) {

        let swiperInstance = null;

        function initSwiper() {
            if (window.innerWidth < 992) {
                if (!swiperInstance) {
                    swiperInstance = new Swiper(".cases__slider", {
                        slidesPerView: 1.28,
                        spaceBetween: 20,
                        breakpoints: {

                            567.98: {
                                slidesPerView: 1.5,
                            }
                        },
                    });
                }
            } else {
                if (swiperInstance) {
                    swiperInstance.destroy(true, true);
                    swiperInstance = null;
                }
            }
        }

        initSwiper();
        window.addEventListener("resize", initSwiper);
    }

    if (document.querySelector('.services__slider')) {

        let swiperInstance = null;

        function initSwiper() {
            if (window.innerWidth < 992) {
                if (!swiperInstance) {
                    swiperInstance = new Swiper(".services__slider", {
                        slidesPerView: 2,
                        spaceBetween: 8,
                        navigation: {
                            nextEl: '.services__button-next',
                       
                        },
                        watchOverflow: true,
                        breakpoints: {

                            567.98: {
                                slidesPerView: 3,
                            }
                        },
                    });
                }
            } else {
                if (swiperInstance) {
                    swiperInstance.destroy(true, true);
                    swiperInstance = null;
                }
            }
        }

        initSwiper();
        window.addEventListener("resize", initSwiper);
    }

    // if (document.querySelector('.banner-page__body')) {
    //     const bannerSlider = new Swiper('.banner-page__body', {
    //         spaceBetween: 16,
    //         slidesPerView: 1,
    //         centeredSlides: true,
    //         speed: 1000,
    //         effect: 'fade',
    //         fadeEffect: { crossFade: true },
    //         loop: true,
    //         autoplay: {
    //             delay: 2000,
    //         },
    //         breakpoints: {
    //             767.98: {
    //                 slidesPerGroup: 4,

    //             },
    //             575.98: {
    //                 slidesPerGroup: 3,
    //             }
    //         },

    //         navigation: {
    //             nextEl: '.banner-page__button-next',
    //             prevEl: '.banner-page__button-prev'
    //         },
    //         pagination: {
    //             el: ".banner-page__dots",
    //             clickable: true,
    //         },
    //     })

    // }


    // const baseSliders = document.querySelectorAll('.base-slider__body')
    //
    // if (baseSliders.length > 0) {
    //     for (let index = 0; index < baseSliders.length; index++) {
    //         const slider = baseSliders[index]
    //
    //         new Swiper(slider, {
    //             spaceBetween: 16,
    //             slidesPerView: 1.2,
    //
    //             speed: 800,
    //
    //
    //             breakpoints: {
    //                 991.98: {
    //                     spaceBetween: 16,
    //                     slidesPerView: 4,
    //
    //                 },
    //                 767.98: {
    //                     spaceBetween: 16,
    //                     slidesPerGroup: 3,
    //                 },
    //                 567.98: {
    //                     spaceBetween: 16,
    //                     slidesPerGroup: 2.2,
    //                 }
    //             },
    //
    //             navigation: {
    //                 nextEl: slider.closest('.base-slider').querySelector('.base-slider__button-prev'),
    //                 prevEl: slider.closest('.base-slider').querySelector('.base-slider__button-next')
    //             },
    //
    //         })
    //         // wi
    //     }
    // }

    //
    //
    // fixHeader()
    // function fixHeader() {
    //     if (document.body.scrollTop > 10 && !header.classList.contains('fix')) {
    //         header.classList.add('fix')
    //     }
    //     if (document.body.scrollTop <= 0 && header.classList.contains('fix')) {
    //         header.classList.remove('fix')
    //     }
    // }

    // window.addEventListener('scroll', fixHeader)

})
