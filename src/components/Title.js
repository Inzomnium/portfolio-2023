import { motion } from "framer-motion"


export const Titulo = () => {
  
    return (
<motion.div className="titulo" animate={{x: 0, opacity: 1}} transition={{duration:1.5}} initial={{x:-500, opacity: 0}}>
    <h1>Sebastián Cofré</h1>
    <h2>Portfolio</h2>
    <h3>Product Owner | Digital Transformation Expert | UX/UI Strategist</h3>
</motion.div>

   )

}