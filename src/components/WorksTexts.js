import { Button, Col, Row, Image } from "react-bootstrap"

export function WorkText ({cerrar, query, abrir,  imgURl}) {

    console.log(query[0])     

const year = query[0]
const type = query[1]
const description = query[2]
const title = query[3]
const subtitle = query[4]
const imgURL = query[5]
    function clickB() {
        cerrar()
        abrir()
    }


    return (

        <section id="worktexts"> 
           <Row>
            <Col lg={3} className="px-2">
                <Image 
                src={imgURL}
                className="w-100"
                
                />
                </Col>
            <Col className="text" lg={9}>
            <Button className="btn btn-close"
             onClick={() => clickB()} 
             >Close</Button>
            <h2>{title}</h2>
            <h4>{year}</h4>
            <small>{subtitle}</small>
            <span>{type}</span>
            <p>{description}</p>
            
             </Col>

             </Row>
             
             
        </section>
 
    )
    }