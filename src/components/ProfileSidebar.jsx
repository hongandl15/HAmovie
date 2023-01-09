import React from 'react'
import {AiOutlineUser, AiFillCamera, AiOutlineHistory, AiFillHeart} from 'react-icons/ai'
import {RiVipCrown2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const imageurl  = "https://cdn-icons-png.flaticon.com/512/168/168882.png"

const ProfileSideBar = () => {
    return (
            <div className="profilesidebar" >
                <div className='avatar'>
                    <img src={imageurl} alt=""/>
                    <Link to = '/avatar'>
                    <button className='avatarEdit'><AiFillCamera ></AiFillCamera></button>
                    </Link>
                </div>
                
                <div className="profileinfo">
                    <h4>Ân Nguyễn #1234</h4>
                    <div className='info'>Hi, my name is Nguyen Pham Hong An and I am from Vietnam, nice to meet you</div>
                    <Link to={"/profile"}>
                    <div className='dashboard'><AiOutlineUser> </AiOutlineUser> &nbsp; Account</div>
                    </Link>
                    <Link to={"/mysubscriptions"}>
                    <div className='dashboard'><RiVipCrown2Fill> </RiVipCrown2Fill> &nbsp; Subscriptions</div> 
                    </Link> 
                    <Link to={"/history"}>
                    <div className='dashboard'><AiOutlineHistory> </AiOutlineHistory> &nbsp; History</div> 
                    </Link>
                    <Link to={"/favorite"}>
                    <div className='dashboard'><AiFillHeart> </AiFillHeart> &nbsp; Favorite</div> 
                    </Link> 
                                          
                </div>
            </div>
    )
}

export default ProfileSideBar
