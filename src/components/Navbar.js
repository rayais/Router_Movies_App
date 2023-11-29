import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddMovie from './AddMovie';


function Nave(props) {

  return (
    <div>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Movoies Time</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Movies list</Nav.Link>
            <Nav.Link href='/NameFilter'>Filter by name</Nav.Link>
            <Nav.Link href="/Rankrank">Filter by rank</Nav.Link>
            
            
            <AddMovie props={props}/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nave