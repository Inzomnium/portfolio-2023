
import { motion } from "framer-motion";

import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video5 from "../videos/video5.mp4";
import video6 from "../videos/video6.mp4";






const videos = [video1,video2, video3, video4, video5, video6];

const randomNumber = Math.floor(Math.random() * videos.length);

export const Banner = () => {




console.log(videos[randomNumber])


return(
<motion.div id="banner" className="banner my-3 w-100" 
>

    <div className="b-wrapper w-100">
        <motion.div className="barras-efecto" animate={{'transform': 'rotateX(0deg)' }} transition={{duration:4}} initial={{'transform': 'rotateX(90deg)'}}>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra d-none d-xl-block d-md-block "></div>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra"></div>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra"></div>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra"></div>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra"></div>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra"></div>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra"></div>
            <div className="barra d-none d-xl-block d-md-block"></div>
            <div className="barra d-none d-xl-block d-md-block"></div>

        </motion.div>
    
       <motion.video
        className="video"
        src={videos[randomNumber]} 
        type="video/mp4"  
        autoPlay={true} 
        muted loop controls=""
        animate={{opacity:1}}
        transition={{duration:3}}
        initial={{opacity:0 }}
        >
       
       </motion.video>

     

         
    </div>
</motion.div>
)



}