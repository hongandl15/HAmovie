import { RiVipCrown2Fill } from 'react-icons/ri'
import { AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SliderProduct from './Slider'
import Button from './Button'
import { auth, db, logout } from "../components/firebase";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';

const ProfileAccount = () => {
    const [user, loading, error] = useAuthState(auth);
    // const [user, setUser] = useState(auth.currentUser)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("https://icon-library.com/images/guest-icon-png/guest-icon-png-6.jpg");
    const history = useHistory();

    const fetchUser = async () => {
      try {
        // setUser(auth.currentUser);
        setName(user.displayName)
        setEmail(user.email)
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
        <div className="profileLibrary" >
            <h1 style={{"color": "white", 'margin': '20px'}}>Thông tin tài khoản cá nhân</h1>
            <div class="profileDetail">
                <h2>Display Name:</h2>
                <div class='displayName'>
                    <h3>{name}</h3>
                    {/* <Link to={"/edit"}>
                        <button class='editButton'> <AiOutlineEdit></AiOutlineEdit></button>
                    </Link> */}
                </div>
                <h2>Email:</h2>
                <div class='displayEmail'>
                    <h3>{email}</h3>
                </div>
                    <Link to={"/password"}>
                        <button class='editButton'> Change password <AiOutlineEdit></AiOutlineEdit></button>
                    </Link>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" /> */}
            </div>
        </div>
    )
}

export const ProfileFavorite = () => {
    return (
        <div className="profileLibrary" >
                <div className='watchlist'>
                <h1 style={{"color": "white", 'margin': '20px', 'font-size': '30px'}}>My Favorite</h1>
                    <div className='sliderwatchlist'>
                        <SliderProduct 
                        page={1} 
                        num ={4}
                        type={'popular'}
                        ></SliderProduct>
                    </div>
                </div>
        </div> 
    )
}


export const ProfileHistory = () => {
    return (
        <div className="profileLibrary" >
                <div className='watchlist'>
                <h1 style={{"color": "white", 'margin': '20px', 'font-size': '30px'}}>My History</h1>
                    <div className='sliderwatchlist'>
                        <SliderProduct 
                        page={3} 
                        num ={3}
                        type={'popular'}
                     ></SliderProduct>
                    </div>
                </div>
        </div> 
    )
}


export const ProfileSub = () => {
    return (
        <div className="profileLibrary" >
            <h1 style={{"color": "white", 'margin': '20px'}}>Thông tin gói dịch vụ hiện tại</h1>
            <div className='toprated'>
                <div className='sub'>
                    <div class='premium'>
                      <RiVipCrown2Fill></RiVipCrown2Fill>  PREMIUM
                    </div>
                    <Button backgroundColor={'grey'}>CANCEL</Button>
                </div>
                <div className='detail'>
                    <h4>Visa: 1234 5678 1234 4567</h4>
                    <h4>Name: NGUYEN PHAM HONG AN</h4>
                    <h4>Phone: 0326009124</h4>
                    
                    <hr></hr>

                    <h4>Ngày tính phí tiếp theo của bạn là 23 tháng 10, 2022.</h4>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="" /> */}
                    <img width='120px' height='50px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" />
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" /> */}
                </div>
            </div >
        </div>
    )
}

export default ProfileAccount
