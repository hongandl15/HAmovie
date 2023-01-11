import React, { useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const TRAILER = 'https://www.youtube.com/embed/'

const Trailer = (props) => {
    
    var API_URL = 'https://api.themoviedb.org/3/movie/'+ props.id + '/videos?api_key=db95773a7fb212ba790d71f6adac0e7e&language=en-US&with_original_language=vi'
    const [url_set, setUrl] = useState([API_URL]);  
    const [movieData, setData] = useState([]);
    var count = 0;
    var number = 10;
    if(props.number != null)
        number = props.number;
        
        
    useEffect(() =>{
        fetch(url_set)
        .then((res) => res.json())
        .then((data) => {
            setUrl(API_URL)
            setData(data.results);
        });
    },[API_URL])

    return (
        <div className={"media"}>
            <h4>{props.type}</h4>
            {(movieData.length === 0) ? <p></p>:
                movieData.map((res, pos) => {
                    if (res.type === props.type && count < number){
                        count++
                        return <iframe allowFullScreen width={props.width} height={props.height} title="trailer"  src={TRAILER + res.key}><h1>{res.key}</h1></iframe>
                    }
                }
            )}                        
        </div>
    )
}


export default Trailer
