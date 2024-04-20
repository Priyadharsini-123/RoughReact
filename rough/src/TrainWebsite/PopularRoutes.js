import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import bangalore from"../../assets/images/bangalore.webp";
import kolkata from"../../assets/images/kolkata.webp";
import chennai from"../../assets/images/chennai.webp";
import hyderabad from"../../assets/images/hyderabad.webp";
import ahmedabad from"../../assets/images/ahmedabad.webp";
import delhi from"../../assets/images/delhi.webp";
import mumbai from"../../assets/images/mumbai.webp";
import pune from"../../assets/images/pune.webp";
import nagpur from"../../assets/images/nagpur.webp";
import noida from"../../assets/images/noida.webp";








const PopularRoutes = () => {
  return (
    <section className="py-5 mt-4 " style={{fontFamily: "Poppins, sans-serif"}}>
    <Container>
    <Row className="justify-content-center">
          <Col xs={12}>
          <div className="text-center responsive-title">
    <h2 className='text-center responsive-title mt-3'>Popular Routes</h2>
</div>
          <Carousel
            nextIcon={null} 
            prevIcon={null} 
            indicators={false} 
            fade 
            interval={2000} 
          >
            <Carousel.Item>
              <Row className="justify-content-center py-3 text-center">
              <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0" style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={bangalore} alt="TrainsOnWheel BangaloreImage" title='TrainsOnWheel BangaloreImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap ">BANGALORE</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0" style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={kolkata} alt="TrainsOnWheel kolkataImage" title='TrainsOnWheel kolkataImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">KOLKATA</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0" style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={chennai} alt="TrainsOnWheel chennaiImage"title='TrainsOnWheel chennaiImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">CHENNAI</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0" style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={hyderabad} alt="TrainsOnWheel hyderabadImage" title='TrainsOnWheel hyderabadImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">HYDERABAD</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0" style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={ahmedabad} alt="TrainsOnWheel ahmedabadImage"title='TrainsOnWheel ahmedabadImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">AHMEDABAD</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            {/* Add more Carousel.Items for additional slides */}
            <Carousel.Item>
              <Row className="justify-content-center py-3">
              <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0"style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={delhi} alt="TrainsOnWheel delhiImage" title='TrainsOnWheel delhiImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">DELHI</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0"style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={mumbai} alt="TrainsOnWheel mumbaiImage" title='TrainsOnWheel mumbaiImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">MUMBAI</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0"style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={pune} alt="TrainsOnWheel puneImage" title='TrainsOnWheel puneImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">PUNE</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0"style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={nagpur} alt="TrainsOnWheel nagpurImage"  title='TrainsOnWheel nagpurImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">NAGPUR</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="">
                  <Card className="border-0"style={{backgroundColor:"whitesmoke"}}>
                    <Card.Img src={noida} alt="TrainsOnWheel noidaImage" title='TrainsOnWheel noidaImage' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">NOIDA</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  </section>
  );
};
export default PopularRoutes