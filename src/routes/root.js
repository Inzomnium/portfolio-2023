import { Container } from 'react-bootstrap';
import '../App.css';

import { NavBar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Titulo } from '../components/Title';
import { motion } from 'framer-motion';

export default function Raiz() {
    return (
        <motion.main animate={{opacity:1} } transition={{duration: 4}} initial={{opacity:0}}>
      <Container fluid>
        <section className='inicio'>
          <Banner />
          <Titulo />
          <NavBar />
        </section>
      </Container>
        </motion.main>
    )
       
  }