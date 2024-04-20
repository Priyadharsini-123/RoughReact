import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeaderImage from "../../assets/images/bg3.webp";
import header1 from "../../assets/images/header1.webp";
import header2 from "../../assets/images/header2.webp";
import header3 from "../../assets/images/header3.webp";
import header4 from "../../assets/images/header4.webp";
import header5 from "../../assets/images/header5.webp";
import header6 from "../../assets/images/header6.webp";
import header7 from "../../assets/images/header7.webp";
import header8 from "../../assets/images/header8.webp";
import header9 from "../../assets/images/header9.webp";
import QRcode from "../../assets/images/qrcode.png";
import playstore from "../../assets/images/play-store-badge-en.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";
import WebsiteNavbar from "../../components/WebsiteHomeNavbar";
import TopHeader from '../../pages/TrainWebsite/TopHeader'


const WebsiteHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
  };

 
  return (
    <>
   <WebsiteNavbar/>
  
    <div style={{marginTop:"65px"}}>
    <TopHeader/>
     
       
      <Container
        fluid
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <Container>
          <Row className="mt-0">
          <Col className="">
 
</Col>
          </Row>
          <Row className="mt-0">
            <Col
              lg={6}
              className="d-flex flex-column justify-content-top align-items-center text-center "
            >
              <h1
                style={{
                  fontSize: "clamp(24px, 5vw, 45px)",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                  marginTop:"120px"
                }}
              >
                An easier way to manage your trips!
              </h1>
              {/* Hide on small screens */}
              <h3
                className="my-2 mx-5 d-none d-lg-block"
                style={{
                  fontSize: "25px",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                }}
              >
                Our innovative app is the ideal way to plan and keep track of
                your travel.
              </h3>
              <p
                className="my-2 mx-5"
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Typewriter
                  words={[' "Have a pleasant journey"']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  cursorColor="white"
                  typeSpeed={40}
                  deleteSpeed={35}
                  delaySpeed={1000}
                />
<Row className="justify-content-center align-items-center mt-3 ">
        <Col xs={12} className="text-center ">
          <a href='https://play.google.com/store/apps/details?id=com.trainsonwheels.trainsonwheelsandroidapp' target='blank'>
            <img
              src={playstore}
              alt="TrainsOnWheels Google Play"
              title="TrainsOnWheels Google Play"
              style={{ Width: "40px", height: "40px" }} 
            />
          </a>
         
            <img
            className="m-2"
              src={QRcode}
              alt="TrainsOnWheels QRcode"
              title="TrainsOnWheels QRcode"
              style={{ width: "50px", height: "50px" }}
            />
      
        </Col>
      </Row>
              </p>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div class=" col-md-6 col-md-pull-6 ">
                <div id="img-container">
                  <Slider {...settings}>
                    <div class="screen">
                      <img src={header1} class="screen-img" alt="HeaderCarosuel 1" title="HeaderCarosuel 1"/>
                    </div>
                    <div class="screen">
                      <img src={header2} class="screen-img" alt="HeaderCarosuel 2" title="HeaderCarosuel 2"/>
                    </div>
                    <div>
                      <img src={header3} class="screen-img" alt="HeaderCarosuel 3" title="HeaderCarosuel 3"/>
                    </div>
                    <div>
                      <img src={header4} class="screen-img" alt="HeaderCarosuel 4" title="HeaderCarosuel 4"/>
                    </div>
                    <div>
                      <img src={header5} class="screen-img" alt="HeaderCarosuel 5" title="HeaderCarosuel 5"/>
                    </div>
                    <div>
                      <img src={header6} class="screen-img" alt="HeaderCarosuel 6" title="HeaderCarosuel 6"/>
                    </div>
                    <div>
                      <img src={header7} class="screen-img" alt="HeaderCarosuel 7"title="HeaderCarosuel 7" />
                    </div>
                    <div>
                      <img src={header8} class="screen-img" alt="HeaderCarosuel 8" title="HeaderCarosuel 8" />
                    </div>
                    <div>
                      <img src={header9} class="screen-img" alt="HeaderCarosuel 9" title="HeaderCarosuel 9" />
                    </div>

                    {/* <div>
                            <img src="../app-screenshots/Otherservices.jpg" class="screen-img"/>

                        </div> */}
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
    </>
  );
};

export default WebsiteHeader;