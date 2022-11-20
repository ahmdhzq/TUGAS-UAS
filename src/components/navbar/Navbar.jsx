import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../../assets/logo.png";
import './navbar.css'

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <section id='navbar'>
            <header>
                <div className='bag-1'>
                    <img src={logo} className='logo'></img>
                    <h3>Half Games</h3>
                </div>
                <nav ref={navRef}>
                    <a href='/#'>Home</a>
                    <a href='/#categories'>Categories</a>
                    <a href='/#content'>Most Popular</a>
                    <a href='/#content2'>New Arival</a>
                    <a href='/#about'>About</a>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </section>
    );
}

export default Navbar;
