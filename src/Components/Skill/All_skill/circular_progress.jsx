import React from 'react'
import { useEffect } from 'react'
import './circular_progress.css'

const circular_progress = () => {

    useEffect ( () =>
   {
      let progressBar = document.querySelector(".circularProgress");
      let valueContainer = document.querySelector(".value");




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
        <div class="container2" >
            <div class="circularProgress">
                <div class="value"> 0 </div>
            </div>
            <div className="heading">HTML</div>
        </div>

    </>
  )
}

export default circular_progress