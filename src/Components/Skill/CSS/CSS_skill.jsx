import React from 'react'
import { useEffect } from 'react'
import './CSS_skill.css'
import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const CSS_skill = () => {
    useEffect ( () =>
   {
      let progressBar = document.querySelector(".circularProgress2");
      let valueContainer = document.querySelector(".value2");




      let progresValue = 0;
      let progressEnd = 85;
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
        <div className="container2 " data-aos="zoom-in" data-aos-delay="300">
            <div className="circularProgress2">
                <div className="value2"> 0 </div>
            </div>
            <div className="heading2">CSS</div>
        </div>

    </>
  )
}

export default CSS_skill