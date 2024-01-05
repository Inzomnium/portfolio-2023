import { Nav, Container, Navbar,  } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const NavBar = () => {

return (

    <Navbar  expand="lg" className="Navprinc">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="botonera">
        <Nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About me</NavLink>
          <NavLink className="nav-link" to="/mywork">My Work</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)



}