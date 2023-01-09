import React from 'react'
import {AiFillPlaySquare} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

const DownloadCard = (movie) => {
    return (      
        <div className="download_card">
            <div className='download_image'> <img src={IMG_URL + movie.info.poster_path} alt= {movie.info.title} /></div>
            <div className='download_info'>
                <Link to={{
                pathname: "/movie/" + movie.info.id,
                state: {stateParam: movie.info}
                }}>
                    <div className='download_title'>{movie.info.title}</div>
                </Link>
                <div className='percent_number'>20MB/1024MB</div>
                <div className='percent_bar'></div>
            </div>
            <div className='download_button'>
                <AiFillPlaySquare/>
            </div>
        </div>
    )
}



export default DownloadCard
