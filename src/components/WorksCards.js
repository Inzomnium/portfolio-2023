import { Col, Image } from "react-bootstrap"


export function  WorkCards ({setWin, onQuery, abrir, title, subtitle, description, imgUrl, year, link, type}) {

    function openText() {
        abrir()
        onQuery([year, type, description, title, subtitle, imgUrl])
        setWin()
    }
    
    return (
       
        <>

    


    <Col className="card-works" xs={6} md={3}>       
    <button className="btn-crd" onClick={() => openText()}>
    <Image className="w-100" roundedCircle src={imgUrl} />
    <h4> <span>{title}</span> <small>{subtitle}</small> </h4>
    </button>
    </Col>
    
     

    </>
        
     
    )

 
   
    
    }

