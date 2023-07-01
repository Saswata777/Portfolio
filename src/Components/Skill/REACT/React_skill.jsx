import React from 'react'
import { useEffect } from 'react'
import './React_skill.css'
import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const React_skill = () => {

    useEffect ( () =>
   {
      let progressBar = document.querySelector(".circularProgress4");
      let valueContainer = document.querySelector(".value4");




      let progresValue = 0;
      let progressEnd = 50;
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
                <div className="container4" data-aos="zoom-in" data-aos-delay="100">
                    <div className="circularProgress4">
                        <div className="value4"> 0 </div>
                    </div>
                    <div className="heading4">React-JS</div>
                </div>
            </>
  )
}

export default React_skill