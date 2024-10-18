import React from 'react'
import "./Hero.css"
import hand_icon from "../assets/hand_icon.png"
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import hero_image from "../assets/hero_image.png";


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_left">
<h2>NEW ARAIVALS ONLY</h2>
<div>
    <div className="hero_hand_icon">
        <p>new</p>
        <img src={hand_icon} alt="" />
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>
<div className="hero_latest_btn">
    <div>Latest Collection</div>
    <ArrowRightAltIcon/>
</div>
      </div>
      <div className="hero_right">
<img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
