import { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import { NavBar } from "../components/Navbar"
import { WorkText } from "../components/WorksTexts"
import { WorkCards } from "../components/WorksCards"
import { uXconsult } from "../data/ProjectsData"
import { NavBarWorks } from "../components/NavWorks"


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
<Container fluid>
<section id="mywork" className="header">
<Row>
    <Col  xl={12} className="title">
    <h1> My Work</h1>
    </Col>
    <Col xl={12} className="navsbtns">
        <NavBar />
        <NavBarWorks />

    </Col>


</Row>
</section>
<section className="content">
    <Container>
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
    </Container>
   
</section>

{ OpenWork && <WorkText query={query} cerrar={CerrarWork} abrir={AbrirGrid} />  } 

</Container>





)




}