import React from 'react'
import {TiTick} from 'react-icons/ti'
import {CgClose} from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Subscription = () => {
  return (
    <div className='subscription'>
        <div  className='standard'>
            <div className='standard_title basic'>Basic</div>
            <div className='standard_price'>9.99$</div>
            <div className='standard_function'>
              <div><TiTick className='tick'/>Watch 100+ movies</div>
              <div><CgClose className='untick'/>4K support</div>
              <div><CgClose className='untick'/>No ads</div>
            </div>   
            <Link to={"/payment"}>
              <div className='standard_button'>
                  Subscribe
              </div>
            </Link>
        </div>

        <div  className='standard mid'>
            <div className='standard_title standardcolor'>Standard</div>
            <div className='standard_price'>19.99$</div>
            <div className='standard_function'>
              <div><TiTick className='tick'/>Watch 200+ movies</div>
              <div><TiTick className='tick'/>4K support</div>
              <div><CgClose className='untick'/>No ads</div>
            </div>

            <div className='hotsale'>
              Hot
            </div>

            <Link to={"/payment"}>
              <div className='standard_button'>
                  Subscribe
              </div>
            </Link>
        </div>

        <div  className='standard'>
            <div className='standard_title premium'>Premium</div>
            <div className='standard_price'>49.99$</div>
            <div className='standard_function'>
            <div><TiTick className='tick'/>Watch all movies</div>
              <div><TiTick className='tick'/>4K support</div>
              <div><TiTick className='tick'/>No ads</div>
            </div>
            <Link to={"/payment"}>
              <div className='standard_button'>
                  Subscribe
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Subscription
