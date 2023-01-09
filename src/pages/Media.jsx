import React, {useEffect} from 'react'
import Helmet from '../components/Helmet'
import Similar from '../components/Similar'
import Trailer  from '../components/Trailer'
import Button from '../components/Button'
import { Link, useLocation } from 'react-router-dom'

const Media = (props) => {
    const movie = useLocation().state.stateParam;
    const IMG_URL = 'https://image.tmdb.org/t/p/w300/'
    const BANNER_URL = 'https://image.tmdb.org/t/p/original/'
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Helmet title={'Media ' + movie.title}>
            <div className="productDetail">
                <div className="productDetail__image">
                    <img className='banner_img' src={BANNER_URL + movie.backdrop_path} alt="hình" />
                    <img className='poster_img' src={IMG_URL + movie.poster_path} alt="hình" />
                    <h3>{movie.title}</h3> 
                    <div className="watchbtn">
                    <Link to={{
                        pathname: "/watch/ " + movie.id,
                        state: {stateParam: movie}
                    }}>
                        <Button
                            backgroundColor={'grey'}
                            animate={true}
                        >Watch
                        </Button>
                    </Link>       
                    </div>
                    <div className="trailerbtn">

                    <Link to={{
                        pathname: "/movie/ " + movie.id,
                        state: {stateParam: movie}
                    }}>
                        <Button
                            backgroundColor={'black'}   
                            animate={true}
                        >Detail
                        </Button>
                    </Link> 
                </div>          
                </div>  
            </div>                  

            <Trailer type = {'Trailer'} id ={movie.id} width={300} height={200}/>  
            <Trailer type = {'Featurette'} id ={movie.id} width={300} height={200}/> 
            <Trailer type = {'Behind the Scenes'} id ={movie.id} width={400} height={300}/>  
            <Trailer type = {'Teaser'} id ={movie.id} width={400} height={300}/> 

            <Similar type ='Similar' id = {movie.id}/>  
        </Helmet>
    )
}


export default Media
