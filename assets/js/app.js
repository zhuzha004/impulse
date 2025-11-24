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

    if (document.querySelector('.tariff__slider')) {

        let swiperInstance = null;

        function initSwiper() {
            if (window.innerWidth < 992) {
                if (!swiperInstance) {
                    swiperInstance = new Swiper(".tariff__slider", {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        navigation: {
                            nextEl: '.tariff__button-next',
                            prevEl: '.tariff__button-prev'
                        },

                        watchOverflow: true,
                        breakpoints: {
                            767.98: {
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


    if (document.querySelector('#calculator-user-slider')) {
        noUiSlider.create(document.querySelector('#calculator-user-slider'), {
            start: [100, 5000],
            tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
            range: {
                'min': 100,
                'max': 5000
            }
        });
    }

    if (document.querySelector('#calculator-storage-slider')) {
        noUiSlider.create(document.querySelector('#calculator-storage-slider'), {
            start: [10, 5000],
            tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
            range: {
                'min': 10,
                'max': 5000
            }
        });
    }

    if (document.querySelector('#calculator-managers-slider')) {
        noUiSlider.create(document.querySelector('#calculator-managers-slider'), {
            start: [1, 50],
            tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
            range: {
                'min': 1,
                'max': 50
            }
        });
    }

    

    if (document.querySelector('.slider-flexibility__main')) {
        const flixibilitySlider = new Swiper(".slider-flexibility__main", {
            slidesPerView: 1,
            spaceBetween: 8,
            navigation: {
                nextEl: '.slider-flexibility__button-next',
                prevEl: '.slider-flexibility__button-prev',
            },
            pagination: {
                el: '.slider-flexibility__dots',
                clickable: true,
            },
            watchOverflow: true,
        });
    }


})
