import React from 'react'
import ProductDetail from '../components/ProductDetail'
import Helmet from '../components/Helmet'
import { useLocation, Link } from 'react-router-dom'
import Similar from '../components/Similar'
import ShowReview from '../components/ShowReview'
import {AiOutlineRollback} from 'react-icons/ai'

const ReviewPage = (props) => {
    const movie = useLocation().state.stateParam;

    return (
        <Helmet title={"Review " + movie.title}>                           
            <Similar type ='Similar' id = {movie.id}/> 
            <ProductDetail movie = {movie}/>
            <Link to={{
                pathname: "/movie/" + movie.id,
                state: {stateParam: movie}
            }}>
                <div className='back'> <AiOutlineRollback/> Back to Overall</div>
            </Link>
            <ShowReview
                movieid = {movie.id}
                page = {1}
            />                
        </Helmet>
    )
}

export default ReviewPage
