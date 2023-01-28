import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import {SectionBodyCatalog} from '../components/Section'
import ShowMovie from '../components/ShowMovie'
import Filter from '../components/Filter'
import Similar from '../components/Similar'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import {AiOutlineSearch} from 'react-icons/ai'


const Explore = (props) => {
    var keyword = null
    var sort = null
    const [type, setType ] = useState('movie');
    if(props.location.state){
        keyword = props.location.state.keyword;
        sort = props.location.state.sort
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [type])

    return (
        <Helmet title="Explore">
                <Similar type = 'Popular'/>
                <h1 style={{'font-size': '30px', 'color' : 'white', 'margin': '20px'}}>EXPLORE YOUR FAVORITE MOVIE</h1>
                <div className='explore__title'>
                    <button onClick={() => setType('movie')}><h2>Movie</h2></button>
                    <button onClick={() => setType('tv')}><h2>TV show</h2></button>
                </div>
                <Filter/>
                <div className='searchbar_responsive'>
                    <div className='icon_search'><AiOutlineSearch/></div>
                    <Search/>
                 </div>
                <SectionBodyCatalog>
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}   
                        gap={10}
                    >
                        <ShowMovie page={1} key={keyword + type} keyword={keyword} sort={sort} type={type}/>
                    </Grid>
                    {/* <PageNumber number={5}/> */}
                </SectionBodyCatalog>

        </Helmet>
        
    )
}

export default Explore
