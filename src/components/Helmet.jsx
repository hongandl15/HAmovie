import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {

    document.title = props.title
    document.getElementsByTagName("META")[2].content="Your description about the page or site here to set dynamically";

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
