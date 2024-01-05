import React, { useState } from "react";
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

    
<Container fluid>

  <h1>Contact</h1>
  <NavBar />
  <section id="contact" >
<Row className="m-auto w-50">
    <motion.div 
    className="col-lg-6 formulario"
    animate={{x:0}}
    transition={{duration:1}}
    initial={{x: -100 }}  
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
    <Col lg={6} className="grid">
      <div className="cont-items">
        <div className="columna col1">
        <div className="tit uno"><Unicons.UilEnvelope /></div> 
        <div className="tit tres"><Unicons.UilWhatsapp /></div>
        <div className="tit cinc"><Unicons.UilLocationPoint /></div>
        <div className="tit siet"><Unicons.UilLinkedin /></div>
        </div>
        <div className="columna col2">
         <div className="tex dos"><a href="mailto:sebacofrebarrientos@gmail.com">sebacofrebarrientos@gmail.com</a></div>
       <div className="tex cuatr">+34 1234 123</div>
        <div className="tex sei">Malaga, Andalucia, Spain</div>
        <div className="tex ocho">sebacofrebarrientos@gmail.com</div>
        </div>
      </div>

    </Col>
  </Row>
  
  </section>

    </Container>



  );
};

export default ContactForm;