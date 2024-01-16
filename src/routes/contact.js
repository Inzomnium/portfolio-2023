import React, { useState } from "react";
import { Footer } from "../components/footer";
import { Mailto } from "../components/MailTo";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { NavBar } from "../components/Navbar";
import * as Unicons from '@iconscout/react-unicons';



const FORM_ENDPOINT = "https://public.herotofu.com/v1/2c0d6780-95d6-11ee-bbf6-afd56d9a4ea5";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (

    <section id="contact" > 


<Container fluid id="titulo-pagina">
<motion.h1
    animate={{y:0}}
    transition={{delay:0.5,duration:1}}
    initial={{y:-100 }}
    >
        Contact
        </motion.h1>
    <motion.h2
    animate={{x:0}}
    transition={{ duration:1}}
    initial={{x:-500 }}
    >Sebastian Cofre  
     <motion.b
    animate={{opacity:1}}
    transition={{delay:1,duration:1}}
    initial={{opacity:0 }}
    > Portfolio</motion.b>
    </motion.h2>
</Container>
  <NavBar />


<Container>
<Row className="m-md-auto m-sm-0 w-sm-100 w-md-50 px-md-5 px-sm-0">
    <motion.div 
    className="mb-3 col-md-12 col-lg-6 formulario"
    animate={{x:0, opacity:1}}
    transition={{duration:1}}
    initial={{x: -100, opacity:0 }}  
    >
      <h2>Hey, let's get in touch</h2>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="name">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className=""
          required
        />
      </div>
      <div className="email">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=""
          required
        />
      </div>
      <div className="mensaje">
        <textarea
          placeholder="Your message"
          name="message"
          className=""
          required
        />
      </div>
      <div className="enviar">
        <button
          className="btn-enviar btn"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </motion.div>
    <Col xs={12} sm={6} className="px-md-0 px-sm-3 grid">
      <motion.div 
      className="cont-items"
      animate={{y:0, opacity:1}}
      transition={{duration:1}}
      initial={{y: -100, opacity:0 }} 
      >
        <div className="columna col1">
        <div className="tit uno"><Unicons.UilEnvelope /></div> 
        <div className="tit tres"><Unicons.UilWhatsapp /></div>
        <div className="tit cinc"><Unicons.UilLocationPoint /></div>
        <div className="tit siet"><Unicons.UilLinkedin /></div>
        </div>
        <div className="columna col2">
         <div className="tex dos"><Mailto email="mailto:sebacofrebarrientos@gmail.com" subject="Hey, send me an e-mail" body='thanks for getting in contact'>sebacofrebarrientos@gmail.com</Mailto></div>
       <div className="tex cuatr"><a href="https://wa.me/34692937092" rel="noreferrer" target="_blank">Message me through Whatsapp</a></div>
        <div className="tex sei">Malaga, Andalucia, Spain</div>
        <div className="tex ocho"><a href="https://www.linkedin.com/in/sebacofrebarrientos/">View my Linkedin profile</a></div>
        </div>
      </motion.div>

    </Col>
  </Row>
  


    </Container>
    <Footer />
    </section>




  );
};

export default ContactForm;