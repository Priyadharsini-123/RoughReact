import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Instagram from "../assets/images/instagram.svg";
import Whatsapp from "../assets/images/whatsapp.svg";
import Linkdin from "../assets/images/linkedin.png";
import youTube from "../assets/images/youtube.svg";
import Facebook from "../assets/images/facebook.svg";

import Logo3 from "../assets/images/tow3.png";

const Feet = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#313947",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          padding: "33px 20px",
           // Reduce padding for better mobile layout
        }}
      >
        <Container >
          <Row className="align-items-start ">
            <Col xs={12} lg={4} className="mb-4 mb-lg-0 taizoin-bio">
              <a href="/">
                <img
                  className="footer-logo-icon img-fluid"
                  alt="taizo-logo-white"
                  src={Logo3}
                  style={{ marginLeft: "-10px" }}
                />
              </a>
              <div style={{ lineHeight: "20px", color: "#f5f5f5",fontSize:'18px', fontFamily: "Poppins, sans-serif", }}>
                <p className="m-0">We'll get you where you want to go</p>
                <p className="m-0">our innovative app is the ideal way</p>
                <p className="m-0">plan and keep track of your travel.</p>
              </div>
            </Col>
            {/* Links */}
            <Col xs={12} lg={2} sm={4} className="mb-4 mb-lg-0">
              <div className="footer-links">
                <div className="company">
                  <div style={{ lineHeight: "27px", fontWeight: "500", fontFamily: "Poppins, sans-serif" }}>
                    Links
                  </div>
                  <button className="pricing">
                    <a className="pricing" href="/about-us">
                      About Us
                    </a>
                  </button>
                  <button className="pricing">
                    <a className="pricing" href="/faq">
                      FAQ
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            {/* Know More */}
            <Col xs={12} lg={2} sm={4} className="mb-4 mb-lg-0">
              <div className="footer-links text-nowrap">
                <div className="support">
                  <div style={{ lineHeight: "27px", fontWeight: "500" }}>
                    Know More
                  </div>
                  <button className="pricing">
                    <a className="pricing" href="/pnr-status">
                      PNR Status
                    </a>
                  </button>
                  <button className="pricing">
                    <a className="pricing" href="/seat-availability">
                      Seat Availability
                    </a>
                  </button>
                  <button className="pricing">
                    <a className="pricing" href="/live-train">
                      Running Status
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            {/* More */}
            <Col xs={12} lg={1} sm={4} className="mb-4 mb-lg-0">
              <div className="footer-links">
                <div className="company">
                  <div
                    className="text-nowrap"
                    style={{ lineHeight: "27px", fontWeight: "500" }}
                  >
                    More
                  </div>
                  <button className="pricing">
                    <a className="pricing" href="/fare">
                      Fare Calculator
                    </a>
                  </button>
                  <button className="pricing">
                    <a className="pricing text-nowrap" href="/fare-comparison">
                      Fare Comparison
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            {/* Social Links */}
            <div className="social-link col-12 col-lg-3 d-flex justify-content-end justify-content-lg-end align-items-lg-end align-items-start">
              <div className="d-flex flex-row align-items-start justify-content-start gap-2 ">
                <a href="tel:+916381475573" target="_blank">
                  <img className="whatsapp-icon" alt="" src={Whatsapp} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61557723563954&amp;is_tour_dismissed=true"
                  target="blank"
                >
                  <img
                    className="facebook-icon"
                    alt="facebook-icon"
                    src={Facebook}
                    id="facebookIcon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCkevPhn1HEvWzOABHjqxdiA"
                  target="blank"
                >
                  <img
                    className="youtube-icon"
                    alt="youTube-icon"
                    src={youTube}
                    id="youTubeIcon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/showcase/100973095/admin/feed/posts/"
                  target="blank"
                >
                  <img
                    className="linkedin-icon"
                    alt="linkedin-icon"
                    src={Linkdin}
                    id="linkedInCircledIcon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/trainsonwheels/"
                  target="blank"
                >
                  <img
                    className="instgram-icon"
                    alt="instagram-icon"
                    src={Instagram}
                    id="instagramIcon"
                  />
                </a>
              </div>
            </div>
          </Row>
          <div className="mb-2 mt-3 text-lg-end col-lg-12 col-12 footer-inforow">
            <p className="mb-0" style={{ color: "#ebeded" }}>
              We would love to hear from you
            </p>
            <div className="d-lg-flex justify-content-lg-end footcontact">
              <div>
                <a
                  href="mailto:trainsonwheel@gmail.com"
                  style={{ color: "#0077b2", marginBottom: "0.5rem" }}
                  target="_blank"
                  className="wheelsmail"
                >
                  info@trainsonwheels.in
                </a>
                <div style={{ color: "#ebeded", marginBottom: "0" }}>
                  <a
                    href="tel:+916381475573"
                    className="wheelscontact"
                    style={{  textDecoration: "none" }}
                  >
                    +91 6381475573
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{backgroundColor: "#cbcbcb",
    height: "2px"}}></div>
          {/* Copyright */}
          <div className="justify-content-between align-items-center mb-2 row footer-copyrightrow">
  <div className="mt-3 mb-sm-0 col-sm-6 col-lg-6 text-center text-sm-start">
    <p className="text-nowrap">
      <span style={{}}>
        Copyright © 2024 <span className="d-lg-none" style={{}}>
        <br />
      </span>Trains on Wheels.
      </span>{" "}
      <span className="d-lg-none" style={{}}>
        <br />
      </span>
      <span style={{}}>All Rights Reserved</span>{" "}
    </p>
  </div>
  <div className="text-center text-sm-end col-sm-6 col-lg-6 privacyterms">
    <p className="text-nowrap">
      <span className="day-indicator" style={{}}>
        <a
          href="/privacy-policy"
          className="privacy "
          style={{ textDecoration: "none" }}
        >
          Privacy Policy
        </a>
      </span>{" "}
      <span className="d-none d-sm-inline " style={{fontWeight: "bold", 
    fontSize: "1.2em"}}> /</span>{" "}
    <span  className="d-inline d-sm-none "style={{fontWeight: "bold", 
    fontSize: "1.2em"}}><br/></span>{" "}
      <span>
        <a
          href="/terms-and-conditions"
          className="terms"
          style={{ textDecoration: "none" }}
        >
          Terms &amp; Conditions
        </a>
      </span>{" "}
    </p>
  </div>
</div>

        </Container>
      </div>
    </>
  );
};

export default Feet;
