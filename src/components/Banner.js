import { Image } from "react-bootstrap"

import { motion } from "framer-motion"

export const Banner = () => {

    //const hiddenMask = `repeating-linear-gradient( 45deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 35px, rgba(0,0,0,1) 35px, rgba(0,0,0,1) 30px)`;
   // const visibleMask = `repeating-linear-gradient( 45deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

return(
<motion.div id="banner" className="banner my-3 w-100" 
//animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }} 
//initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
//transition={{duration:2}} 
>

    <div className="b-wrapper w-100">
        <motion.div className="barras-efecto" animate={{'transform': 'rotateX(0deg)' }} transition={{duration:4}} initial={{'transform': 'rotateX(90deg)'}}>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>

        </motion.div>
    
        <Image className="w-100 banner-img" alt="caca" src="https://placehold.co/1400x350"
         />
    </div>
</motion.div>
)



}