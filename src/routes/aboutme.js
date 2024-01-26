import { NavBar } from "../components/Navbar"
import { Col, Container, Row, Image } from "react-bootstrap"
import { motion } from "framer-motion"
import { Footer } from "../components/footer"
import { SkillSet } from "../components/SkillSet"

export default function About () {

return (


<motion.div 
animate={{opacity:1}}
transition={{duration:1}}
initial={{opacity:0 }}
>
<main>
    <Container fluid id="titulo-pagina">
    <motion.h1
    animate={{y:0}}
    transition={{delay:0.5,duration:1}}
    initial={{y:-100 }}
    >
        About me
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
<section id="about-main">
    <Container fluid>
    <Row>
    <Col lg={4} className="sidebar">
        <Image className="w-100" src="https://placehold.co/500x500" />
        <div className="skillset px-md-2 px-0 py-3">
            <h4>Some of my skillset</h4>
            <SkillSet />
           

        </div>
    </Col>
    <Col lg={8} className="px-5 main">
    <h2>Hi! I'm Sebastián Cofré Barrientos</h2>
    
    <p>I am a seasoned <b>web developer</b> and <b>project manager</b> with over a decade of experience in steering the digital realm. My journey has been marked by a passion for crafting seamless online experiences, combining technical expertise with creative flair.</p>
    <h4>Technical Mastery:</h4>
<p>As a web enthusiast, I've mastered a spectrum of technologies, from the latest in <b>ReactJS</b> to the enduring efficiency of <b>jQuery</b>. My work is a testament to the seamless integration of cutting-edge solutions and proven methodologies.</p>
 <h4>Versatility Unleashed:</h4>
<p>My career spans across dynamic roles, from managing projects and leading development teams to providing insightful <b>consultancy on UX</b> and web design. Versatility isn't just a skill; it's a mindset that allows me to adapt and excel in diverse projects. Being a <b>quick learner</b> and adaptable to any system or CMS is not just a skill for me; it's a mindset that allows me to adapt and excel in diverse projects.</p>
<h4>Project Management Prowess:</h4>
<p>While my formal title might not scream "Project Manager," my experience <b>managing projects</b> and <b>teams speaks volumes</b>. I thrive in orchestrating projects, ensuring every element aligns with the vision, deadlines are met, and the end product exceeds expectations.</p>
<h4>Client Collaboration:</h4>
<p>I'm not just a developer; I'm a client's advocate. My knack for understanding client expectations, coupled with <b>clear communication</b> and a <b>user-centric approach</b>, fosters enduring relationships. In the collaborative dance of tech and creativity, I ensure every step is in tune with the client's vision.</p>
<h4>What's Next?</h4>
<p>Currently honing my skills in <b>ReactJS</b>, I'm on a perpetual quest for excellence. Whether you need a robust web solution, a project brought to life, or a reliable team leader, I bring dedication, technical prowess, and a touch of creativity to every endeavor.</p>
<p>Join me in navigating the ever-evolving landscape of digital innovation.</p>


<Image className="d-flex m-auto" src="https://placekitten.com/300/300" />

    </Col>
    </Row>

    
    </Container>
    <Footer />
</section>
</main>
</motion.div>


)





}