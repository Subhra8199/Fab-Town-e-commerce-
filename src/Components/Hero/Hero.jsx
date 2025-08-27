import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import "./Hero.css"

// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {

    const titleRef = useRef(null)
    const lineRef = useRef([])

    useEffect(()=>{
        gsap.from(titleRef.current,{
            x:-100,
            opacity:0,
            duration:1,
            ease:"power3.out",
        })

        gsap.from(lineRef.current,{
            y:40,
            opacity:0,
            duration:1,
            stagger:0.3,
            ease:"power3.out",
            delay:0.3,
        })
    },[])
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2 ref={titleRef} className="hero-title">New Arrivals Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p ref={(el)=>(lineRef.current[0] = el)}>NEW</p>
                        {/* <img src={hand_icon} alt="hand icon" /> */}
                    </div>
                    <p ref={(el)=>(lineRef.current[1] = el)} >COLLECTION</p>
                    <p ref={(el)=>(lineRef.current[2] = el)} >FOR EVERYONE</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow icon" />
                </div>
            </div>

            <div className="hero-right">
                <img src={hero_image} alt="hero image" />
            </div>
        </div>
    )
}

export default Hero
