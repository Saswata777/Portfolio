import React from 'react'
import './skill.css'
import Html_skill from './HTML/Html_skill'
import CSS_skill from './CSS/CSS_skill'
import JS_skill from './JAVASCRIPT/JS_skill'
import React_skill from './REACT/React_skill'
import Designing_skill from './DESIGNING/Designing_skill'
import Python_skill from './PYTHON/python_skill'

const Skill = () => {

  return (

    <>
        <div className="page_heading_Skill"><div>Skill</div></div>
        <div className='skills' id='skill'>
            <Html_skill />
            <CSS_skill />
            <JS_skill />
            <React_skill />
            <Designing_skill />
            <Python_skill />
            
            
            
            
        </div>
    </>
  )
}

export default Skill