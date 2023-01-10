import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Salom(expand) {
    return (
        <div style={{ backgroundColor: "white", }}>
            <Navbar style={{ backgroundColor: "white" }} key={expand} bg="light" expand={expand} className="mb-3">
                <Container fluid>
                    <Navbar.Brand style={{ marginLeft: '20px',fontSize:"30px" }} href="#">Kitoblar</Navbar.Brand>
                    <Navbar.Toggle style={{ marginRight: "20px" }} aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end">
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/bir">About</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                    <NavDropdown.Item href="/uch">Sign_In</NavDropdown.Item>
                                    <NavDropdown.Item href="/tort">
                                        Addres
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/besh">
                                        Service
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div>
            
            </div>
        </div>
    )
}


export default Salom;