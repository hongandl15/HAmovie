import React, { useEffect, useState } from 'react'
import DownloadCard from './DownloadCard';

const ShowDownload = (props) => {

const API_KEY = '?api_key=db95773a7fb212ba790d71f6adac0e7e';
var page = props.page;
var type = props.type;
var url = "https://api.themoviedb.org/3/movie/" + type + API_KEY +"&language=en-US&page=" + page;

const API_URL = url
    const [ movieData, setData ] = useState([]);
    const [url_set, setUrl] = useState(API_URL);

    useEffect(() =>{
        fetch(url_set)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data.results);
        });
    }, [url_set])

    return (
        <>
            {(movieData.length === 0) ? <p></p>:
                movieData.slice(0,4).map((res, pos) => 
                <DownloadCard info ={res} key={pos}/>
            )}
        </>
    )
}


export default ShowDownload