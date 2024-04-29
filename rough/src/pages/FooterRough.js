import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Instagram from "../assets/images/ins.svg";
import Twitter from "../assets/images/tw.svg";
import Linkdin from "../assets/images/ln.svg";
import youTube from "../assets/images/youtube.svg";
import Facebook from "../assets/images/fb.svg";
import Logo3 from "../assets/images/tow3.png";
import PlayStore from "../assets/images/play-store-badge-.webp"
import Qrcode from "../assets/images/qrcode.png"

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#313947",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          padding: "33px 20px",
        }}
      >
        <Container>
          <Row className="align-items-start">
            <Col xs={12} lg={4} className="mb-4 mb-lg-0 wheels-bio">
              <a href="/">
                <img
                  className="footer-logo-icon img-fluid"
                  alt="trainsonwheels-logo"
                  src={Logo3}
                  style={{ marginLeft: "-10px" }}
                />
              </a>
              <div style={{ lineHeight: "20px", color: "#F5F5F5", fontSize:'18px', fontFamily: "Poppins, sans-serif" }}>
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
                  <button className="wheelslinks">
                    <a className="wheelslinks" href="/about-us">
                      About Us
                    </a>
                  </button>
                  <button className="wheelslinks">
                    <a className="wheelslinks" href="/faq">
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
                  <button className="wheelslinks">
                    <a className="wheelslinks" href="/pnr-status">
                      Privacy Policy
                    </a>
                  </button>
                  <button className="wheelslinks">
                    <a className="wheelslinks" href="/seat-availability">
                      Terms &amp; Conditions
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            {/* More */}
            <Col xs={12} lg={4} className="social-link col-12 col-lg-4 d-flex justify-content-start justify-content-lg-end align-items-lg-start align-items-start justify-content-lg-end align-items-lg-start">
              <div className="d-flex flex-column justify-content-start justify-content-lg-end ">
                <p className="text-nowrap app justify-content-start justify-content-lg-start exp ">Experience TrainsOnWheels App</p>
                <div className="d-flex justify-content-start justify-content-lg-end">
                  <img src={Qrcode} alt="Qrcodeimage" style={{ width: '17%', marginRight: '5px',marginTop:'-8px' }}/>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trainsonwheels.trainsonwheelsandroidapp" target="blank"
                  >
                  <img src={PlayStore} alt="playstore-image" className="play" /></a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mb-2 mt-3 text-lg-end col-lg-12 col-12 footer-inforow">
            <p className="mb-0" style={{ color: "#EBEDED" }}>
              We would love to hear from you
            </p>
            <div className="d-lg-flex justify-content-lg-end footcontact">
              <div>
                <a
                  href="mailto:trainsonwheel@gmail.com"
                  style={{ color: "#0077B2", marginBottom: "0.5rem" }}
                  target="_blank"
                  className="wheelsmail"
                >
                 trainsonwheel@gmail.com
                </a>
                <div style={{ color: "#EBEDED", marginBottom: "0" }}>
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
          <div style={{backgroundColor: "#CBCBCB", height: "2px"}}></div>
          {/* Copyright */}
          <div className="justify-content-between align-items-center mb-2 row footer-copyrightrow">
            <div className="mt-3 mb-sm-0 col-sm-6 col-lg-6 text-start col-12 text-sm-start copy">
              <p className="text-nowrap">
                <span className="text-center d-block d-sm-inline">
                  Copyright © 2024 <br class="d-none d-sm-block" />TrainsonWheels.
                </span>{" "}
                <span className="text-center d-block d-sm-inline">
                  All Rights Reserved
                </span>
              </p>
            </div>
            <div className="social-link col-12 col-lg-3 d-flex justify-content-end justify-content-lg-end align-items-lg-end align-items-center d-md-end">
              <div className="d-flex flex-row align-items-center justify-content-center gap-2 ">
                <a href="https://twitter.com/trainsonwheels" target="_blank">
                  <img className="twitter-icon" alt="Witter-icon" src={Twitter} width={30}  height={31}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61557723563954&amp;is_tour_dismissed=true" target="blank">
                  <img className="facebook-icon" alt="facebook-icon" src={Facebook} id="facebookIcon" width={30} height={31} />
                </a>
                <a href="https://www.youtube.com/channel/UCkevPhn1HEvWzOABHjqxdiA" target="blank">
                  <img className="youtube-icon" alt="youTube-icon" src={youTube} id="youTubeIcon" />
                </a>
                <a href="https://www.linkedin.com/showcase/100973095/admin/feed/posts/" target="blank">
                  <img className="linkedin-icon" alt="linkedin-icon" src={Linkdin} id="linkedInCircledIcon" width={30}  height={31}/>
                </a>
                <a href="https://www.instagram.com/trainsonwheels/" target="blank">
                  <img className="instgram-icon" alt="instagram-icon" src={Instagram} id="instagramIcon" width={30}  height={31}/>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
