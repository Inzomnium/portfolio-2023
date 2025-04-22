import { useState } from "react"
import { Row, Container } from "react-bootstrap"
import { NavBar } from "../components/Navbar"
import { WorkText } from "../components/WorksTexts"
import { WorkCards } from "../components/WorksCards"
import { projects } from "../data/ProjectsData"
import { NavBarWorks } from "../components/NavWorks"
import { Footer } from "../components/footer"
import { motion } from "framer-motion"

export default function MyWork() {

    const [OpenWork, setOpenWork] = useState(false)

    const [CerrarV, setCerrarV] = useState(true)

    function ApertureWork () {
        setOpenWork(true)
    }
    function CerrarWork (){     
        setOpenWork(false)
    }
    function CerrarGrid () {
        setCerrarV(false)
    }
    function AbrirGrid () {
        setCerrarV(true)
    }
      
  

    const [query, setQuery] = useState()
return(
    <main id="mywork">
<Container fluid id="titulo-pagina">
<motion.h1
    animate={{y:0}}
    transition={{delay:0.5,duration:1}}
    initial={{y:-100 }}
    >
       Projects
        </motion.h1>
    <motion.h2
    animate={{x:0}}
    transition={{ duration:1}}
    initial={{x:-500 }}
    >Sebastian Cofre  
     <motion.b
    animate={{opacity:1}}
    transition={{delay:1,duration:1}}
    initial={{opacity:0 }}
    > Portfolio</motion.b>
    </motion.h2>
</Container>
<Container fluid>
<section id="mywork" className="header">

    
    
        <NavBar />
        <NavBarWorks />

    



</section>
<section className="content">
   
    <Row className={ CerrarV ? 'Fila' : 'd-none Fila' }>
    {
                                    projects.map((project, index) => {
                                        return (
                                            <WorkCards 
                                            onQuery={setQuery}
                                            setWin={CerrarGrid}
                                            abrir={ApertureWork}                                           
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })


                                }
       
    </Row>
 
   
</section>

{ OpenWork && <WorkText query={query} cerrar={CerrarWork} abrir={AbrirGrid} />  } 

</Container>
   <Footer />
</main>





)




}