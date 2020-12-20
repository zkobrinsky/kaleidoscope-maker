import React from 'react';
import { Link }  from 'react-router-dom'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'; 


const MyNav = () => {
    return (
        // trying to get bootstrap navbar to work
        <div>
            {/* remove bg primary to set custom bg */}
    <Navbar className="navbar-custom" bg="primary" variant="dark"> 
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/sketches/new" >Create</Nav.Link>
            <Nav.Link as={Link} to="/sketches" >Index</Nav.Link>
            <Nav.Link as={Link} to="/" >Sandbox</Nav.Link>
        </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
  </Navbar>
  </div>





        // <div>
        //     <ul>
        //         <li>
        //             <Link to='/sketches/new'>
        //             Create
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to='/'>
        //             Back to Sandbox
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to='/sketches'>
        //             Index
        //             </Link>
        //             </li>
        //     </ul>
        // </div>
    )
}

export default MyNav