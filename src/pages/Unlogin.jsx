import React from 'react'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const About = () => {
    return (
        <>
        <Helmet title="Đăng nhập">
            <Similar type = 'Popular'/>
            <div className='unlogin'> vui long dang nhap de su dung chuc nang nay</div>
        </Helmet>
        </>
    )
}

export default About
