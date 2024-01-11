import { Button, Col, Row, Image } from "react-bootstrap"
import { motion } from "framer-motion";
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

        <motion.section
         id="worktexts"
         animate={{ opacity:1}}
         transition={{duration:0.5}}
         initial={{ opacity:0 }}
         
         > 
           <Row>
            <motion.div
             className="px-2 sideb col-lg-3"
             animate={{x:0, opacity:1}}
            transition={{duration:0.9}}
            initial={{x: -100, opacity:0 }}
             >
                <img 
                src={imgURL}
                className="w-100"
                
                />
                </motion.div>
            <Col className="text" lg={9}>
            <Button className="btn btn-close"
             onClick={() => clickB()} 
             >Close</Button>
            <motion.h2

            animate={{y:0, opacity:1}}
            transition={{duration:1}}
            initial={{y: 50, opacity:0 }}

            >{subtitle}</motion.h2>
            <small>{title}</small>
            <h4>{year}</h4>
            
           
            <motion.p
            animate={{y:0, opacity:1}}
            transition={{duration:1.2}}
            initial={{y: -100, opacity:0 }}
            >{description}</motion.p>
            
             </Col>

             </Row>
             
             
        </motion.section>
 
    )
    }