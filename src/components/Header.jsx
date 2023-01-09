import React from 'react'
import {useState} from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {AiFillSetting, AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Header = () => {
    
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
      };
    return (
        <div className="header">
            <div style={{'display':'flex', 'justifyContent':'space-between'}}>
             <button onClick={handleClick}><AiOutlineMenu/></button>
             <button onClick={handleClick}><AiOutlineUser/></button>
            </div>
            <div style={{ display: isActive ? 'block' : 'none'}}  className='popupmenu'>
            <Link to={"/"}><li><BsFillHouseDoorFill/>Home</li></Link>

            <Link to={"/explore"}><li><MdOutlineExplore/>Explore</li></Link>
            
            <Link to={"/setting"}><li><AiFillSetting/>Setting</li></Link>
            </div>

        </div>
        
    )
}

export default Header
