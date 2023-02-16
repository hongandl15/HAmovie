import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Trailer from './Trailer'

const HeroSlider = props => {
    
    const API_KEY = '?api_key=db95773a7fb212ba790d71f6adac0e7e';    
    var API_URL = "https://api.themoviedb.org/3/movie/" + 'popular' + API_KEY +"&language=vi&page=" + 1;

        const [movieData, setData ] = useState([]);
        const [url_set, setUrl] = useState(API_URL);

        useEffect(() =>{
            setUrl(API_URL)
            fetch(url_set)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.results);
            });
        }, [url_set])

    const data = movieData

    const timeOut = props.timeOut ? props.timeOut : 3000

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
        },
        [activeSlide, data],
    )

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut);
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])

    return (
        <div className="hero-slider">
            {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlide}/>
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                        <div className="hero-slider__control__item" onClick={prevSlide}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {/* <div className="hero-slider__control__item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div> */}
                        <div className="hero-slider__control__item">
                            <div className="play">
                                {/* {activeSlide + 1}/{data.length} */}
                            </div>
                        </div>
                        <div className="hero-slider__control__item" onClick={nextSlide}>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
const BANNER_URL = 'https://image.tmdb.org/t/p/w1280/'
const HeroSliderItem = props => (
    <>
    <Link to={{
        pathname: "/movie/" + props.item.id,
        state: {stateParam: props.item}
    }}>
        <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
            <img src={BANNER_URL + props.item.backdrop_path} alt="hình" />
            <div className="hero-slider__item__info">
                
                <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                    <span>{props.item.title}</span>
                </div>
                <div className="hero-slider__item__info__description">
                    <span>{props.item.overview}</span>
                </div>
                
            </div>
            <Trailer type ={"Trailer"} id = {props.item.id} number={1} width={'320px'} height={'200px'}></Trailer>
        </div>
    </Link>
    
    </>
)

export default HeroSlider
