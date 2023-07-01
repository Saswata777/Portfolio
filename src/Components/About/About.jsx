import React from 'react'
import './About.css'
import img2 from './portfolio_image.png'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import 'bootstrap/dist/css/bootstrap.min.css';




const About = () => {
    const [open, setOpen] = useState(false);
    const [buttonState, setButtonState] = useState("See more");

    const handelUpClick= ()=>{
    setOpen(open=== false)
    if(open === true){
        setButtonState("See More")
    }
    if(open === false){
        setButtonState("See Less")
    }
       
    }


  return (
    <>
        <div className="page_heading_About"><div> About</div></div>
        <div className="about_bg" id='about'>
    

                    <div className="image">
                        <img className='about_img' src={img2} alt=""  />
                    </div>
                    <div className="content">
                        <p>
                                Hello, I'm Saswata Maitra, a <u> frontend developer</u> with a passion for creating engaging user experiences. My skill set includes proficiency in <b><u> HTML, CSS, JavaScript, React JS, Bootstrap, Tailwind CSS, and Python</u> </b>. In addition to mastering these technologies, I am actively enhancing my problem-solving skills by solving LeetCode DSA problems.
                                    <br />
                                    <br />
                                    <br />

                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                                    <p className='wrapper'>
                                                    Since my childhood, painting has been a beloved hobby, which has naturally fueled my enthusiasm for UI/UX design. During my learning period, I successfully completed several mini projects, showcasing my creativity and technical prowess. Some notable examples include <b><u> 2D Breakout game, memory game, Rock paper Scissors, whack-a-mole, and Tic Tac Toe </u></b> , all developed using JavaScript. Additionally, I have also undertaken a <b><u> record-keeping project</u></b>  using React JS.
                                                    <br />
                                                    <br />
                                                    <br />
                                            Now, I am eager to challenge myself with more substantial frontend projects that push the boundaries of my abilities. Looking ahead, I plan to explore backend development, as I aspire to become a successful MERN Stack developer in the future.
                                                    <br />
                                                    <br />
                                                    <br />
                                            Currently, I am pursuing a B.Tech degree in the ECE Department at <b>Heritage Institute of Technology, Kolkata </b> . Prior to that, I completed my 12th standard education at <b> Mahesh Sri RamKrishna Ashram Vidyalaya [H.S.] </b> .

                                                    </p>
                                        </div>
                                    </Collapse>
                                    <Button className='button' onClick={handelUpClick} aria-controls="example-collapse-text" aria-expanded={open}> {buttonState} </Button>



                                
                        </p>

                    </div>
        </div>
    </>
  )
}

export default About