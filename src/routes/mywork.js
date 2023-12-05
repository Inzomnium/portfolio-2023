import { Row, Col, Container, Image } from "react-bootstrap"
import { NavBar } from "../components/Navbar"
import { WorkCards } from "../components/WorksCards"
import { projects } from "../data/ProjectsData"


export default function MyWork() {


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
    <Row className="px-5">
    {
                                    projects.map((project, index) => {
                                        return (
                                            <WorkCards 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
       
    </Row>
    </Container>
</section>

</Container>





)




}