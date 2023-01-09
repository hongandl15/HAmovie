import React from 'react'
import ProfileAccount, {ProfileHistory, ProfileSub, ProfileFavorite} from '../components/ProfileAccount'
import ProfileSideBar from '../components/ProfileSidebar'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const Profile = () => {
    return (
        <Helmet title="Profile">
        <div className='profile'>
            <ProfileSideBar/>           
            <ProfileAccount/>
        </div>
        <Similar type = 'Popular'/>
        </Helmet>

    )
}

export const Favorite = () => {
    return (
        <div className='profile'>
            <ProfileSideBar/>           
            <ProfileFavorite/>
            <Similar type = 'Popular'/>
        </div>
    )
}

export const History = () => {
    return (
        <div className='profile'>
            <ProfileSideBar/>           
            <ProfileHistory/>
            <Similar type = 'Popular'/>
        </div>
    )
}

export const Subscriptions = () => {
    return (
        <div className='profile'>
            <ProfileSideBar/>           
            <ProfileSub/>
            <Similar type = 'Popular'/>
        </div>
    )
}

export default Profile
