import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const IMG_URL = 'https://image.tmdb.org/t/p/w200/'


const Review = (review) => {
    var avatar = IMG_URL + review.info.author_details.avatar_path
    var avatar_url = review.info.author_details.avatar_path
    if(avatar_url === "/https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg"){
        avatar = 'https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
    }
        
    return (
        <div className="review_card">
                <img className='avatar_review' src={avatar} alt="hình" />
                <h2>{review.info.author_details.username}</h2>    
                <div className='star'>{review.info.author_details.rating}.0 <AiOutlineStar/></div>    
                <h3>{review.info.content}</h3>     
        </div>
    )
}

export default Review
