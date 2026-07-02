/**
 * Cafert
 * Сafert is a stylish and modern cafe template. It was created for the restaurant business: cafe, bar, bakery, pub, restaurant, pizzeria or other restaurant business
 * Exclusively on https://1.envato.market/cafert-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import {initSwiperSlider} from "./modules/slider";
import initGallery from "./modules/gallery";
import Swiper, {Navigation, Autoplay, Pagination, EffectFade} from 'swiper';

Swiper.use([Navigation, Autoplay, Pagination, EffectFade]);

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.hero_slider', '.hero_slider-nav', {
        autoplay: true,
        speed: 1500,
        slidesPerView: 1
    });
    initSwiperSlider('.presentation_slider', '.presentation_slider-nav', {
        autoplay: true,
        speed: 1200,
        slidesPerView: 1,
        breakpoints: {
            567.98: {
                slidesPerView: 2,
            },
            767.98: {
                slidesPerView: 1,
            },
            1199.98: {
                slidesPerView: 2,
            },
            1599.98: {
                slidesPerView: 3,
            },
        }
    });
    // Initialize synced testimonials sliders
    const testimonialsImagesEl = document.querySelector('.testimonials_images');
    const testimonialsSliderEl = document.querySelector('.testimonials_slider');

    if (testimonialsImagesEl && testimonialsSliderEl) {
        // Initialize image slider
        const testimonialsImages = new Swiper('.testimonials_images', {
            loop: true,
            effect: 'fade',
            speed: 800,
            fadeEffect: {
                crossFade: true
            },
            allowTouchMove: false,
        });

        // Initialize text slider with sync
        const testimonialsText = new Swiper('.testimonials_slider', {
            loop: true,
            effect: 'fade',
            speed: 800,
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testimonials_slider-nav .swiper-button-next',
                prevEl: '.testimonials_slider-nav .swiper-button-prev',
            },
            on: {
                slideChangeTransitionStart: function() {
                    testimonialsImages.slideToLoop(this.realIndex, 800);
                }
            }
        });
    }
    initSwiperSlider('.services_gallery-slider', '.services_gallery-slider_nav', {
        spaceBetween: 15,
        autoplay: true,
        speed: 1500,
        slidesPerView: 1,
        breakpoints: {
            567.98: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1023.98: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    })
    initGallery();
})