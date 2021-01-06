import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ad2 from '../components/Ad2'
import "../assets/css/componentsCss/ourSlider.css"
import Ad from './Ad';
function OurSlider(props) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 2500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 1750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 1220,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            }
        ]
      };
    return (
        <Slider {...settings}>
            {props.elements}
        </Slider>
    )
}

export default OurSlider
