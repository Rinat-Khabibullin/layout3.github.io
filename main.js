new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 29,
    breakpoints: {
        320: {
            slidesPerView: 1.3,
        }, 
        350: {
            slidesPerView: 1.44,
        }, 
        440: {
            slidesPerView: 1.66,
        }, 
        500: {
            slidesPerView: 1.9,
        }, 
        550: {
            slidesPerView: 2.1,
        }, 
        600: {
            slidesPerView: 2.3,
        }, 
        700: {
            slidesPerView: 2.7,
        }, 
    },
    
});

let button = document.querySelector('.container__showMore');
let buttonIcon = document.querySelector('.showMore__button-icon');
let listHeight = document.querySelector('.container__list');
let buttonText = document.querySelector('.showMore__button-text');

button.addEventListener('click', function() {
    if (buttonText.textContent == "Показать все") {
        buttonText.textContent = "Скрыть";
        buttonIcon.classList.add('rotateIcon');
        listHeight.classList.add('hidenContent');
    } else {
        buttonText.textContent = "Показать все"
        buttonIcon.classList.remove('rotateIcon');
        listHeight.classList.remove('hidenContent');
    };
    
})
