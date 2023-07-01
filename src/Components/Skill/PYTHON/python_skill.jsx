import React from 'react'
import { useEffect } from 'react'
import './python_skill.css'
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Python_skill = () => {

    useEffect ( () =>
   {
      let progressBar = document.querySelector(".circularProgress6");
      let valueContainer = document.querySelector(".value6");




      let progresValue = 0;
      let progressEnd = 40;
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
        <div className="container6" data-aos="zoom-in" data-aos-delay="600">
            <div className="circularProgress6">
                <div className="value6"> 0 </div>
            </div>
            <div className="heading6">Python</div>
        </div>

    </>
  )
}

export default Python_skill