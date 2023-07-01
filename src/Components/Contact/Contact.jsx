import React from 'react'
import './Contact.css'
import TextField from '@mui/material/TextField';
import {FaTelegramPlane  } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Contact = () => {


   





  return (
    <>
        <div className="page_heading_Contact">Contact</div>
        <div className="contact_bg" id="contact">
            <form className="user_input" data-aos="zoom-in-right" data-aos-duration="1000">
                <div className="inputBox">
                    <input type="text" required="required" name="" id="" />
                    <span>Full Name</span>
                </div>

                <div className="inputBox">
                    <input type="email" required name="" id="" />
                    <span>Email</span>
                </div>


                <div className="inputBox">
                    <input type="" required name="" id=""  minlength="10" maxlength="10" pattern="[0-9]{10}" />
                    <span>Mobile No.</span>
                </div>

                <div className="inputBox">
                    <input type="text" required="required" name="" id="" />
                    <span>Email Suject</span>
                </div>

                <div className="inputBox" id="message">
                    <textarea type="" required name=""  />
                    <span>Write your Meassage</span>
                </div>
                
                <button type="submit" className='submit'>  <FaTelegramPlane/> </button>
            </form>

            <div className='email' data-aos="zoom-in-left" data-aos-duration="1000">
                    <form action="mailto:saswata.maitra07@gmail.com" method="GET" >
                            <button type="submit" className='mailicon'>
                                <AiFillMail/>
                                <p className='email_head'>Email</p>
                                <p className='email_head email_id'>saswata07@gmail.com</p>
                                <p className='email_head send_a_message'>send a message</p>
                            </button>
                    </form>
            </div>
        </div>



    </>
  )
}

export default Contact