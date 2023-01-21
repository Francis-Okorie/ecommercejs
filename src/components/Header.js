import '../Css/Header.css'
import sprite from '../img/sprite.svg';
import burger from '../img/png/burger-img.png';
import sauce from '../img/png/sauce.png';
import brandlogo from '../img/SVG/brand-logo.svg';
import React from 'react';
import { gsap, ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger); 

function Header() {
    const headerTl = gsap.timeline();
    headerTl
        .from('.nav__list', {
            opacity: 0,
            yPercent: 50,
            stagger: 0.2
        })
        .from('.brand__logo', {
            opacity: 0,
            xPercent: -30
        })
        .from('.burger', {
            opacity: 0,
            ease: 'power2.inOut',
        })
        .from(['.hero-text, .sauce, .discount, header button, .copy'], {
            yPercent: 50,
            opacity: 0,
            onComplete: () => {
                document.querySelector('.burger').classList.add('jump')
            }
        }) 

  return (
    <>
    <div className='header-main-container'>
    <div class="hamburger">menu</div>
        <header id="home">
            <div class="header">
                <nav class="nav">
                    <li class="nav__list"><a href="#home" class="nav__link">Home</a></li>
                    <li class="nav__list"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__list"><a href="#dishes" class="nav__link">Dishes</a></li>
                    <img src={brandlogo}/>
                    <li class="nav__list"><a href="#dinning" class="nav__link">Dinning</a></li>
                    <li class="nav__list"><a href="#chefs" class="nav__link">Our Chefs</a></li>
                    <li class="nav__list"><a href="#contact" class="nav__link">Contact</a></li>
                </nav>
                <div className='header-content'>
                <div class="hero-text">
                    <span>deal of the week</span> 
                    <h1>Maharaja<br/>Mac</h1>
                </div>
                   <div class="burger"> <img src={burger} alt="burger" class="burger__img"/> </div>
                   <div className='sauce'>
                   <img src={sauce} alt="tomatoe sauce" class="sauce-img"/>
                   </div>
                </div>
                <div className='red-bg-content'>
                <div>
                <h1 class="discount">50%<span className='discount-span'>discount</span></h1>
                <button class="cta">book a table</button>
                </div>
                <div class="copy"> <p>Breakfast that’s<br/>freshly prepared.</p> <h4>Even if you’re not.</h4> </div>
                </div>
            </div>
        </header>
    </div>
    </>
  )
}

export default Header

