import { Button, Col, Row, Image } from "react-bootstrap"
import { motion } from "framer-motion";
import * as Unicons from '@iconscout/react-unicons';




export function WorkText ({cerrar, query, abrir}) {

        

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
                className="img-wrk"
                
                />
                </motion.div>
            <Col className="text" lg={9}>
            
            <motion.h2

            animate={{y:0, opacity:1}}
            transition={{duration:1}}
            initial={{y: 50, opacity:0 }}

            >{subtitle}</motion.h2>
            <small>{title} - {year}</small>
            
            
           <div className="texto">
            {description.map((descriptions, index) => (
                <motion.p
                animate={{y:0, opacity:1}}
                transition={{duration:1.2}}
                initial={{y: -100, opacity:0 }}   
                key={index} 
                dangerouslySetInnerHTML={{__html: descriptions}}        
                ></motion.p>
              
              
                ))
            
            
            }
            </div>
            <Button className="btn btn-back"
             onClick={() => clickB()} 
             ><Unicons.UilArrowCircleLeft /> Back</Button>
            
            
             </Col>

             </Row>
             
             
        </motion.section>
 
    )
    
    }