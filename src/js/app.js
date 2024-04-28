"use strict";
import "bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { register } from 'swiper/element/bundle';
import './blocks/aboutus_swiper'
import './particle_config'
// register swiper elements

register();

// ..
AOS.init({ duration: 2000, once: true, disable: 'phone' });
// More info for using bootstrap via npm:
// https://getbootstrap.com/docs/5.0/getting-started/download/#npm
function rem2px(rem) {
    var el = document.createElement('div');
    document.body.appendChild(el);
    el.style.width = '1000rem';
    var factor = el.clientWidth / 1000;
    document.body.removeChild(el);
    return rem * factor;
}

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
        }
    });
});