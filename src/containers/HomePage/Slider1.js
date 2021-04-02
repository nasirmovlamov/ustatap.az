import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Slider1(props) {
    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        draggable:true,
      };
      
    return (
        <div className="ourSlider">
            <Slider {...settings}>
                {props.jobCategory.map(element => element)}
            </Slider>
        </div>
    )
}

export default Slider1

