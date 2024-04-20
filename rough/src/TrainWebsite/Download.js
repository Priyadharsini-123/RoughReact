import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import train from "../../assets/images/bg image2.webp";
import playstore from "../../assets/images/play-store-badge-en.webp";
import mixpanel from 'mixpanel-browser';

const Download = () => {
  const handleClick = () => {
    mixpanel.track('Download App');
  };

  return (
    <Container fluid className='mt-5 mb-5'>
      <Row className="">
        <Col className='d-flex flex-column justify-content-center align-items-center '>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 45px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Download App</h1>
        </Col>
      </Row>
      <Row className="mt-0">
        <Col lg={6} className="d-flex flex-column justify-content-center align-items-center text-center mb-3">
          <p className='my-2 mx-5' style={{ fontSize: "clamp(20px, 5vw, 35px)", fontFamily: "Poppins, sans-serif", color: "#3b64b8" }}>Enjoy now Trains on Wheels App</p>
          <p className='my-2 mx-5' style={{ fontSize: "clamp(18px, 5vw, 30px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Ready to travel?</p>
          <p className='my-2 mx-5' style={{ fontSize: "clamp(18px, 5vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }}>One app for every step of your journey—travel planning has never been easier!</p>
          <Row lg={6} className='d-flex justify-content-start align-items-center mt-2'>
            <div className="text-center">
            <a href='https://play.google.com/store/apps/details?id=com.trainsonwheels.trainsonwheelsandroidapp' target='blank'><img  src={playstore} 
            alt=" TrainsOnWheels GooglePlay1 " title='TrainsOnWheels GooglePlay1'  style={{ Width: "40px", height: "40px" }}
            onClick={handleClick} /></a>
            </div>
          </Row>
        </Col>
        <Col lg={6} className='d-flex justify-content-center align-items-center'>
          <img src={train} className="img-fluid float-md-right wow fadeInLeft mb-5 mt-5" style={{ width: "80%", height: "auto" }} alt="FooterTrainImage" title='FooterTrainImage' />
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
