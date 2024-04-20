import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import explore3 from "../../assets/images/explore-place.webp"
import explore2 from "../../assets/images/train nature.webp"
import explore1 from "../../assets/images/stationimg.webp"



const Explore = () => {
    return (
        <Container className="mt-md-4 mt-0 mb-0" style={{fontFamily: "'Poppins', sans-serif"}}>
            <Row className=" ">
            <Col md={12} className=''>
    <h2 className='text-center responsive-title'>
        <span style={{color:"#3b64b8"}} className=" font-weight-bold">Explore Cities</span> | Trains on Wheels Guides
    </h2>
</Col>

                <Col md={5} className="pt-1 text-center mt-5 font justify-content-center align-items-center">
                    <p className="font-weight-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Welcome to the City of Dreams!
                    </p>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Let Trains on Wheels be your trusty guide as you navigate this vibrant metropolis. Discover the hidden gems and must-see attractions that make this city shine. Don't miss out on any of the excitement – let us show you the way
                    </p>
                    <ul className="list-unstyled pb-3 ">
                        <li className="mt-3">
                            <p  style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Famous places in India</p>
                        </li>
                        <li className="mt-3">
                            <p style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Top tourist destinations India</p>
                        </li>
                        <li className="mt-3">
                            <p style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Top train travels in India</p>
                        </li>
                        <li className="mt-3">
                            <p  style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Famous Travel Stories</p>
                        </li>
                    </ul>
                    {/* <Button href="#" className="btn btn-primary" style={{
                        boxShadow: '0 6px 10px 0 rgba(0,0,0,0.1)',
                        fontSize: '0.75rem',
                        borderRadius: '.3rem',
                        color: '#fff',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        background: '#3b64b8',
                        border: '0',
                        borderRadius: '3px',
                        padding: '15px 40px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '800',
                        letterSpacing: '1px'
                    }}>Explore India</Button> */}
                </Col>
                <Col md={7} className='mt-5'>
                    <Row noGutters className="mt-4 mt-md-0 justify-content-center align-items-center">
                        <Col xs={4}>
                            <img src={explore1} style={{ width: '310px' }} className="img-fluid py-2 " alt="TrainsOnWheel Explore1" title='TrainsOnWheel Explore1' />
                            <img src={explore2} style={{borderRadius:"10px"}} className="img-fluid w-100 float-right" alt="TrainsOnWheel Explore2"title='TrainsOnWheel Explore2' />
                        </Col>
                        <Col xs={6}>
                            <img src={explore3} style={{borderRadius:"10px"}} className="img-fluid " alt="TrainsOnWheel Explore3"title='TrainsOnWheel Explore3' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Explore;
