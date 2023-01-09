import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Footer'
import Routes from '../routes/Routes'
import SideBar from './SideBar'
import { useEffect } from 'react'
const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    {/* <Header {...props}/> */}
                    <SideBar/>
                    
                    <div className="container">
                        <div className="main">
                            <Routes/>
                            
                        </div>
                        <Footer/>
                    </div>
                    
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
