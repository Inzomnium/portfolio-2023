import { motion } from "framer-motion"


export const Titulo = () => {
  
    return (
<motion.div className="titulo" animate={{x: 0, opacity: 1}} transition={{duration:1.5}} initial={{x:-500, opacity: 0}}>
    <h1>Sebastian Cofre</h1>
    <h2>Portfolio</h2>
    <h3>Web Designer / UX Designer / Developer</h3>
</motion.div>

   )

}