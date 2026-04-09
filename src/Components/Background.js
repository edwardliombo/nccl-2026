import { useEffect, useState } from "react";
import img_vid from '../assets/3616640-hd_1920_1080_24fps.mp4'
import img_vid1 from '../assets/2876087-hd_1920_1080_30fps.mp4'
import img_vid2 from '../assets/3616641-hd_1920_1080_24fps.mp4'
import img_vid3 from '../assets/18999605-uhd_3840_2160_60fps.mp4'
const Background=()=>{
    const videoBackground=[img_vid, img_vid1, img_vid2, img_vid3]
    const[vid, setVid]=useState(0)
        useEffect(()=>{
        const vidBg =setInterval(()=>{
                setVid(prev=>(
                    prev===videoBackground.length-1?0:prev+1
                ))

            }, 15000)
            return ()=>clearInterval(vidBg)
        },[])
        return(
            <div className="h-[580px] w-full">
 <video key={vid}
            className="w-full h-full object-cover brightness-50 transition-shadow duration-700"
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