import React from 'react'
import './project.css'
import { useState } from 'react'


import img1 from './project/tic_tac_toe.png'
import img2 from './project/BreakOut.png'
import img3 from './project/Memory_Game.jpg'
import img4 from './project/wach_a_mole.jpg'
import img5 from './project/froggers.png'
import img6 from './project/Record_kepping.png'


import vid1 from './project/tic tac toe video.mp4'
import vid2 from './project/BreakOut_video.mp4'
import vid3 from './project/Memory Game.mp4'
import vid4 from './project/whack-a-mole_video.mp4'
import vid5 from './project/froggers_video.mp4'
import vid6 from './project/Record Kepping App video.mp4'


const Project = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [videoElement, setVideoElement] = useState(null);
  const [ currentVideo, setCurrentVideo ] = useState(vid1);
  const [ currentImage, setCurrentImage ] = useState(img1);
  

  const handleVideoClick = (video, Image) => {
    setCurrentVideo(video);
    setCurrentImage(Image);
    setIsPlaying(true);
  };

  const handleButtonClick = () => {
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  
  const handleVideoRef = (element) => {
    setVideoElement(element);
  };

  











  return (
    <>
        <div className="page_heading_Project"> Project</div>
        <div className="project_bg" id='projects'>
            <div className="display">
                <div className="display_video" data-aos="zoom-in-up" data-aos-duration="1500">
                    <video ref={handleVideoRef} src={currentVideo}  controls  poster={currentImage} className='main_video'>
                          
                    </video>
                </div>
            </div>
            <div className="video_lsit">
                    <div className="video_list_container" data-aos="zoom-in-up" data-aos-duration="1500">
                            <div className='vid ' onClick={() => handleVideoClick(vid1, img1)}> 
                                <div className='vid_1'>
                                    <img src={img1} alt=""  style={{width:'100%', height:'120px', borderRadius:'10px 0px 0px 10px'}}/>
                                </div>
                                <p>Tic Tac Toe</p>
                            </div>

                            <div className='vid ' onClick={() => handleVideoClick(vid2, img2)}> 
                                <div className='vid_2'>
                                  <img src={img2} alt=""  style={{width:'100%', height:'120px'}}/>
                                </div>
                                <p>Break out</p>
                            </div>

                            <div className='vid ' onClick={() => handleVideoClick(vid3, img3)}> 
                                <div className='vid_3'>
                                    <img src={img3} alt=""  style={{width:'100%', height:'120px'}}/>
                                </div>
                                <p>Memory Game</p>
                            </div>

                            <div className='vid ' onClick={() => handleVideoClick(vid4, img4)}>
                                <div className='vid_4'>
                                    <img src={img4} alt=""  style={{width:'100%', height:'120px'}}/>
                                </div>
                                <p>Wach a mole</p>
                            </div>

                            <div className='vid ' onClick={() => handleVideoClick(vid5, img5)}> 
                                <div className='vid_5'>
                                      <img src={img5} alt=""  style={{width:'100%', height:'120px'}}/>
                                </div>
                                <p>Froggers</p>
                            </div>

                            <div className='vid ' onClick={() => handleVideoClick(vid6, img6)}>
                                <div className='vid_6'>
                                <img src={img6} alt=""  style={{width:'100%', height:'120px'}}/>
                                </div>
                                <p>Record keepinng app</p>
                            </div>

                    </div>
            </div>
        </div>
    </>
  )
}

export default Project