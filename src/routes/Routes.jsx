import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Explore from '../pages/Explore'
import Home from '../pages/Home'
import Product from '../pages/Product'
import WatchMovie from '../pages/WatchMovie'
import Login,{ Register, ForgotPassword, ConfirmPassword, OTP, Success, OTPverify} from '../pages/Login'
import Profile, {Favorite, Subscriptions, History} from '../pages/Profile'
import Subpage from '../pages/Subpage'
import Payment, {PaymentMomoPage, PaymentSuccessPage} from '../pages/Payment'
import ProfileEdit, { ProfileEditPassword, ProfileEditAvatar } from '../pages/ProfileEdit'
import Setting from '../pages/Setting'
import Media from '../pages/Media'
import Privacy from '../pages/Privacy'
import Help from '../pages/Help'
import About from '../pages/About'
import ReviewPage from '../pages/ReviewPage'
import SearchPage from '../pages/Search'
import Download from '../pages/Download'
import Contact from '../pages/Contact'
import Giftcode from '../pages/Giftcode'
// import Login from "../components/Login"
// import Register from "../components/Register"
// import Reset from "../components/Reset"
// import Dashboard from "../components/Dashboard"

const Routes = () => {
    return (
        <Switch>
            
            <Route path='/mymovieweb' exact component={Home}/>  
            <Route path='/hamovie' exact component={Home}/>  
            {/* Home */}
            <Route path='/' exact component={Home}/>
            <Route path='/search' component={SearchPage}/>
            <Route path='/explore' component={Explore}/>
            {/* Subcription */}
            <Route path='/subscription' component={Subpage}/>        
            <Route path='/payment' component={Payment}/>
            <Route path='/paymentmomo' component={PaymentMomoPage}/>
            <Route path='/paymentsuccess' component={PaymentSuccessPage}/>
            {/* Movie */}
            <Route path='/watch' component={WatchMovie}/>
            <Route path='/review' component={ReviewPage}/>
            <Route path='/movie' component={Product}/>
            <Route path='/media' component={Media}/>
            <Route path='/download' component={Download}/>
            {/* Login/Register */}
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/forgotpassword' component={ForgotPassword}/>
            <Route path='/otp' component={OTP}/>
            <Route path='/otpverify' component={OTPverify}/>
            <Route path='/success' component={Success}/>
            <Route path='/confirmpassword' component={ConfirmPassword}/>

            {/* Profile */}
            <Route path='/profile' component={Profile}/>
            <Route path='/avatar' component={ProfileEditAvatar}/>
            <Route path='/edit' component={ProfileEdit}/>
            <Route path='/password' component={ProfileEditPassword}/>
            <Route path='/mysubscriptions' component={Subscriptions}/>
            <Route path='/history' component={History}/>
            <Route path='/favorite' component={Favorite}/>

            {/* Setting */}
            <Route path='/setting' component={Setting}/>
            <Route path='/giftcode' component={Giftcode}/>
            <Route path='/privacy' component={Privacy}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route path='/help' component={Help}/>

            {/* <Route exact path="/login" element={Login} /> */}
            {/* <Route exact path="/register" element={Register} /> */}
            {/* <Route exact path="/reset" element={Reset} /> */}
            {/* <Route exact path="/dashboard" element={Dashboard} /> */}
            
        </Switch>
    )
}

export default Routes
