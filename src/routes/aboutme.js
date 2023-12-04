import { NavBar } from "../components/Navbar"
import { motion } from "framer-motion"

export default function About () {

return (


<motion.div 
animate={{x:0}}
transition={{duration:1}}
initial={{x: -100 }}
>
    <h1>About me</h1>
    
  
<NavBar />
</motion.div>


)





}