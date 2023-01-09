import React from 'react'
import LoginForm, {LoginfbForm, RegisterForm, ForgotPasswordForm, ConfirmPasswordForm, OTPForm, OTPverifyForm, FinishLoginForm} from '../components/LoginForm'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const Login = () => {
    return (
        <Helmet title="Login">
        <section class="loginbackground">
            <LoginForm/>
            <Similar type = 'Popular'/>
            </section>
        </Helmet>
    )
}

export const LoginFB = () => {
    return (
        <Helmet title="Login Facebook">
        <section class="loginbackground">
            <LoginfbForm/>
            <Similar type = 'Popular'/>
        </section>
        </Helmet>
    )
}

export const Register = () => {
    return (
        <Helmet title="Register">
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <RegisterForm/>
        </section>
        </Helmet>    
    )
}

export const ForgotPassword = () => {
    return (
        <Helmet title="Password Recovery">
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <ForgotPasswordForm/>
        </section>
        </Helmet>
    )
}

export const OTP = () => {
    return (
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <OTPForm/>
        </section>
    )
}

export const OTPverify = () => {
    return (
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <OTPverifyForm/>
        </section>
    )
}

export const ConfirmPassword = () => {
    return (
        <Helmet title="Password Confirm">
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <ConfirmPasswordForm/>
        </section>
        </Helmet>
    )
}

export const Success = () => {
    return (
        <Helmet title="Successful">
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <FinishLoginForm/>
        </section>
        </Helmet>
    )
}

export default Login
