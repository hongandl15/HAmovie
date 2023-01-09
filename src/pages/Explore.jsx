import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import {SectionBodyCatalog} from '../components/Section'
import ShowMovie from '../components/ShowMovie'
import Filter from '../components/Filter'
import Similar from '../components/Similar'
import React, { useEffect } from 'react'


const Explore = (props) => {
    var keyword = null
    var sort = null
    if(props.location.state){
        keyword = props.location.state.keyword;
        sort = props.location.state.sort
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Helmet title="Explore">
                <Similar type = 'Popular'/>
                <h1 style={{'font-size': '30px', 'color' : 'white', 'margin': '20px'}}>EXPLORE YOUR FAVORITE MOVIE</h1>
                <Filter/>
                <SectionBodyCatalog>
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}   
                        gap={10}
                    >
                        <ShowMovie page={1} keyword={keyword} sort={sort}/>
                    </Grid>
                    {/* <PageNumber number={5}/> */}
                </SectionBodyCatalog>

        </Helmet>
        
    )
}

export default Explore
