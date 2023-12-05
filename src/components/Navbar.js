import { Nav, Container, Navbar,  } from "react-bootstrap"


export const NavBar = () => {

return (

    <Navbar  expand="lg" className="Navprinc bg-body-tertiary">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About me</Nav.Link>
          <Nav.Link href="/mywork">My Work</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)



}