import React from 'react'
import { useEffect } from 'react';
import './Designing_skill.css'
import 'animate.css';



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Designing_skill = () => {
    useEffect ( () =>
   {
      let progressBar = document.querySelector(".circularProgress5");
      let valueContainer = document.querySelector(".value5");




      let progresValue = 0;
      let progressEnd = 80;
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
        <div className="container5" data-aos="zoom-in" data-aos-delay="300">
            <div className="circularProgress5">
                <div className="value5"> 0 </div>
            </div>
            <div className="heading5">Designing</div>
        </div>
    </>
  )
}

export default Designing_skill