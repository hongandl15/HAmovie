import React from 'react'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const Contact = () => {
    return (
        <>
        <Helmet title="Contact">
        <Similar type = 'Popular'/>
            <div className='contact'>
                <h1 style={{'font-size': '30px', 'color' : 'white', 'margin': '20px'}}>Contact us</h1>
                <h2>Email: DAmovie@gmail.com</h2>
                <h2>Phone: 0326009123</h2>
                <h2>Address: 19 Nguyen  Huu Tho, Tan Phong, District 7, Ho Chi Minh city </h2>
                <h2>Location:</h2>
                <iframe title="map" frameborder="2" width='1050' height='600'src="https://maps.google.com/maps?width=2048&amp;height=2048&amp;hl=en&amp;q=Ton duc thang&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>  
        </Helmet>      
        </>
    )
}

export default Contact
