import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';

import { NavBar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Titulo } from '../components/Title';
import { motion } from 'framer-motion';

export default function Raiz() {
    return (
        <motion.main id={"Home"} animate={{opacity:1} } transition={{duration: 2}} initial={{opacity:0}}>
          
      <Container fluid>
      <section className='hero' id='top'>

          <Banner />
          </section>
          <section>
        <Row className='presentation' id="bottom">
        <Col className='titulo' xl={8}>
        <Titulo />
        </Col>
        <Col xl={4}>
          <NavBar />
        </Col>

        </Row>
          
          
        </section>
      </Container>
     
        </motion.main>
    )
       
  }