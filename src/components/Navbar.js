import { Nav, Container, Navbar,  } from "react-bootstrap"


export const NavBar = () => {

return (

    <Navbar  expand="lg" className="Navprinc">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="botonera">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About me</Nav.Link>
          <Nav.Link href="/mywork">My Work</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)



}