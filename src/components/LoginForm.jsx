import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';

export const LoginForm = () => {
  const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.push("/");
  }, [user, loading]);

  return (
          <form onSubmit className='loginform'>
              <h1>Login </h1>
              <h3>Email</h3>
              <input type="email" />
              <h3>Password</h3>
              <input type="password" />
              <div className='buttonlogin'>
              < Link to={"/success"}>
                  <button>Login</button>
                </Link>
                <Link to={"/register"}>
                  <button>Register</button>
                </Link>
              </div>
              <Link to={"/forgotpassword"}>
              <div className='forgotpassword'>Forgot Password?</div>
              </Link>
              <Link to={"/login"}>
              <button onClick={signInWithGoogle} className='sociallogin'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                <div> Login with google</div>
              </button>  
              {/* <button onClick={signInWithGoogle} className='sociallogin'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <div> Login with Facebook</div>
              </button>   */}
              </Link>
          </form>
        );
}


export const RegisterForm = () => {
  return (
          <form onSubmit className='loginform'>
              <h1>Register</h1>

              <h3>Display Name</h3>
              <input type="text" />

              <h3>Email</h3>
              <input type="email" />

              <h3>Password</h3>
              <input type="password" />
              <h3>Confirm Password</h3>
              <input type="password" />

              <div className='buttonlogin'>
                <Link to={"/otp"}>
                  <button>Register</button>
                </Link>
                <Link to={"/login"}>
                  <button>Back</button>
                </Link>
              </div>
            
          </form>
        );
}


export const ForgotPasswordForm = () => {
  return (
          <form onSubmit className='loginform'>
              <h3> Your Email</h3>
              <input type="email" />

              <div className='buttonlogin'>
                <Link to={"/otpverify"}>
                  <button>Send Email</button>
                </Link>
                <Link to={"/login"}>
                  <button>Back</button>
                </Link>
              </div>            
          </form>
        );
}

export const OTPForm = (props) => {
  return (
          <form onSubmit className='loginform'>
              <h3>Enter OTP </h3>
              <input type="number" />
              <div className='buttonlogin'>
                <Link to={"/success"}>
                  <button>Okay</button>
                </Link>
                <Link to={"/login"}>
                  <button>Back</button>
                </Link>
              </div>            
          </form>
        );
}

export const OTPverifyForm = (props) => {
  return (
          <form onSubmit className='loginform'>
              <h3>Enter OTP </h3>
              <input type="number" />
              <div className='buttonlogin'>
                <Link to={"/confirmpassword"}>
                  <button>Okay</button>
                </Link>
                <Link to={"/login"}>
                  <button>Back</button>
                </Link>
              </div>            
          </form>
        );
}

export const ConfirmPasswordForm = () => {
  return (
          <form onSubmit className='loginform'>
              <h3> New Password</h3>
              <input type="password" />
              <h3> Confirm Password</h3>
              <input type="password" />

              <div className='buttonlogin'>
                <Link to={"/"}>
                  <button>Okay</button>
                </Link>
                <Link to={"/login"}>
                  <button>Back</button>
                </Link>
              </div>            
          </form>
        );
}

export const FinishLoginForm= () => {
  return (
          <form onSubmit className='loginform'>
              <div className='loginsuccess'>
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/success-green-check-mark-icon.png" alt="" />
                <h2>Success</h2>
              </div>

              <div className='buttonlogin'>
                <Link to={"/"}>
                  <button>Go homepage</button>
                </Link>
              </div>            
          </form>
        );
}

export default LoginForm