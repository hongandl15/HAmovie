import React from 'react'

const Section = props => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export const SectionHome = props => {
    return (
        <div className="section__home">
            {props.children}
        </div>
    )
}

export const SectionTitle = props => {
    return (
        <div className="section__title">
            {props.children}
        </div>
    )
}

export const SectionBody = props => {
    return (
        <div className="section__body">
            {props.children}
        </div>
    )
}

export const SectionBodyCatalog = props => {
    return (
        <div className="section__catalog">
            {props.children}
        </div>
    )
}

export default Section
