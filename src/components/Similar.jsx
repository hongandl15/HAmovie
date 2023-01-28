import React, { useEffect, useState } from 'react'
import Search from './Search';
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

const IMG_URL = 'https://image.tmdb.org/t/p/w92/'

const ProductSimilar = (movie) => {
  return (
      <div className="productSimilar">
          <Link to={{
              pathname: "/movie/" + movie.info.id,
              state: {stateParam: movie.info}
          }}>
                  <div className="productSimilar__image">
                      <img width={'150px'} src={IMG_URL + movie.info.poster_path} alt="hình 1" />
                      <div className='info'>
                          <h3>{movie.info.title != null ? movie.info.title : movie.info.name}</h3> 
                          <h4>{movie.info.release_date}</h4>
                      </div>
                  </div>              
          </Link>
      </div>
  )
}

 const Similar = (props) => {
  var id = 76600
  if (props.id) {id = props.id}

  const API_KEY = '?api_key=db95773a7fb212ba790d71f6adac0e7e';
  // var page = 1;
  var type = 'Popular';
  var url1 = "https://api.themoviedb.org/3/movie/" + id + '/'+ 'similar' + API_KEY +"&language=vi&";
  var url2 = "https://api.themoviedb.org/3/movie/" + 'popular' + API_KEY +"&language=vi&";
  var API_URL = url2
  if (props.id) {
    type = 'Similar'
    API_URL = url1
  }


  const [ movieData, setData ] = useState([]);
  const [url_set, setUrl] = useState(API_URL);

  useEffect(() =>{
      fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
          setData(data.results);
          setUrl(API_URL)
      });
  }, [API_URL])


  return (
    <div className="similar">
        <div className='search'>
          <div className='icon_search'><AiOutlineSearch/></div>
          <Search/>
        </div>
        <h1>{type} movie</h1>      
        {
          (movieData.length == 0) ? <p></p>:
              movieData.slice(0, 4).map((res, pos) => 
              <ProductSimilar info ={res} key={pos}/>,
              )
        }      
    </div>
  )
}




export default Similar
