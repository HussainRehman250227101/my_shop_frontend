import React from 'react'
import { Container,Row,Col,Navbar,Nav, } from 'react-bootstrap'
function Header() {
  return (
    <header>
         <Navbar expand="lg" variant="dark" bg='dark'>
      <Container>
        <Navbar.Brand href="/">p<span style ={{textTransform:'lowercase'}}>i</span>x&#8455;l<sup>&#174;</sup></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
            <Nav.Link href="/user"><i className="fa-solid fa-user"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
