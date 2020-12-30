import React from 'react';
import { Link }  from 'react-router-dom'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'; 


const MyNav = () => {
    return (
        <div>
            {/* remove bg primary to set custom bg */}
    <Navbar className="navbar-custom" bg="primary" variant="dark"> 
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/sketches/new" >Create</Nav.Link>
            <Nav.Link as={Link} to="/sketches" >Gallery</Nav.Link>
            <Nav.Link as={Link} to="/" >Sandbox</Nav.Link>
        </Nav>
  </Navbar>
  </div>
    )
}

export default MyNav