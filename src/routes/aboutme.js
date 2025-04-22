import { NavBar } from "../components/Navbar"
import { Col, Container, Row, Image } from "react-bootstrap"
import { motion } from "framer-motion"
import { Footer } from "../components/footer"
import { SkillSet } from "../components/SkillSet"
import portrait from "../images/yoyo.png"
import drawnPortrait from "../images/yooo.png"


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
        <Image className="portraitfoto w-100" src={portrait} />
        <div className="skillset px-md-2 px-0 py-3">
            <h4>Some of my skillset</h4>
            <SkillSet />
           

        </div>
    </Col>
    <Col lg={8} className="px-5 main">
    <h2>Hi! I'm Sebastián Cofré Barrientos</h2>
    
    <p>I am a versatile <b>Product Owner</b> with over a decade of experience bridging the gap between business needs and technical solutions. My career has been driven by a passion for creating impactful, user-centric digital products that blend innovation, functionality, and design.</p>

<h4>Technical Mastery</h4>
<p>From mastering modern technologies like <b>ReactJS</b> to leveraging the enduring efficiency of <b>jQuery</b>, I have honed my skills across a wide array of tools and methodologies. My work reflects the seamless integration of cutting-edge technologies with a deep understanding of agile processes to deliver value at every step.</p>

<h4>Versatility in Action</h4>
<p>Throughout my career, I’ve worn multiple hats—<b>Product Owner, UX Consultant, Team Leader</b>, and more—adapting to the dynamic challenges of the digital landscape. My <b>user-first mindset</b> and <b>problem-solving expertise</b> have allowed me to excel in managing cross-functional teams, refining user journeys, and delivering tailored solutions for both startups and established enterprises.</p>

<h4>Product Management Excellence</h4>
<p>As a <b>Product Owner</b>, I specialize in defining roadmaps, prioritizing backlogs, and translating complex requirements into actionable plans. I take pride in driving collaboration across teams, facilitating agile workflows, and ensuring that products not only meet technical specifications but also resonate with end-users. My leadership style emphasizes clarity, efficiency, and fostering a culture of continuous improvement.</p>

<h4>Client-Centric Collaboration</h4>
<p>More than a product leader, I am a <b>client advocate</b> who believes in clear communication and aligning business goals with user needs. My approach ensures that every stakeholder—whether internal or external—feels heard, valued, and confident in the product's direction.</p>

<h4>What's Next?</h4>
<p>Currently sharpening my expertise in <b>Product Strategy</b> and <b>AI-driven solutions</b>, I am eager to contribute to innovative projects that require a blend of technical insight, strategic vision, and creativity. Whether you're looking to launch a cutting-edge product, optimize existing processes, or build a high-performing team, I am ready to bring my skills and passion to the table.</p>

<Image className="d-block float-start w-25" src={drawnPortrait} />




    </Col>
    </Row>

    
    </Container>
    <Footer />
</section>
</main>
</motion.div>


)





}