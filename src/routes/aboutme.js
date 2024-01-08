import { NavBar } from "../components/Navbar"
import { Col, Container, Row, Image } from "react-bootstrap"
import { motion } from "framer-motion"
import { Footer } from "../components/footer"

export default function About () {

return (


<motion.div 
animate={{opacity:1}}
transition={{duration:1}}
initial={{opacity:0 }}
>
<main>
    <h1 className="titulo-page">About me</h1>
    
  
<NavBar />
<section id="about-main">
    <Container fluid>
    <Row>
    <Col lg={4}>
        <Image src="https://placehold.co/500x500" />
    </Col>
    <Col lg={8} className="px-5">
    <h2>Hello, I am Sebastian</h2>
    <small className="small">Fermentum iaculis eu non diam phasellus vestibulum lorem sed.</small>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna. Diam donec adipiscing tristique risus nec. Nec nam aliquam sem et tortor consequat id porta. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Tristique senectus et netus et malesuada fames. In iaculis nunc sed augue lacus. At auctor urna nunc id cursus metus aliquam eleifend. Diam quis enim lobortis scelerisque fermentum. Quisque egestas diam in arcu cursus.</p>
    <h3>List of Skills and habilities</h3>
<p>Vitae auctor eu augue ut lectus arcu bibendum at varius. Vitae nunc sed velit dignissim sodales ut. Id ornare arcu odio ut sem nulla pharetra diam. Ipsum nunc aliquet bibendum enim. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Id consectetur purus ut faucibus pulvinar elementum integer enim. Porttitor rhoncus dolor purus non enim praesent elementum. Maecenas ultricies mi eget mauris pharetra et. Vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam malesuada bibendum arcu vitae. Posuere ac ut consequat semper viverra nam. A diam sollicitudin tempor id eu. Donec enim diam vulputate ut pharetra sit amet. Sed libero enim sed faucibus turpis in eu mi bibendum. Sed adipiscing diam donec adipiscing tristique risus. Posuere sollicitudin aliquam ultrices sagittis. Id donec ultrices tincidunt arcu. Mollis nunc sed id semper risus in hendrerit. Id cursus metus aliquam eleifend mi in nulla. Pellentesque adipiscing commodo elit at.</p>
<p>Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Integer eget aliquet nibh praesent tristique. Porttitor leo a diam sollicitudin tempor. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Massa id neque aliquam vestibulum morbi. Integer enim neque volutpat ac tincidunt vitae semper quis. Quisque non tellus orci ac auctor. Facilisi etiam dignissim diam quis. Hendrerit dolor magna eget est lorem ipsum dolor. Turpis tincidunt id aliquet risus. At in tellus integer feugiat scelerisque varius morbi. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Neque egestas congue quisque egestas diam in arcu cursus. Ante metus dictum at tempor commodo.</p>
<Image className="d-flex m-auto" src="https://placekitten.com/300/300" />

    </Col>
    </Row>

    <Footer />
    </Container>

</section>
</main>
</motion.div>


)





}