import React from 'react'
import { Container,Row,Col,Navbar,Nav, } from 'react-bootstrap'
function Header() {
  return (
    <header>
         <Navbar expand="lg" variant="dark" bg='dark'>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            <Nav.Link href="#link"><i class="fa-solid fa-user"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
