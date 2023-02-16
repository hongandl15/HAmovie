import {AiOutlineUser, AiFillCamera, AiOutlineHistory, AiFillHeart} from 'react-icons/ai'
import {RiVipCrown2Fill} from 'react-icons/ri'
import { auth, db, logout } from "../components/firebase";
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';

const ProfileSideBar = () => {
    const [user, loading, error] = useAuthState(auth);
    // const [user, setUser] = useState(auth.currentUser)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("https://icon-library.com/images/guest-icon-png/guest-icon-png-6.jpg");
    const history = useHistory();

    const fetchUser = async () => {
      try {
        // setUser(auth.currentUser);
        setAvatar(user.photoURL)
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    useEffect(() => {
        window.scrollTo(0, 0)
      if (loading) return;
      if (!user) return history.push('/login');
      fetchUser();
    }, [user, loading]);
    return (
            <div className="profilesidebar" >
                <div className='avatar'>
                    <img src={avatar} alt=""/>
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
                    {/* <Link to={"/mysubscriptions"}>
                    <div className='dashboard'><RiVipCrown2Fill> </RiVipCrown2Fill> &nbsp; Subscriptions</div> 
                    </Link>  */}
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
