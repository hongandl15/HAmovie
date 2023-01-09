import React from 'react'
import ProfileSideBar from '../components/ProfileSidebar'
import EditName, { EditAvatar } from '../components/ProfileEdit'
import {EditPassword} from '../components/ProfileEdit'
import Similar from '../components/Similar'
const ProfileEdit = () => {
    return (
        <div className='profile'>
            <ProfileSideBar/>           
            <EditName/>
            <Similar type = 'Popular'/>
        </div>
    )
}

export const ProfileEditPassword = () => {
    return (
        <div className='profile'>
            <ProfileSideBar/>           
            <EditPassword/>
            <Similar type = 'Popular'/>
        </div>
    )
}

export const ProfileEditAvatar= () => {
    return (
        <div className='profile'>
            <ProfileSideBar/>           
            <EditAvatar/>
            <Similar type = 'Popular'/>
        </div>
    )
}

export default ProfileEdit
