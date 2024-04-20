import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import download from '../../assets/images/carC.webp';
import map from '../../assets/images/Group 32.png';
import service from '../../assets/images/service.webp';
import destination from '../../assets/images/taxi-arrive-at-destination.b3ceb242.svg';


const HowItWork = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mt-3">
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3 '>
            <h1 style={{ fontSize: "clamp(24px, 5vw, 45px)", fontFamily: "Poppins, sans-serif", color: "black" }}>App Work</h1>
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center mt-5'>
          <Col xs={12} sm={4} className='text-center'>
            <img src={download} width="70px" alt="TrainsOnWheel DownloadImage" title='TrainsOnWheel DownloadImage'/>
            <h4 className='mt-3' style={{ fontSize: "25px", fontFamily: "Poppins, sans-serif", color: "black", fontWeight: "bold" }}>Download Trains on Wheels</h4>
            <p className='my-2 mx-5 justify-content-center align-items-center' style={{ fontSize: "clamp(20px, 1vw, 10px)", fontFamily: "Poppins, sans-serif", color: "black" }}>First thing, first Download Trains on Wheels app from play store</p>
          </Col>

          <Col xs={12} sm={4} className='text-center'>
            <img style={{ width: "70px" }} src={service} alt="TrainsOnWheel ServiceImage" title='TrainsOnWheel ServiceImage' />
            <h4 className='mt-3' style={{ fontSize: "25px", fontFamily: "Poppins, sans-serif", color: "black", fontWeight: "bold" }}>Select your services</h4>
            <p className='my-2 mx-5 justify-content-center align-items-center' style={{ fontSize: "clamp(20px, 1vw, 10px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Find all the information you need to plan your journey with Trains on Wheels app</p>
          </Col>

          <Col xs={12} sm={4} className='text-center'>
            <img src={destination}alt="TrainsOnWheel DestinationImage" title='TrainsOnWheel DestinationImage' />
            <h4 className='mt-3' style={{ fontSize: "25px", fontFamily: "Poppins, sans-serif", color: "black", fontWeight: "bold" }}>Arriving at your destination</h4>
            <p className='my-2 mx-5 justify-content-center align-items-center' style={{ fontSize: "clamp(20px, 1vw, 10px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Get to your destination quickly and safely you can enjoy with the Journey</p>
          </Col>
        </Row>
        <Row xs={12} sm={6} md={12} className="mt-1 justify-content-center align-items-center">
          <Col lg={6} xs={12} sm={6} md={12} className='d-flex justify-content-center align-items-center'>
            <img src={map} className="img-fluid float-md-right wow fadeInLeft" style={{ marginTop: '5vw', width: "80%", maxWidth: "400px", height: "auto" }} alt="TrainsOnWheel MapImage"  title='TrainsOnWheel MapImage'/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWork;
