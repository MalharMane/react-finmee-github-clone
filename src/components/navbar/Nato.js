import React, { useState } from 'react'

import './Navk.css'


{/* Navbar component */}

const Nato = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    const [color , setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90 ) {
        setColor(true)
    } else {
        setColor(false)

    } 
    }
{/*  added event-listner to change color or to make navbar transperent after scroll down*/}
    window.addEventListener('scroll', changeColor)

    return (
        
        <div className={color ? 'header header-bg  ' :'header' }>
            <nav className='navbar'>
              <div>
                {/*  All Navbar menu*/}

                {/*  i have kept it blanked , we can add anoter pages by React Router Dom */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <div className='nav-item'><a href='/' onClick={closeMenu}>Home</a></div>
                  <div className='nav-item'> <a href='#about' onClick={closeMenu}>Industries</a></div>
                   <div className='nav-item'>  <a href='#testimonials' onClick={closeMenu}>AI Industries</a></div>
                  <div  className='nav-item'> <a href='#demo' onClick={closeMenu}>Blog</a></div>
                  <div  className='nav-item'> <a href='#demo' onClick={closeMenu}>Contact Us</a></div>
                  <div  className='nav-item'> <a href='#demo' onClick={closeMenu}>Sign in</a></div>
                  <div  className='nav-item'> <a href='#demo' onClick={closeMenu}>Sign up</a></div>
               


                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nato;