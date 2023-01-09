import React from 'react'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const About = () => {
    return (
        <>
        <Helmet title="About">
            <Similar type = 'Popular'/>
            <div className='about'>
                <h1 className='quote'>
                Stories move us.<br/>
                They make us feel more emotion,<br/>
                see new perspectives,<br/>
                and bring us closer to each other.
                </h1>

            <video width="100%"  autoPlay muted loop id="myVideo">
                <source src="https://videos.ctfassets.net/4cd45et68cgf/ihQGzmRN3CX9KYPkzRJFt/6eea6cd4f60a23486879b2e109856c08/NETFLIX_3D_Streams_Pillars_001_5mb__2_.mp4" type="video/mp4"/>
            </video>
            
                <h1 className='introduce'>
                At Da Movie, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and mobile games. Our members control what they want to watch, when they want it, with no ads, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.
                </h1>

                <div className='watchnow'>
                    <h1>Watch now</h1>
                    <h2>DA MOVIE</h2>
                </div>
            </div>
        </Helmet>
        </>
    )
}

export default About
