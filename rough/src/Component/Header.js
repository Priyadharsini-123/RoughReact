import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from "../images/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" fixed="top" className=" bg-white">
    <div className="container ">
      {/* Begin Logo */}
      <Navbar.Brand href="#" className="">
        <img src={Logo} alt="Yatri" className='img-fluid' style={{maxWidth:'150px', height: 'auto'}} />
      </Navbar.Brand>
      {/* End Logo */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* Begin Menu */}
      <Navbar.Collapse id="responsive-navbar-nav" className="custom-navbar-collapse">
        <Nav className="ml-auto">
        <Nav.Link href="/pnr-status">Home</Nav.Link>
          <Nav.Link href="/pnr-status">PNR Status</Nav.Link>
          <Nav.Link href="/coach-position">Coach Position</Nav.Link>
          <Nav.Link href="/live-train">Live Train</Nav.Link>
          
          <Nav.Link href="/advertisement">Advertise</Nav.Link>
          <NavDropdown title="More Feature" id="basic-nav-dropdown">
            <NavDropdown.Item href="/fare" target="_blank">Fare Calculator</NavDropdown.Item>
            <NavDropdown.Item href="/farecomparsion">Fare Comparsion</NavDropdown.Item>
            <NavDropdown.Item href="/seatavailablity">Seat Availblity</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
      {/* End Menu */}
    </div>
  </Navbar>
  );
}

export default Header;
