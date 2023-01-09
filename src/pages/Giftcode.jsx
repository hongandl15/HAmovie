import Similar from '../components/Similar'
import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
const Giftcode = () => {
    return (
      <Helmet title="Giftcode">
        <section class="background">
            <form onSubmit className='giftcodeform'>
              <h1>Enter Giftcode</h1>
              <input type="text" placeholder='Ex: M6A7Y'/>
              <div className='buttoncode'>
              < Link to={"/success"}>
                  <button>Okay</button>
                </Link>
                <Link to={"/"}>
                  <button>Back</button>
                </Link>
              </div> 
          </form>
            <Similar type = 'Popular'/>
        </section>
        </Helmet>
    )
}

export default Giftcode