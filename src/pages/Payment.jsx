import React from 'react'
import PaymentForm, {PaymentMomo, PaymentSuccess} from '../components/PaymentForm'
import Similar from '../components/Similar'
import Helmet from '../components/Helmet'
const Payment = () => {
    return (
        <Helmet title="About">
        <section class="loginbackground">
            <PaymentForm/>
            <Similar type = 'Popular'/>
        </section>
        </Helmet>
    )
}

export const PaymentMomoPage = () => {
    return (
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <PaymentMomo/>
        </section>
    )
}

export const PaymentSuccessPage = () => {
    return (
        <section class="loginbackground">
            <Similar type = 'Popular'/>
            <PaymentSuccess/>
        </section>
    )
}

export default Payment
