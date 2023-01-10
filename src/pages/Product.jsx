import React, {useEffect, useState} from 'react'
import ProductDetail, {ProductInfo} from '../components/ProductDetail'
import Helmet from '../components/Helmet'
import { useLocation } from 'react-router-dom'
import Similar from '../components/Similar'
import Search from '../components/Search'
import {AiOutlineSearch} from 'react-icons/ai'

const Product = (props) => {
    const movie = useLocation().state.stateParam;
    // const [movie, setMovie] = useState([movieparam]);  
    
    // useEffect(() => {
    //     // window.scrollTo(0, 0)
    //     setMovie(movieparam)
    //   }, [movieparam])

    return (
        <Helmet title={movie.title}>                           
            <Similar type ='Similar' id = {movie.id}/>  
            <div className='searchbar_responsive'>
                <div className='icon_search'><AiOutlineSearch/></div>
                <Search/>
            </div>   
            <ProductDetail   
                movie = {movie} 
            />
            <ProductInfo
                movie = {movie} 
            />                                 
        </Helmet>
    )
}


export default Product
