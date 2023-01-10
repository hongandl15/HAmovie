import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import SliderProduct from '../components/Slider'
import Similar from '../components/Similar'
import { useEffect } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Search from '../components/Search'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        
        <Helmet title="HA Movie: The future of cinema">
            <Similar type ={'similar'}/>
                <div className='header_title'> THE FUTURE OF CINEMA</div> 
            <Section>
                
                <HeroSlider
                    control={true}
                    auto={true}
                    timeOut={4000}
                />
            </Section>
            {/* end hero slider */}

            {/* best selling section */}
            <Section>
            <div className='searchbar_responsive'>
                <div className='icon_search'><AiOutlineSearch/></div>
                <Search/>
            </div>
                <SectionTitle>
                    Hot movies
                </SectionTitle>
                <SectionBody>
                    <SliderProduct 
                    page={1} 
                    num ={4}
                    type={'popular'}
                    />
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    New movies
                </SectionTitle>
                <SectionBody>
                    <SliderProduct 
                    page={2} 
                    num ={4}
                    type={'popular'}
                    />
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
            {/* banner */}
            <Section>
                
                    {/* <h1>Place To show Google AdSense</h1>
                    <AdsComponent dataAdSlot='X7XXXXXX5X' /> */}
                
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    Upcoming
                </SectionTitle>
                <SectionBody>
                    <SliderProduct 
                    page={1} 
                    num ={4} 
                    type={'upcoming'}/>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
        
    )
}

export default Home
