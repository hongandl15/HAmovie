import React from 'react'
import Similar from '../components/Similar'
import { useEffect } from 'react'
import ShowDownload from '../components/ShowDownload'
import Section from '../components/Section'
import Helmet from '../components/Helmet'
const Download = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Helmet title="Download">
            <h1 style={{'font-size': '30px', 'color' : 'white', 'margin': '20px'}}>DOWNLOAD</h1>
            <Section>
                <ShowDownload page={2} type={'popular'}/>
            </Section>
            <Similar type = 'Popular'/>
        </Helmet>
        </>
    )
}

export default Download
