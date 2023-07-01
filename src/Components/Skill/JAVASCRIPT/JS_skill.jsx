import React from 'react'
import { useEffect } from 'react'
import './JS_skill.css'
import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const JS_skill = () => {

    useEffect ( () =>
   {
      let progressBar = document.querySelector(".circularProgress3");
      let valueContainer = document.querySelector(".value3");




      let progresValue = 0;
      let progressEnd = 75;
      let speed = 50;


      let progress = setInterval(()=>{
         progresValue++;
         valueContainer.textContent=`${progresValue}%`;

         progressBar.style.background = `conic-gradient(
            #1271ed  ${progresValue * 3.6}deg, 
            #d0e3fb ${progresValue*3.6}deg)`;
         
                  if(progresValue == progressEnd){
                     clearInterval(progress);
                  }
      }, speed)
   })



  return (
    <>
            <div className="container3" data-aos="zoom-in" data-aos-delay="600">
                <div className="circularProgress3">
                    <div className="value3"> 0 </div>
                </div>
                <div className="heading3">JavaScript</div>
            </div>
    </>
  )
}

export default JS_skill