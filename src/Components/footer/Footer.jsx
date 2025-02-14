import React from 'react';
import './footer.css'
import { assets } from '../../assets/assets';
const Footer=()=>{
    return(
        <div className='footer'id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} width="150px" alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis voluptates a voluptatum magnam. Nobis autem doloribus numquam iure quia nemo inventore officia sequi ullam corporis non, esse quas a. Quae, omnis dignissimos nobis, et temporibus autem rem quasi quo expedita, ipsam perferendis suscipit iste dolores ducimus voluptate deleniti ad.</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>

                </div>
            </div>
<hr/>
<p className='footer-copyright'>
    copyright 2024 0 tomato.com -All Right Reserved.
</p>
        </div>
    )
}
export default Footer