import React, { useEffect } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
import Search from '../components/Search'

const SearchPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Helmet title="Search">
        <h1 style={{'font-size': '35px', 'color' : 'white', 'margin': '20px'}}>FIND YOUR FAVORITE MOVIE</h1>
        <div className='searchpage'>
            <div className='searchbar'>
                <div className='icon_search'><AiOutlineSearch/></div>
                <Search></Search>
            </div> 
            <div>
                <img src='https://as2.ftcdn.net/v2/jpg/01/54/76/07/1000_F_154760711_C3jq59wTGrNVmIyB8DI54qkdlP6QBxZD.jpg'/>
            </div>      
        </div>
        <Similar type = 'Popular'/> 
        </Helmet>  
        </>
    )
}

export default SearchPage
