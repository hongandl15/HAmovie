import React from 'react'
import {useState} from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {BiLogIn} from 'react-icons/bi'
import {AiFillSetting, AiOutlineUser} from 'react-icons/ai'
import {RiVipDiamondFill} from 'react-icons/ri'


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
                <li><BsFillHouseDoorFill/>Home</li>
                <li><MdOutlineExplore/>Explore</li>
                <li><AiFillSetting/>Setting</li>
            </div>

        </div>
        
    )
}

export default Header
