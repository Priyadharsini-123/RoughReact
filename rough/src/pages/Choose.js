import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import group from "../assets/images/Group 66.webp";

const TravelInformation = () => {
  return (
    <section className='p-5'>
      <Container>
        <div className='text-center'>
          <div className='choose'>
            <h1 style={{ fontSize: "clamp(24px, 5vw, 45px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Why choose us</h1>
          </div>
        </div>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className='chooseBox'>
              <div className='pic'>
                <img src={group} alt="TrainsOnWheels GroupImage" title='TrainsOnWheels GroupImage' className='img-fluid' />
              </div>
              <div className='chooseTxt at1'>
                <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>Trains On Wheels</h3>
                <p className='fonts '>The only official Trains on Wheels app for Indian Railways</p>
              </div>
              <div className='chooseTxt at2'>
                <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>Live Train</h3>
                <p className='fonts'>Stay updated on your train's whereabouts with our live train status feature</p>
              </div>
              <div className='chooseTxt at3'>
                <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>Seat Availability</h3>
                <p className='fonts'>Check IRCTC train upcoming station seat availability here</p>
              </div>
              <div className='chooseTxt at4'>
                <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>Pnr Status</h3>
                <p className='fonts'>PNR status check to know whether train seat is confirmed or not.</p>
              </div>
              <div className='chooseTxt at5'>
                <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>Referral Amount</h3>
                <p className='fonts'>Invite your friends to join our train app and earn referral rewards</p>
              </div>
              <div className='chooseTxt at6'>
                <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>Notification</h3>
                <p className='fonts'>A complete solution for all your IRCTC and Metro train needs!</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TravelInformation;
