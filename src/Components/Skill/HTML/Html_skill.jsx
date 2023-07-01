import React from 'react'
import { useEffect } from 'react'
import './HTML_skill.css'
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();





const Html_skill = () => {

    useEffect ( () =>
   {
      let progressBar = document.querySelector(".circularProgress1");
      let valueContainer = document.querySelector(".value1");




      let progresValue = 0;
      let progressEnd = 90;
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
        <div className="container1 "  data-aos="zoom-in"  data-aos-delay="100">
            
            <div className="circularProgress1">
                <div className="value1"> 0 </div>
            </div>
            <div className="heading1">HTML</div>
        </div>
    </>
  )
}

export default Html_skill