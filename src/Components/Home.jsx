import React from 'react'
import './home.css'
import img1 from './portfolio_image.png' 
import { useEffect, useState } from 'react'
import 'animate.css';



const Home = () => {
    const [slideImagesClass, setSlideImagesClass] = useState("slideImage");
    const[slideText, setSideText] = useState("infoText");
    const [btnText, setBtnText] = useState("See more");
    const [animation, setAnimation] = useState({
        slideText : 'infoText',
        slideImagesClass : 'slideImage',
        btnText : 'See more',
    });

    
    const slindingImage = ()=>{
        if (slideText === 'infoText') {
            
            setSideText("infoText slide-left");
            setSlideImagesClass('slideImage slide-right');
            setBtnText("See less");
            
        }
        

        if (slideText === 'infoText slide-left') {
            
            setSideText("infoText slide-left slide-right-info");
            setSlideImagesClass('slideImage slide-right slide-left-img');
            
            setBtnText("See More");
            
        }
        
        if (slideText === 'infoText slide-left slide-right-info') {
            setSideText("infoText");
            setSlideImagesClass('slideImage');
            setBtnText("See More");
            // alert("Click again");
        }





        // if (slideText === 'infoText slide-left') {
        //     setSideText("infoText slide-left slide-right-info");
        //     setSlideImagesClass('slideImage slide-right slide-left-img');
        //     // setSideText("infoText");
            
        // }
    }
    

    
  return (
    <>
        <div className="background" id='home'>
            
            <div className="container">
                <img className={slideImagesClass} src={img1} alt="Sliding Image"  />
                <div className={slideText}>
                    <div className="text">
                        <div className='first_line'>Hi, I am</div>
                        <div className='second_line'>Saswata</div>
                        <div className='third_line'>And I am a <div className='frontend'> Frontend Developer</div> </div>
                        <div className='fourth_line'>I am currently focused on frontend development, but I am also determined to acquire backend skills and explore its opportunities in the future. </div>
                    </div>
                </div>
            </div>
            <button className="slideButton  animate__animated animate__fadeInLeft"  onClick={slindingImage}  > {btnText} </button>
        </div>
    </>
  )
}

export default Home