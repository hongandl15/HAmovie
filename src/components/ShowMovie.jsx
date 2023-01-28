import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ShowMovie = (props) => {

const API_KEY = '?api_key=db95773a7fb212ba790d71f6adac0e7e';
var page = props.page;
var type = 'tv'
if(props.type !=null){
    type = props.type
}
var url = "https://api.themoviedb.org/3/" + type + "/" + 'popular' + API_KEY +"&language=vi&page=" + page;
if (props.keyword != null) {
    var keyword = props.keyword
    url = "https://api.themoviedb.org/3/search/"+type + API_KEY +"&language=vi&query=" + keyword;
}
else if (props.sort != null) {
    var sort = props.sort
    url = "https://api.themoviedb.org/3/discover/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&language=vi&sort_by=" +sort+ ".desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
}

    const API_URL = url
    const [movieData, setData ] = useState([]);
    const [url_set, setUrl] = useState(API_URL);

    useEffect(() =>{
        setUrl(API_URL);
        fetch(url_set).then((res) => res.json())
        .then((data) => {
            setData(data.results);
        });
    },[API_URL])

    return (
        <>
            {(movieData.length === 0) ? <p></p>:
                movieData.map((res, pos) => 
                <ProductCard info ={res} key={pos}/>
            )}
        </>
    )
}


export default ShowMovie