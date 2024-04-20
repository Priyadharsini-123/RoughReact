import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import map from "../../assets/images/map.webp";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import mixpanel from "mixpanel-browser";

const Footer = () => {
  const handlePrivacyPolicy = () => {
    mixpanel.track("PrivacyPolicy clicked");
  };
  const handleTermsCondition = () => {
    mixpanel.track("TermsCondition clicked");
  };
  const handleMail = () => {
    mixpanel.track("Mail link clicked");
  };
  const handleNumber = () => {
    mixpanel.track("Number link clicked");
  };
  const handleTwitter = () => {
    mixpanel.track("Twitter link clicked");
  };
  const handleInstagram = () => {
    mixpanel.track("Instagram link clicked");
  };
  const handleYoutube = () => {
    mixpanel.track("Youtube link clicked");
  };
  const handleLinkedin = () => {
    mixpanel.track("Linkedin  link clicked");
  };
  const handleFacebook = () => {
    mixpanel.track("Facebook  link clicked");
  };
  const handleFaq = () => {
    mixpanel.track("Faq  link clicked");
  };

  return (
    <div
      style={{
        backgroundColor: "#313947",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container fluid className="mt-0">
        <Row className="justify-content-center align-items-center">
         
          <Col xs={12} lg={4} className="text-center">
          <p>
            <a
              href="/about-us"
              style={{ textDecoration: "none", color: "white" }}
          
            >
              <h4 className="mt-5 mb-3 nav-link" style={{ fontSize: "25px" }}>
                About Us
              </h4>
            </a>
            </p>
            <p className="mx-3" style={{ fontSize: "20px" }}>
              We'll get you where you want to go. From live train updates to
              seat availability, PNR status, train between status, our
              innovative app is the ideal way to plan and keep track of your
              travel.
            </p>
          </Col>

          <Col
            xs={12}
            lg={4}
            className="text-center"
            style={{
              backgroundImage: `url(${map})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <h4 className="mt-5 mb-3" style={{ fontSize: "25px" }}>
              Quick Links
            </h4>
            <p className="nav-link" style={{ fontSize: "20px" }}>
              <a
                onClick={handlePrivacyPolicy}
                style={{ textDecoration: "none", color: "white" }}
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </p>
            <p className="nav-link" style={{ fontSize: "20px" }}>
              <a
                onClick={handleTermsCondition}
                style={{ textDecoration: "none", color: "white" }}
               href="/terms&-condition"
              >
                Terms & Condition
              </a>
            </p>
            <p className="nav-link" style={{ fontSize: "20px" }}>
              <a
                onClick={handleFaq}
                style={{ textDecoration: "none", color: "white" }}
                href="/faq"
              >
                FAQ
              </a>
            </p>
          </Col>

          <Col xs={12} lg={4} className="text-center">
            <h4 className="mt-5 mb-3" style={{ fontSize: "25px" }}>
              Contact Info
            </h4>
           
            <p onClick={handleNumber} style={{ fontSize: "20px",marginRight:"90px" }}>
              <FaPhoneAlt /> <a href="tel:+916381475573">+91 6381475573</a>
            </p>
            <p onClick={handleMail} style={{ fontSize: "20px" }}>
              <IoMail />{" "}
              <a href="mailto:trainsonwheel@gmail.com">
                trainsonwheel@gmail.com
              </a>
              <p className="mt-3" style={{ fontSize: "20px" }}>
              <FaLocationDot /> Kadirimangalam Tirupathur
            </p>
            </p>
            <Row>
              <Col className="justify-content-between">
                <a
                  onClick={handleTwitter}
                  href="https://twitter.com/trainsonwheels"
                  target="blank"
                >
                  <FaSquareXTwitter className="m-1" size={30} color="white" />
                </a>
                <a
                  onClick={handleInstagram}
                  href="https://www.instagram.com/trainsonwheels/"
                  target="blank"
                >
                  <FaInstagramSquare className="m-1" size={30} color="white" />
                </a>
                <a
                  onClick={handleYoutube}
                  href="https://www.youtube.com/channel/UCkevPhn1HEvWzOABHjqxdiA"
                  target="blank"
                >
                  <FaYoutube className="m-1" size={30} color="white" />
                </a>
                <a
                  onClick={handleLinkedin}
                  href="https://www.linkedin.com/showcase/100973095/admin/feed/posts/"
                  target="blank"
                >
                  <FaLinkedin className="m-1" size={30} color="white" />
                </a>
                <a
                  onClick={handleFacebook}
                  href="https://www.facebook.com/profile.php?id=61557723563954&is_tour_dismissed=true"
                  target="blank"
                >
                  <FaFacebook className="m-1" size={30} color="white" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center mt-4">
          <Col xs={12} sm={4} className="text-center">
            <p style={{ fontSize: "20px" }}>
              Copyrights © 2024 Trains on Wheels. All Rights Reserved 2024
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
