import { useState } from "react"
import { Row, Container } from "react-bootstrap"
import { NavBar } from "../components/Navbar"
import { WorkText } from "../components/WorksTexts"
import { WorkCards } from "../components/WorksCards"
import { uXconsult } from "../data/ProjectsData"
import { NavBarWorks } from "../components/NavWorks"
import { Footer } from "../components/footer"


export default function UxConsulting() {

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
    <h1>My Work</h1>
    <h2>Sebastian Cofre Portfolio</h2>
</Container>
<Container fluid>
<section id="mywork" className="header">

    
    
        <NavBar />
        <NavBarWorks />

    



</section>
<section className="content">
   
    <Row className={ CerrarV ? 'Fila' : 'd-none Fila' }>
    {
                                    uXconsult.map((project, index) => {
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