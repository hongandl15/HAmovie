import React from 'react'
import {BsStarFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import photo from '../assets/images/unknown.jpg'


const IMG_URL = 'https://image.tmdb.org/t/p/w300/'

const ProductCard = (movie) => {
    var image = IMG_URL + movie.info.poster_path 
    var image_null = "https://image.tmdb.org/t/p/w300/null"
    return (
        <div className="product-card">
            <Link to={{
                pathname: "/movie/" + movie.info.id,
                state: {stateParam: movie.info}
            }}>
                <div className="product-card__image"> 
                        <div className='rating_card'>{movie.info.vote_average} <BsStarFill/></div>
                        <img src={image !== image_null ? image : photo} alt= {movie.info.title} />
                    <h3>{movie.info.title}</h3>   
                </div>
                {/* !== null ? this.getImage(image) : 'https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png'   */}
            </Link>           
        </div>
    )
}



export default ProductCard
