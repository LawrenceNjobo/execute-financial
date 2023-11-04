import React , {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo.png'
import './Navbar.css'


const Navbar = () => {
const [click, setclick]= useState(false)


const handleClick= () => setclick(!click)
const closeMenu=() =>setclick(false)
  return (
    <div className='header' >
      <nav className='navbar' id='navbar'>
        <a href='/' className='logo'>
            <img src={logo} alt='logo'/>
        </a>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color:'#ffffffff'}} />):(<FaBars size={30} style={{color: '#ffffff'}}/>)  }
            
        </div> 
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <a href= '/' onClick={closeMenu}>Home</a>
            </li>
            <li className='nav-item'>
                <a href= '#about' onClick={closeMenu}>About</a>
            </li>
            <li className='nav-item'>
                <a href= '#testimonials' onClick={closeMenu}>Testimonials </a>
            </li>
            <li className='nav-item'>
                <a href= '#demo' onClick={closeMenu}>Demo</a>
            </li>
      
        
                    </ul>
      </nav>  
      
    </div>
  )
}

export default Navbar
