import { Col, Image } from "react-bootstrap"
import { motion } from "framer-motion"

export function  WorkCards ({setWin, onQuery, abrir, title, subtitle, description, imgUrl, year, link, type}) {

    function openText() {
        abrir()
        onQuery([year, type, description, title, subtitle, imgUrl])
        setWin()
    }
    
    return (
       
        <>

    


    <Col className="card-works" xs={6} md={3}>       
    <motion.button 
    className="btn-crd" 
    onClick={() => openText()}
    animate={{ opacity:1}}
    transition={{duration:0.8}}
    initial={{ opacity:0 }}
    >
    <motion.img 
    className="w-100 rounded-circle" 
    src={imgUrl} 
    animate={{ opacity:1}}
    transition={{duration:2}}
    initial={{ opacity:0 }}
    />
    <h4> <span>{subtitle}</span> <small>{title}</small> </h4>
    </motion.button>
    </Col>
    
     

    </>
        
     
    )

 
   
    
    }

