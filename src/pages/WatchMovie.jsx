import React from 'react'
import Helmet from '../components/Helmet'
import MovieWatch from '../components/MovieWatch'
import {useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Comment from '../components/Comment'
import Similar from '../components/Similar'



const WatchMovie = () => {

    const movie = useLocation().state.stateParam;
    console.log(movie.name)
    console.log(movie.id)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Helmet title={'Watch '+ (movie.title != null ? movie.title : movie.name)}> 
            <Similar type ='Similar' id = {movie.id}/>  
            <MovieWatch id={movie.id} title={(movie.title != null ? movie.title : movie.name)} overview={movie.overview} vote_average={movie.vote_average} tv = {movie.name}/>  
            <Comment link = {window.location.href}></Comment>
        </Helmet>
        
    )
}

export default WatchMovie
