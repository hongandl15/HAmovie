import React from 'react'
import { AiFillSave } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const EditName = () => {
    return (
        <div className="profileLibrary" >
            <h1 style={{"color": "white", 'margin': '20px'}}>Thay đổi thông tin cá nhân</h1>
            <div class="profileDetail">
                <h2>Display Name:</h2>
                <div class='displayName'>
                    <input type='text' placeholder='Ân Nguyễn #1234'></input>
                </div>
                <h2>Email:</h2>
                <div class='displayEmail'>
                    <input type='email' placeholder='hongandl15@gmail.com'></input>
                    <Link to={"/profile"}>
                        <button class='editButton'><AiFillSave className='editicon'></AiFillSave> Save</button>
                    </Link>
                </div>           
            </div>
        </div>
    )
}

export const EditPassword = () => {
    return (
        <div className="profileLibrary" >
            <h1 style={{"color": "white", 'margin': '20px'}}>Thay đổi mật khẩu </h1>
            <div class="profileDetail">
                <h2>Mật khẩu cũ</h2>
                <div class='displayPassword'>
                    <input type='text' placeholder=''></input>
                </div>
                <h2>Mật khẩu mới:</h2>
                <div class='displayPassword'>
                    <input type='password'></input>
                </div>
                <h2>Nhập lại mật khẩu mới:</h2>
                <div class='displayPassword'>
                    <input type='password'></input>
                </div>
                <Link to={'/profile'}>
                    <button class='editButton'><AiFillSave className='editicon'></AiFillSave> Save</button>
                </Link>
            </div>
        </div>
    )
}

export const EditAvatar = () => {
    const imageurl  = "https://cdn-icons-png.flaticon.com/512/168/168882.png"
    return (
        <div className="profileLibrary" >
            <h1 style={{"color": "white", 'margin': '20px'}}>Thay đổi avatar </h1>
            <div class="profileDetail">
                {/* <h2>Mật khẩu cũ</h2>
                <div class='displayPassword'>
                    <input type='text' placeholder='Ân Nguyễn #1234'></input>
                </div>
                <h2>Mật khẩu mới:</h2>
                <div class='displayPassword'>
                    <input type='password'></input>
                </div>
                <h2>Nhập lại mật khẩu mới:</h2>
                <div class='displayPassword'>
                    <input type='password'></input>
                </div> */}
                <input type ='file'></input>
                <img width={'500px'} height={'500px'} src={imageurl} alt="" />
                <br></br>
                <Link to={'/profile'}>
                    <button class='editButton'><AiFillSave className='editicon'></AiFillSave> Save</button>
                </Link>
            </div>
        </div>
    )
}

export default EditName

