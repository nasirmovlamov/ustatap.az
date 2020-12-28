import React from 'react'
import "../assets/css/componentsCss/category.css"
import Button from './Button'
import lupa from "../assets/images/component/element/lupa2.svg"

function Category(props) {
    const styleForBg = {
        background: props.color,
    }
    return (
        <div className="categoryCont" style={styleForBg}>
            <div className="divider">
                <div className="ctgryGrid">
                    <div className="part1">
                        <p>Kateqoriya</p>    
                        <p>Şəhər</p>    
                        <p>Rayon</p>    
                        <p>Tarixə Görə</p>
                    </div>

                    <div className="part2">
                        <button>Bütün Kateqoriya</button>
                        <button>Bütün Şəhər</button>
                        <button>Bütün Rayon</button>
                        <button>Bütün Tarixlər</button>
                    </div>
                </div>
                <Button name="axtar"  image2={lupa} color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/>

            </div> 
        </div>
    )
}

export default Category
