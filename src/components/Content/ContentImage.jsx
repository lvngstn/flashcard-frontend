import React from 'react'
import Image from '../../assets/images/hero.png'
function ContentImage() {
    return (
        <div className="h-64 w-full">
            <img src={Image} alt="hero" className="h-full w-full object-cover" />
        </div>
    );
}

export default ContentImage;