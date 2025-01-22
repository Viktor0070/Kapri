import './styles/main.scss';


import $ from 'jquery';

// Імпортуємо Slick та його стилі
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.js';


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
        
        // Вимикаємо стрілки в слайдері точок
             // Якщо ваші слайди мають змінну ширину
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
           
      });
      
     
      $('.menu-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.menu-slider', // Прив'язує до основного слайдера
        focusOnSelect: true, // Дозволяє вибирати слайд через кліки
        arrows: false, // Вимикає стрілки навігації
        infinite: false, // Вимикає безкінечний цикл
        centerMode: false, // Вимикає центровані слайди
        variableWidth: true, // Змінна ширина для слайдів
        useTransform: false, // Вимикає трансформації
       
    });

    $('.menu-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Вимикає стрілки навігації
        asNavFor: '.menu-nav', // Прив'язує до меню-навгації
        infinite: false, // Вимикає безкінечний цикл
        fade: true, // Додає ефект плавного переходу
        
    });

    // Перемикання слайдів при кліку на елемент меню
    $('.menu-nav div').on('click', function() {
        var index = $(this).index(); // Отримуємо індекс натиснутого елемента
        $('.menu-slider').slick('slickGoTo', index); // Перемикаємо на відповідний слайд
    });
          
   

});





