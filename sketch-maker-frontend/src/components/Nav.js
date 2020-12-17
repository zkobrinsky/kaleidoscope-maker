import React from 'react';
import {Link}  from 'react-router-dom'
// import {Navbar, Form, Button, FormControl} from 'react-bootstrap';   


const Nav = () => {
    return (
        // trying to get bootstrap navbar to work
//     <Navbar bg="primary" variant="dark">
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="mr-auto">
//         <Nav.Link as={Link} to="/" >Home</Nav.Link>
//         </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-light">Search</Button>
//     </Form>
//   </Navbar>





        <div>
            <ul>
                <li>
                    <Link to='/sketches/new'>
                    Create
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                    Back to Sandbox
                    </Link>
                </li>
                <li>
                    <Link to='/sketches'>
                    Index
                    </Link>
                    </li>
            </ul>
        </div>
    )
}

export default Nav