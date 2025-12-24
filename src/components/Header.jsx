import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <Navbar expand="lg" variant="dark" bg='dark'>
        <Container>
          <h3><Link to="/" style={{color:"white", textDecoration:"none"}}>p<span style={{ textTransform: 'lowercase' }}>i</span>x&#8455;l<sup>&#174;</sup></Link></h3>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/user">
                <Nav.Link ><i className="fa-solid fa-user"></i></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
