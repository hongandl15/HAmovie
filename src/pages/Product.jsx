import React from 'react'
import ProductDetail, {ProductInfo} from '../components/ProductDetail'
import Helmet from '../components/Helmet'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Similar from '../components/Similar'

const Product = (props) => {
    const movie = useLocation().state.stateParam;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Helmet title={movie.title}>                           
            <Similar type ='Similar' id = {movie.id}/>     
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
