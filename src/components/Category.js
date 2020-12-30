import React from 'react'
import "../assets/css/componentsCss/category.css"
import Button from './Button'
import lupa from "../assets/images/component/element/lupa2.svg"

function Category(props) {
    const styleForBg = {
        backgroundColor: props.color ,
    }
    return (
        <div className="categoryCont" style={styleForBg}>
            <div className="divider">
                <div className="ctgryGrid">
                    <div className="part1">
                        <p>Kateqoriya</p>    
                        <p>Şəhər</p>    
                        { props.type3 === undefined && <p>Rayon</p>    }
                        { props.type4 === undefined && <p>Tarixə Görə</p>}
                    </div>

                    <div className="part2">
                        <button>Bütün Kateqoriya</button>
                        <button>Bütün Şəhər</button>
                        { props.type3 === undefined && <button>Bütün Rayon</button>}
                        { props.type4 === undefined && <button>Bütün Tarixlər</button>}
                    </div>
                </div>
                <Button name="axtar"  image2={lupa} color={props.btnColor}/>
            </div> 
        </div>
    )
}

export default Category
