import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import WebsiteNavbar from "./WebsiteNavbar";

const Adver = () => {
  return (
    <>
      <WebsiteNavbar />

      <div className="Advertisment">
        <div class="text-center item-absolute">
          <h1
            style={{
              marginTop: "10vw", // Adjust margin based on viewport width
              textAlign: "left",
              lineHeight: "1.2", // Adjust line height as needed
              fontSize: "calc(1.9vw + 1rem)", // Adjust font size based on viewport width
              marginLeft: "20vw", // Adjust margin based on viewport width
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(24px, 5vw, 45px)",
                color: "#fff",
              }}
            >
              Advertise With Us
            </span>
          </h1>
          <div className="adcont">
            <p class="m-0">Trains on Wheels provides ad options that effectively </p>
            <p className="m-0">connect with active audiences all over India,</p>
            <p className="m-0">helping you achieve your marketing goals</p>
          </div>

          <div>
            <button className="download">Download Media kit</button>
          </div>
        </div>
      </div>

      <Container>
        <div className="ad-1">
          <Row>
            <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
              <img
                src="https://www.outbrain.com/images/pages/native-advertisers/hold-phone-bg.webp"
                alt="Ad Image"
                style={{ maxWidth: "100%", height: "auto" }} // Make image responsive
              />
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center flex-column">
              <h2
                className="mt-1"
                style={{
                  fontWeight: "bold",
                  textAlign: "start",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(24px, 5vw, 45px)",
                }}
              >
                Agency Business
              </h2>
              <p class=" m-0" style={{fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(18px, 5vw, 20px)",
    color: "black"}}> Are you an agency interested in advertising across all</p>
     <p class="paragraph m-0" style={{fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(18px, 5vw, 20px)",
    color: "black"}}>our products or seeking a strategic partnership?Get in </p>
    <p class="paragraph m-0" style={{fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(18px, 5vw, 20px)",
    color: "black"}}>touch with us! Our dedicated team will help you find</p>
     <p class="paragraph m-0" style={{fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(18px, 5vw, 20px)",
    color: "black"}}> the perfect fit</p>
    
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Adver;
