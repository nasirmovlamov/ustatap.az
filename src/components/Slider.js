import React,{useState} from 'react'
import Carousel from '@brainhubeu/react-carousel';
import {arrows,clickToChange} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Ad2 from '../components/Ad2'

function Slider() {
    const [sliderValue, setsliderValue] = useState(0)

    const  onChange = (value) => {
            setsliderValue(value);
    }
    return (
        <div>
        </div>
    )
}

export default Slider
