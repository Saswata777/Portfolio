import React from 'react'
import './Navbar.css' 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {FaAlignJustify} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import 'animate.css';
import img2 from './portfolio_image.png'
import { useState } from 'react';




import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function tollgeing()
{
    const button =  document.querySelector('.menuItems');
    button.classList.toggle('active');
}


const Navbar = () => {

    const [activeItem, setActiveItem] = useState('Home');

    const handleClick = (item) => {
        setActiveItem(item);
        const menu =  document.querySelector('.menuItems');
        menu.classList.toggle('active');
    
    };




  return (
    <div>

        <div className = 'navbar' >
            <div className='logo'><Link to='home' smooth={true} duration={1000}>  <img  src={img2} style={{ margin:  '5px 30px ', width: '50px', height:'50px', borderRadius:'40%' }} /> </Link>    </div>
            <div className='menuItems'>
                <div className='home animate__animated animate__fadeInLeft'> <Link to='home' smooth={true} duration={1000}   className= {activeItem === 'Home' ? 'active' : ''} onClick={() => handleClick('Home') }>Home</Link></div>
                <div className='about animate__animated animate__fadeInLeft'> <Link to='about' smooth={true} duration={1000}   className= {activeItem === 'About' ? 'active' : ''} onClick={() => handleClick('About')}>About</Link></div>
                <div className='skill animate__animated animate__fadeInLeft'><Link to='skill' smooth={true} duration={1000}   className= {activeItem === 'Skill'  ? 'active' : ''} onClick={() => handleClick('Skill')} >Skills</Link></div>
                <div className='skill animate__animated animate__fadeInLeft'><Link to='projects' smooth={true} duration={1000}   className= {activeItem === 'Project' ? 'active' : ''} onClick={() => handleClick('Project')} >Projects</Link></div>
                <div className='contact animate__animated animate__fadeInLeft'><Link to='contact' smooth={true} duration={1500}   className= {activeItem === 'Contact' ? 'active' : ''} onClick={() => handleClick('Contact')}  >Contact </Link></div>
            </div>
            <div className="toggle">
                <FaAlignJustify className='burger' onClick={tollgeing}/>
                    <div className='git_link_insta' data-aos="zoom-in" data-aos-duration="1000">
                        
                        <a href="https://github.com/Saswata777"> <FaGithub className= "git" /></a>
                        <a href="https://www.linkedin.com/in/saswata-maitra-2091451b9/"> <FaLinkedin  className= "link"/></a>
                        <a href="https://instagram.com/saswata_mac?igshid=MzNlNGNkZWQ4Mg=="> <FaInstagram  className= "insta"/></a>
                    </div>    

            </div>
        </div>
    </div>
  )
}

export default Navbar
