import React from 'react'
import { Link } from 'react-router-dom';

export const PaymentForm = () => {
  return (
          <form onSubmit className='paymentform'>
              <h1>Payment</h1>
              <div className='paymentmethod'>
              <Link to={"/payment"}>
                <img width='100px' height='50px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" />
                <img width='100px' height='50px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />
              </Link>
              <Link to={"/paymentmomo"}>
                  <img width='100px' height='50px' src="https://www.ppro.com/wp-content/uploads/2021/06/MoMo_Logo.png" alt="" />
              </Link>
              </div>
              <div style={{'display': 'flex' , 'justifyContent':'space-evenly'}}>
                  <div>
                      <h3>Card number</h3>
                      <input type="text" required maxlength="16"/>
                      <h3>Name in card</h3>
                      <input type="text" required/>
                      <div className='cvv'>
                        <h3>CVV</h3>
                        <input type="text" maxlength="3" pattern="\d*"/>
                        <h3>Expired Date</h3>
                        <input style={{'margin-right':'0px'}} type="month" />
                      </div>
                      <div className='buttonpayment'>
                      <Link to={"/subscription"}>
                        <button>Back</button>
                      </Link>
                      <Link to={"/paymentsuccess"}>
                        <button>Okay</button>
                      </Link>
                      </div>                     
                  </div>
                  {/* <img width='300px' src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.15752-9/308334083_801670980873514_5884733595390738988_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hZnxRJIsxAkAX8fj4wt&_nc_ht=scontent.fsgn2-2.fna&oh=03_AVKDXckEltOZFrtPiNFxjtwPOsTpBZ_DWT3swtI8v6CLog&oe=63659DB6" alt="" />  */}
                </div>    
          </form>
        );
}

export const PaymentMomo = () => {
  return (
          <form onSubmit className='paymentform'>
              <h1>Payment</h1>
              <div className='paymentmethod'>
              <Link to={"/payment"}>
                <img width='100px' height='50px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" />
                <img width='100px' height='50px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />
              </Link>

                <Link to={"/paymentmomo"}>
                    <img width='100px' height='50px' src="https://www.ppro.com/wp-content/uploads/2021/06/MoMo_Logo.png" alt="" />
                </Link>

              </div>

              <div style={{'display': 'flex' , 'justifyContent':'space-evenly'}}>
                  <img width='300px' src="https://static.mservice.io/blogscontents/momo-upload-api-211217174745-637753600658721515.png" alt="" /> 
                </div> 

                <div className='buttonpayment'>
                  <Link to={"/subscription"}>
                    <button>Back</button>
                  </Link>
                </div>      
          </form>
        );
}


export const PaymentSuccess = () => {
  return (
          <form onSubmit className='loginform'>
            <div className='paymentsuccess'>
              <img src="https://cdn-icons-png.flaticon.com/512/2385/2385865.png" alt="" />
              <h2 style={{'text-align': 'center'}}>You are Vip member now</h2>
            </div>

            <div className='buttonlogin'>
              <Link to={"/"}>
                <button>Go homepage</button>
              </Link>
            </div>            
        </form>
        );
}

export default PaymentForm

