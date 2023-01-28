import React from 'react'
import ProductDetail, {ProductInfo} from '../components/ProductDetail'
import Helmet from '../components/Helmet'
import { useLocation } from 'react-router-dom'
import Similar from '../components/Similar'
import Search from '../components/Search'
import {AiOutlineSearch} from 'react-icons/ai'

const Product = (props) => {
    const movie = useLocation().state.stateParam;

    return (
        <Helmet title={movie.title != null ? movie.title : movie.name}>            
            <Similar key ={movie.id} type ='Similar' id = {movie.id}/>  
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
