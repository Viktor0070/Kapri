



import $ from 'jquery';

// Імпортуємо Slick та його стилі
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.js';

import './styles/main.scss';


$(document).ready(function () {
    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop(); // Поточна позиція прокрутки
    //     var triggerOffset = $('#header').offset().top + ($('#header').outerHeight() / 2); // Відстань до середини блоку

    //     // Перевіряємо, чи прокрутили до середини блоку #about
    //     if (scroll >= triggerOffset) {
    //         $('.bottom-nav').addClass('fixed-nav'); // Додаємо клас для фіксації
    //     } else {
    //         $('.bottom-nav').removeClass('fixed-nav'); // Видаляємо клас, якщо не прокрутили до цієї точки
    //     }
    // });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(); // Поточна позиція прокрутки
        var triggerOffset;
        
        // Перевіряємо, чи ширина екрану більше або менше 720px
        if ($(window).width() > 720) {
            // Для великого екрану, використовуємо старі умови
            triggerOffset = $('#header').offset().top + ($('#header').outerHeight() / 2); // Відстань до середини блоку #header
            if (scroll >= triggerOffset) {
                $('.bottom-nav').addClass('fixed-nav'); // Додаємо клас для фіксації
            } else {
                $('.bottom-nav').removeClass('fixed-nav'); // Видаляємо клас, якщо не прокрутили до цієї точки
            }
        } else {
            // Для екрану шириною 720px або менше
            triggerOffset = $('#header').offset().top + ($('#header').outerHeight() / 2); // Відстань до середини іншого блоку #other-block
            if (scroll >= triggerOffset) {
                $('.top-nav').addClass('fixed-nav'); // Додаємо клас для фіксації
            } else {
                $('.top-nav').removeClass('fixed-nav'); // Видаляємо клас, якщо не прокрутили до цієї точки
            }
        }
    });

    $('.header-slider').slick({
        prevArrow: '<img src="images/arrow-prev.svg" class="slick-slider prev-arrow" alt=""></img>',
        nextArrow: '<img src="images/arrow-next.svg" class="slick-slider next-arrow" alt=""></img>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,

        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.header-slider__dots',
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
        infinite: true,
        responsive: [
           
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
                breakpoint: 520,
                settings: {
                  slidesToShow: 1,
                  
                } 
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });


    $('.menu-nav').slick({
        slidesToShow: 8,
        
        asNavFor: '.menu-slider', 
        focusOnSelect: true, // Дозволяє вибирати слайд через кліки
        arrows: false, // Вимикає стрілки навігації
        infinite: true, // Вимикає безкінечний цикл
        centerMode: false, // Вимикає центровані слайди
        variableWidth: true, // Змінна ширина для слайдів
        useTransform: false, // Вимикає трансформації
        responsive:[
            {
                breakpoint:1020,
                settings:{
                    slidesToShow:6,
                   slidesToScroll:1,
                    prevArrow: '<img src="images/arrow-prev.svg" class="slick-slider prev-arrow" alt=""></img>',
                    nextArrow: '<img src="images/arrow-next.svg" class="slick-slider next-arrow" alt=""></img>',
                    arrows:true,
                }

            },{
                breakpoint:720,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1,
                    prevArrow: '<img src="images/arrow-prev.svg" class="slick-slider prev-arrow" alt=""></img>',
                    nextArrow: '<img src="images/arrow-next.svg" class="slick-slider next-arrow" alt=""></img>',
                    arrows:true,
                }
            }
        ]
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
    $('.menu-nav div').on('click', function () {
        var index = $(this).index(); // Отримуємо індекс натиснутого елемента
        $('.menu-slider').slick('slickGoTo', index); // Перемикаємо на відповідний слайд
    });

    $('.header-menu__link-about').on('click', function (e) {
        e.preventDefault(); // Запобігаємо стандартній поведінці посилання (якщо це <a>)

        // Знаходимо елемент з ID "about"
        var about = $('#about')[0];  // Використовуємо jQuery, але потім отримуємо перший елемент за допомогою [0]

        if (about) {
            about.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
    $('.header-menu__link-menu').on('click', function (e) {
        e.preventDefault();


        var menu = $('#menu')[0];

        if (menu) {
            menu.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
    $('.header-menu__link-rezervation').on('click', function (e) {
        e.preventDefault();


        var rezervation = $('#rezervation')[0];

        if (rezervation) {
            rezervation.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
    $('.header-menu__link-contact ,.location').on('click', function (e) {
        e.preventDefault();


        var contact = $('#contact')[0];

        if (contact) {
            contact.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });


    $('.hotel-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img src="images/arrow-prev.svg" class="slick-slider prev-arrow" alt=""></img>',
        nextArrow: '<img src="images/arrow-next.svg" class="slick-slider next-arrow" alt=""></img>',
        infinite: true, // Вимикає безкінечний цикл
        centerMode: true,

    });
    $('.burger').on('click', function(){
        $('.bottom-nav').toggleClass('hidden');
       
        if ($('.bottom-nav').hasClass('hidden')) {
            // Якщо меню приховане
            $('.burger').addClass('open'); // Прибираємо клас 'open'
            // Додати інші стилі, якщо потрібно
        } else {
            // Якщо меню відкрите
            $('.burger').removeClass('open'); // Додаємо клас 'open'
            // Додати інші стилі, якщо потрібно
        }
    })
    $('.burger').on('click', function() {
        // Додаємо або прибираємо клас 'active' у bottom-nav
     
        
        // Показуємо або ховаємо overlay
        $('.overlay').toggle();  
    });


});







