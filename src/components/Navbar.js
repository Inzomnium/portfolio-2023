import { Nav, Container, Navbar,  } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import * as Unicons from '@iconscout/react-unicons';

export const NavBar = () => {

return (

    <Navbar  expand="lg" id="main-nav" className="Navprinc">
    <Container fluid id="navbar-main">
      <Navbar.Toggle aria-controls="basic-navbar-nav"><Unicons.UilBars /></Navbar.Toggle>
      <Navbar.Collapse id="botonera">
        <Nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About me</NavLink>
          <NavLink className="nav-link" to="/mywork">Projects</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)



}