import React from 'react'
import {AiTwotoneStar, AiOutlineDownload} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const MovieWatch = (props) => {
    const linkmovie = "https://www.2embed.to/embed/tmdb/movie?id=" + props.id
    return (
        <div className='movieWatch'>
            <iframe
                title="movieframe"
                id="ve-iframe"
                src={linkmovie}
                width="100%" height="100%"
                allow="autoplay; fullscreen"
                allowfullscreen="allowfullscreen"
            >
            </iframe>
            <Link to={'/download'}>
                <div className='download_icon'><AiOutlineDownload/></div>
            </Link>
            <h3>{props.title}</h3>
            <div className='moviestars'><AiTwotoneStar/> {props.vote_average}</div>
            <p>{props.overview}</p>
        </div>
    )
}


export default MovieWatch
