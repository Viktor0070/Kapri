import './styles/main.scss';


import $ from 'jquery';

// Імпортуємо Slick та його стилі
import 'slick-carousel/slick/slick.min.js';


$(document).ready(function () {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // Поточна позиція прокрутки
        var triggerOffset = $('#header').offset().top + ($('#header').outerHeight() / 2); // Відстань до середини блоку
        
        // Перевіряємо, чи прокрутили до середини блоку #about
        if (scroll >= triggerOffset) {
            $('.bottom-nav').addClass('fixed-nav'); // Додаємо клас для фіксації
        } else {
            $('.bottom-nav').removeClass('fixed-nav'); // Видаляємо клас, якщо не прокрутили до цієї точки
        }
    });
    
    $('.header-slider').slick({
        prevArrow: '<img src="images/arrow-prev.svg" class="slick-slider prev-arrow" alt=""></img>',
        nextArrow: '<img src="images/arrow-next.svg" class="slick-slider next-arrow" alt=""></img>',
        infinite: true,
        slidesToShow:1,
        slidesToScroll:1,
        fade: true, 

        autoplay:true,
        autoplaySpeed: 4000,
        asNavFor:'.header-slider__dots',
    });
    
   
    $('.header-slider__dots').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.header-slider',
        cssEase: 'linear',
        arrows: false,  // Вимикаємо стрілки в слайдері точок
        useTransform: false,       // Вимикаємо трансформації (впливає на width/height)
        variableWidth: true,       // Якщо ваші слайди мають змінну ширину
        arrows: false,
        
        
    });
    $('.about-slider').slick({
        prevArrow: '<img src="images/arrow-prev.svg" class="slick-slider prev-arrow" alt=""></img>',
        nextArrow: '<img src="images/arrow-next.svg" class="slick-slider next-arrow" alt=""></img>',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite:true,
        useTransform: false,       // Вимикаємо трансформації (впливає на width/height)
        variableWidth: true,     
      });
          
   

});





