import React from 'react'
import { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

export default function  Navbar(){

    const navRef = useRef()    //navRef variable refer to the nav tags below

    function showNavbar(){
        navRef.current.classList.toggle("responsive_nav")    //Eberytime we fall this function, 
                                                              //we will add or remove this classname from classlistof the nav tag.
    }

  return (
    <header>
         <h3>logo</h3>
         <nav ref={navRef}>                  
            <a href='/#'>Home</a>             
            <a href='/#'>Login</a>
            <a href='/#'>Register</a>
            <a href='/#'>AboutUs</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
         </nav>
         <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
         </button>

    </header>
  )
}
