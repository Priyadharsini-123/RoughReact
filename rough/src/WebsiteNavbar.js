import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; 
import logo from "../assets/images/logo5.webp";
import mixpanel from "mixpanel-browser";

const WebsiteNavbar = () => {
  const handleHome = () => {
    mixpanel.track("Home clicked");
  };
  const handlepnrStatus = () => {
    mixpanel.track("PnrStatus clicked");
  };
  const handleCoachPosition = () => {
    mixpanel.track("CoachPosition clicked");
  };
  const handleLiveTrain = () => {
    mixpanel.track("LiveTrain clicked");
  };
  const location = useLocation(); 
  return (
    <div>
      <Navbar expand="md" style={{ backgroundColor: "#0077B2" }} variant="dark" fixed="top">
        <Navbar.Brand href="/" className="mx-4">
          <img src={logo} alt="pnrlogo" style={{ height: "40px", width: "25px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: "15px" }} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
          <Nav className="text-center">
            <Nav.Link onClick={handleHome} href="/" className="navstyles" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link onClick={handlepnrStatus} href="/pnr-status" className="navstyles" style={{color:"white"}}>PNR Status</Nav.Link>
            <Nav.Link onClick={handleCoachPosition} href="/coach-position" className="navstyles"style={{color:"white"}}>Coach Position</Nav.Link>
            <Nav.Link onClick={handleLiveTrain} href="/live-train" className="navstyles"style={{color:"white"}}>Live Train</Nav.Link>
            <NavDropdown title="More Features" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLiveTrain} href="/fare" className="navstyless"style={{color:"black"}}>Fare Calculator</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLiveTrain} href="/fare-comparison" className="navstyless"style={{color:"black"}}>Fare Comparison</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default WebsiteNavbar;
