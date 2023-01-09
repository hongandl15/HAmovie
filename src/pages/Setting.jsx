import React from 'react'
import Similar from '../components/Similar'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
const Setting = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Helmet title="Setting">
        <Similar type = 'Popular'/>
        <div className='setting'>
            <div className='setting_title'>Theme</div>
            <div className='setting_option'><input checked type="radio" id="choice1" name="choice1" />   Dark</div>
            <div className='setting_option'><input type="radio" id="choice1" name="choice1" />   Light</div>
        </div> 
        <div className='setting'>
            <div className='setting_title'>Language</div>
            <div className='setting_option'><input checked type="radio" id="choice2" name="choice2" />   English</div>
            <div className='setting_option'><input type="radio" id="choice2" name="choice2" />   Vietnamese</div>
        </div>
        
        <div className='setting_footer'>
            <Link to={"/help"}>
                <li>Help Center</li>
            </Link>
            <Link to={"/about"}>
                <li>About us</li>
            </Link>
            <Link to={"/privacy"}>
                <li>Privacy</li>
            </Link>
            <Link to={"/contact"}>
                <li>Contact us</li>
            </Link>

            <Link to={"/giftcode"}>
            <div className='giftcode'>
                <h1>Enter Giftcode</h1>
                <img width='100px' src="https://cdn.pixabay.com/photo/2019/12/16/15/47/vector-4699584_1280.png" alt="" />
            </div>
            </Link>
        </div>

        </Helmet>
        </>
    )
}

export default Setting
