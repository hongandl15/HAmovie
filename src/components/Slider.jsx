import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';

const SliderProduct = (props) => {

const API_KEY = '?api_key=db95773a7fb212ba790d71f6adac0e7e';
var page = props.page;
var type = props.type;
var url = "https://api.themoviedb.org/3/movie/" + type + API_KEY +"&language=vi&page=" + page;

const API_URL = url
    const [ movieData, setData ] = useState([]);
    const [url_set, setUrl] = useState(API_URL);
    var settings = {
        infinite: true,
        speed: 500,
        auto: true, 
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
    
    useEffect(() =>{
        fetch(url_set)
        .then((res) => res.json())
        .then((data) => {
            setData(data.results);
        });

    },[url_set])
 
    return (
        <Slider {...settings}>
            {(movieData.length === 0) ? <p></p>:
                movieData.map((res, pos) => 
                <ProductCard info ={res} key={pos}/>
            )}
        </Slider> 
    )
}


export default SliderProduct
