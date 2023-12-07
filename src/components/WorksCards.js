import { Col, Image } from "react-bootstrap"


export function  WorkCards ({setWin, onQuery, abrir, title, subtitle, description, imgUrl, year, link, type}) {

    function openText() {
        abrir()
        onQuery([year, type, description])
        setWin()
    }
    
    return (
       
        <>

    


    <Col xs={3}>       
    <a  onClick={() => openText()}>
    <Image className="w-100" roundedCircle src={imgUrl} />
    <h4>{title} : {subtitle} </h4>
    </a>
    </Col>
    
     

    </>
        
     
    )

 
   
    
    }

