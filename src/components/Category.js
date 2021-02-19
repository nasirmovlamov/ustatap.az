import React , {useEffect, useState} from 'react'
import axios from 'axios'
import "../assets/css/componentsCss/category.css"
import Button from './Button'
import lupa from "../assets/images/component/element/lupa2.svg"
import {Link} from 'react-router-dom'
function Category(props) {
    const styleForBg = {
        backgroundColor: props.color ,
    }
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [cityCategoryApi, setCityCategoryApi] = useState([0])
    const [districtCategoryApi, setDistrictCategoryApi] = useState([0])
    const [dateCategoryApi, setDateCategoryApi] = useState([0])
    const jobCategory = []
    const cityCategory = []
    const districtCategory = []
    const dateCategory = []

    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/public/api/jobcategory") 
             .then((res) =>  (setJobCategoryApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/cities") 
             .then((res) =>  (setCityCategoryApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/districts") 
             .then((res) =>  (setDistrictCategoryApi(res.data) ))

    } , [])
    
    cityCategoryApi.map((category) => jobCategory.push(category.name))
    districtCategoryApi.map((category) => jobCategory.push(category.name))


    const clickCategoryCont = (num) =>{
        if( document.getElementById(`categories${num}`).style.display === 'flex')
        {
            document.getElementById(`categories${num}`).setAttribute('style' , 'display:none;')
        }
        else 
        {
            document.getElementById(`categories${num}`).setAttribute('style' , 'display:flex;')

        }
    }

    const changeValue = (value , id) => {
        if(value === 'category' )
        {
            props.setFilterCategory(id)
        }
        else if (value === 'city')
        {
            props.setFilterCity(id)
        }
        else if (value === 'district' )
        {
            props.setFilterDistrict(id)
        }
        else if (value === 'date' )
        {
            props.setFilterDate(id)
        }
    } 

    return (
        <div className="categoryCont" style={styleForBg}>
            <div className="divider">
                <div className="ctgryGrid">
                    <div className="part1">
                        <p>
                            <p>Kateqoriya</p>
                        </p>    
                        <p>Şəhər</p>    
                        { props.type3 === undefined && <p>Rayon</p>    }
                        { props.type4 === undefined && <p>Tarixə Görə</p>}
                    </div>

                    <div className="part2">
                        <div className="categCont">
                            <button className="categoryButton" id="categoryBtn1" onClick={() => clickCategoryCont(1)}>Bütün Kateqoriyalar</button>
                            <div className="categories" id="categories1">{jobCategoryApi.map((category) =>  <button id={category.id} onClick={() => changeValue('category' , category.id)} className="catBtn">{category.name}</button>)}</div>
                        </div>
                        
                        <div className="categCont">
                            <button className="categoryButton" id="categoryBtn2"  onClick={() => clickCategoryCont(2)}>Bütün Şəhər</button>
                            <div className="categories" id="categories2">{cityCategoryApi.map((category) => <button  id={category.id} onClick={() => changeValue('city' , category.id)} className="catBtn">{category.name}</button>)}</div>
                        </div>
                        
                        { props.type3 === undefined &&
                            <div className="categCont">
                                 <button className="categoryButton" id="categoryBtn3"  onClick={() => clickCategoryCont(3)}>Bütün Rayon</button>
                            <div className="categories" id="categories3">{ districtCategoryApi.map((category) =>  <button id={category.id} onClick={() => changeValue('district' , category.id)} className="catBtn">{category.name}</button>)}</div>
                            </div>
                        }
                        { props.type4 === undefined &&
                            <div className="categCont">
                                <div className="categCont">
                                    <button className="categoryButton" id="categoryBtn4"  onClick={() => clickCategoryCont(4)}>Bütün Tarixlər</button>
                                    <div className="categories" id="categories4">
                                        <button className="catBtn"  onClick={() => changeValue('date' , 1)}>Son 7 gün</button>
                                        <button className="catBtn"  onClick={() => changeValue('date' , 2)}>Son 30 gün</button>
                                    </div>
                                </div>
                            <div className="categories">{   }</div>
                            </div>
                        }
                    </div>
                </div>
                <Button function={props.function} name="axtar"  image2={lupa} color={props.btnColor}/>
            </div> 
        </div>
    )
}

export default Category
