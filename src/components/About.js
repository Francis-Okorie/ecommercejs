import aboutImg from '../img/png/about-img.png';
import '../Css/About.css'
import React from 'react'
import { gsap, ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

function About() {
    const aboutTl = gsap.timeline();
    aboutTl
    .from('.about__content', {
        opacity: 0,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
            trigger: '.about img',
            start: 'top-=50% top',
            end: 'center center',
            scrub: true
        }
    })

  return (
    <div>
        <section id="about" class="about">
            <div className='about-img'>
            <img src={aboutImg} alt="about image" class="about__img"/>
            </div>
            <div class="about__content">
                <h2 class="heading-2">about us</h2>
                <h3 class="heading-3">Our team of registered nurses and skilled healthcare professionals provide in-home nursing.</h3>
                <p class="paragraph">Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digital divide with additional click-throughs from DevOps immersion along. additional clickthroughsdivide with additional clickthroughs from DevOps. Nanotechnology immersion along from DevOps.</p>
            </div>
        </section>
    </div>
  )
}

export default About