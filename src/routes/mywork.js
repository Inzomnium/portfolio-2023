import { useState } from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import { NavBar } from "../components/Navbar"
import { WorkText } from "../components/WorksTexts"
import { WorkCards } from "../components/WorksCards"
import { projects } from "../data/ProjectsData"


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
<Container fluid>
<section className="header">
<Row>
    <Col  xl={12} className="title">
    <h1> My Work</h1>
    </Col>
    <Col xl={12} className="navsbtns">
        <NavBar />
    <ul>
        <li><a href="#">Web Dev/Design</a></li>
        <li><a href="#">Client/Project Management</a></li>
        <li><a href="#">UX Study cases</a></li>
    </ul>

    </Col>


</Row>
</section>
<section className="content">
    <Container>
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
    </Container>
   
</section>

{ OpenWork && <WorkText query={query} cerrar={CerrarWork} abrir={AbrirGrid} />  } 

</Container>





)




}