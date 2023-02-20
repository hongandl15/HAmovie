import { Link } from 'react-router-dom'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {BiLogIn, BiLogOut} from 'react-icons/bi'
import {AiFillSetting, AiOutlineSearch} from 'react-icons/ai'
import {RiVipDiamondFill } from 'react-icons/ri'
import { auth, db, logout } from "../components/firebase";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';

// const mainNav = [
//     {
//         display: "Trang chủ",
//         path: "/"
//     },
//     {
//         display: "Phim Hot",
//         path: "/catalog"
//     },
//     {
//         display: "Liên hệ",
//         path: "/contact"
//     },
//     {
//         display: "About",
//         path: "/about"
//     }
// ]

const SideBar = () => {
    // const { pathname } = useLocation()
    // const activeNav = mainNav.findIndex(e => e.path === pathname)

    // const headerRef = useRef(null)

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             headerRef.current.classList.add('shrink')
    //         } else {
    //             headerRef.current.classList.remove('shrink')
    //         }
    //     })
    //     return () => {
    //         window.removeEventListener("scroll")
    //     };
    // }, []);

    // const menuLeft = useRef(null)

    // const menuToggle = () => menuLeft.current.classList.toggle('active')
    const [user, loading, error] = useAuthState(auth);
    // const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("https://icon-library.com/images/guest-icon-png/guest-icon-png-6.jpg");
    const history = useHistory();

    const fetchUser = async () => {
      try {
        setAvatar(auth.currentUser.photoURL);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    useEffect(() => {
        window.scrollTo(0, 0)
      if (loading) return;
      if (!user || !auth.currentUser){
        setAvatar("https://icon-library.com/images/guest-icon-png/guest-icon-png-6.jpg")
        return history.push('/')
      } 
      fetchUser();
    }, [user, loading, avatar]);


    return (
        <div className="sidebar" >
            <Link to={"/profile"}>
                <img className='circleava' src={avatar} alt="" /> 
            </Link>
{/*         
            <Link to={"/subscription"}>
                <RiVipDiamondFill className='circlevip'/>
            </Link> */}
            
            <Link to={"/"}><li><BsFillHouseDoorFill/></li></Link>

            <Link to={"/search"}><li><AiOutlineSearch/></li></Link>

            <Link to={"/explore"}><li><MdOutlineExplore/></li></Link>

            {/* <Link to={"/login"}><li><BiLogIn/></li></Link> */}
          
            <Link to={"/login"}><button onClick={logout}><li><BiLogOut/></li></button></Link>

            <Link to={"/setting"}><li><AiFillSetting/></li></Link>
           
        </div>
    )
}

export default SideBar
