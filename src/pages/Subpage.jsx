import React from 'react'
import Subscription from '../components/Subscription'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const Subpage = () => {
    return (
        <Helmet title="Subscription">
        <section class="backgroundsub">
            <Similar type = 'Popular'/>
            <Subscription/>
        </section>   
        </Helmet>  
    )
}

export default Subpage
