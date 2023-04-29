import React, {useEffect, useState} from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import {GiVote} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Button from './Button'
import Trailer from './Trailer'
import {auth, db, addFavorite, getFavorite } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';

const ProductDetail = (props) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w185/'
    const BANNER_URL = 'https://image.tmdb.org/t/p/w1280/'

    return (
        <div className="productDetail">
            <div className="productDetail__image">
                <img className='banner_img' src={BANNER_URL + props.movie.backdrop_path} alt="hình" />
                <img className='poster_img' src={IMG_URL + props.movie.poster_path} alt="hình" />
                <h3>{props.movie.title != null ? props.movie.title : props.movie.name}</h3>
                {/* <div className='movie_tag'>action</div> */}
                <div className="watchbtn">
                <Link to={{
                    pathname: "/watch/ " + props.movie.id,
                    state: {stateParam: props.movie}
                }}>
                    <Button
                        backgroundColor={'grey'}
                        animate={true}
                    >   Watch
                    </Button>
                </Link>       
                </div>
                <div className="trailerbtn">

                <Link to={{
                    pathname: "/media/ " + props.movie.id,
                    state: {stateParam: props.movie}
                }}>
                    <Button
                        backgroundColor={'black'}   
                        animate={true}
                    >   Media
                    </Button>
                </Link> 
                </div>              
            </div>  
        </div>
    )
}

export const ProductInfo = (props) => {

    
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("")
    const history = useHistory();

    const fetchUser = async () => {
      try {
        setEmail(auth.currentUser.email)
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    useEffect(() => {
      if (loading) return;
      if (!user || !auth.currentUser){
        return history.push('/login')
      } 
      fetchUser();
    }, [user, loading, error]);

    return (
        <div className="productDetail">
            <div className="productInfo">
                    <div className='rating'>
                        <button onClick={addFavorite(props.movie)}>{email}</button>
                        {/* <button onClick={getFavorite(name)}>{name}</button> */}
                        <h1>Rating</h1>
                        <p className='rate'>{props.movie.vote_average} <AiTwotoneStar/></p>
                        <h1>Voting</h1>
                        <p className='vote'>{props.movie.vote_count} <GiVote/></p>
                    </div>
                    <div className="info">
                        <div className="heading">                
                            <li>Overall</li>
                            <Link to={{
                                pathname: "/review/" + props.movie.id,
                                state: {stateParam: props.movie}
                            }}>
                            <li>Review</li>
                            </Link>
                        </div>

                        <div className="bodying">
                            <h1>Story</h1>
                            <p>{props.movie.overview}</p>
                        </div>

                        <div className="bodying">
                            <h1>Detail</h1>
                            <p>Release date: {props.movie.release_date}</p>
                        </div>
                    </div>
                <Trailer type={'Trailer'} id = {props.movie.id} key={props.movie} number= {2} width={350} height={250}></Trailer>
            </div>
        </div>
)
}


export default ProductDetail
