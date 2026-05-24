import { useEffect, useState } from "react";
import img_vid from '../assets/chai.mp4'
import img_vid1 from '../assets/kilimo.mp4'
import img_vid2 from '../assets/blacknew.mp4'
import img_vid3 from '../assets/blackbeauty.mp4'
const Background=()=>{
    const videoBackground=[img_vid, img_vid1, img_vid2, img_vid3]
    const[vid, setVid]=useState(0)
        useEffect(()=>{
        const vidBg =setInterval(()=>{
                setVid(prev=>(
                    prev===videoBackground.length-1?0:prev+1
                ))

            }, 15000)
            return () => clearInterval(vidBg)
        }, [videoBackground.length])
        return(
            <div className="h-[420px] w-full">
 <video key={vid}
            className="w-full h-full object-cover brightness-75 transition-shadow duration-700"
            src={videoBackground[vid]}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            />
            </div>
       
        )
}

export default Background;