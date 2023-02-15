import React from 'react'
import LoginForm, {LoginfbForm, RegisterForm, ForgotPasswordForm, ConfirmPasswordForm, OTPForm, OTPverifyForm, FinishLoginForm} from '../components/LoginForm'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const Login = () => {
    return (
        <Helmet title="Login">
        <section class="loginbackground">
            <LoginForm/>
        </section>
        <Similar type = 'Popular'/>
        </Helmet>
    )
}

export const Register = () => {
    return (
        <Helmet title="Register">
        <section class="loginbackground">
            <RegisterForm/>
        </section>
        <Similar type = 'Popular'/>
        </Helmet>    
    )
}

export const ForgotPassword = () => {
    return (
        <Helmet title="Password Recovery">
        <section class="loginbackground">
            <ForgotPasswordForm/>
        </section>
        <Similar type = 'Popular'/>
        </Helmet>
    )
}

export const OTP = () => {
    return (
        <Helmet title="OTP">
        <section class="loginbackground">
            <OTPForm/>
        </section>
        <Similar type = 'Popular'/>
        </Helmet>
    )
}

export const OTPverify = () => {
    return (
        <>
        <section class="loginbackground">
            <OTPverifyForm/>
        </section>
        <Similar type = 'Popular'/>
        </>
    )
}

export const ConfirmPassword = () => {
    return (
        <Helmet title="Password Confirm">
        <section class="loginbackground">
            <ConfirmPasswordForm/>
        </section>
        <Similar type = 'Popular'/>
        </Helmet>
    )
}

export const Success = () => {
    return (
        <Helmet title="Successful">
        <section class="loginbackground">
            <FinishLoginForm/>
        </section>
        <Similar type = 'Popular'/>
        </Helmet>
    )
}

export default Login
