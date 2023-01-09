import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {BiLogIn} from 'react-icons/bi'
import {AiFillSetting, AiOutlineSearch} from 'react-icons/ai'
import {RiVipDiamondFill} from 'react-icons/ri'

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

    return (
        <div className="sidebar" >
            <Link to={"/profile"}>
                <img className='circleava' src="https://cdn-icons-png.flaticon.com/512/168/168882.png" alt="" /> 
            </Link>
        
            <Link to={"/subscription"}>
                <RiVipDiamondFill className='circlevip'/>
            </Link>
            
            <Link to={"/"}><li><BsFillHouseDoorFill/></li></Link>

            <Link to={"/search"}><li><AiOutlineSearch/></li></Link>

            <Link to={"/explore"}><li><MdOutlineExplore/></li></Link>

            <Link to={"/login"}><li><BiLogIn/></li></Link>
            
            <Link to={"/setting"}><li><AiFillSetting/></li></Link>
           
        </div>
    )
}

export default SideBar
