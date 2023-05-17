import React from 'react';
import './style.css';
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (

        <div className='footer'>
            <div className="footer-div1">  
                <label>OUR PRIVACY POLICY</label>
                    <p> Copyright© 2010 Indreni Forum 
                        for Social Development</p>
                    <p>All rights reserved</p>
            </div>

            <div className="footer-div2">
                <label>ADDRESS</label>
                    <p>Bardaghat Nagarpalika, 9 Nawalparasi </p>
                    <p>EMAIL</p>
                    <p>indreni@ntc.net.np</p>
            </div>

            <div className="footer-div3" >
            
                <label>ABOUT US</label>
                    <p>Courses</p>
                    <p>Contact: 0977-78-412151, 412151</p>
            </div>


        </div>

  )
}

export default Footer;