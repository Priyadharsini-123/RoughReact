import React from "react";
import AgencyAd from "../assets/images/Advertising Agency.webp"
import FooterAd from "../assets/images/footerad.png";
import VideoAd from "../assets/images/advideo.png";
import BannerAd from "../assets/images/bannerad.png";
import Adpdf from "../assets/images/adWithUs.pdf";
import { Row, Container, Col } from "react-bootstrap";
const Adver = () => {
  return (
    <>
      <div
        className="background-image"
        style={{
          backgroundImage: `url('https://admin-trainsonwheels.s3.us-east-1.amazonaws.com/images/1714799105863-Group%20291.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px", // Adjust as needed
          position: "relative",
        }}
      >
        <Container className="d-flex flex-column justify-content-center align-items-center text-center position-relative ">
          <h1
            style={{
              marginTop: "10vw",
              textAlign: "left",
              lineHeight: "1.2",
              fontSize: "calc(1.9vw + 1rem)",
              marginLeft: "5vw",
              marginRight: "5vw", 
              marginTop: "5vw"
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
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(18px, 5vw, 20px)",
              color: "#fff",
              textAlign: "center",
              marginLeft: "10vw",
              marginRight: "10vw", 
              maxWidth: "500px",
            }}
          >
            <p>
              Trains on Wheels provides ad options that effectively connect
              with active audiences all over India, helping you achieve your
              marketing goals{" "}
            </p>
          </div>

          <a href={Adpdf} className="text-white">
            <button className="download">Download Media Kit</button>
          </a>
        </Container>
      </div>
      <Container>
        <div  className="agents"
        >
          <Row>
            <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
              <img
                src={AgencyAd}
                alt="Ad Image"
                style={{ maxWidth: "100%", height: "auto" }} // Make image responsive
              />
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center flex-column">
              <h2
                className="mt-1 agenthead"
                style={{
                  fontWeight: "bold",
                  textAlign: "start",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(24px, 5vw, 45px)",
                }}
              >
                Agency Business
              </h2>
              <p className="agentpara" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px, 6vw, 17px)', color: 'black',}}>
                If agencies are interested in launching campaigns across our entire range of services or seeking strategic partnerships, we invite you to reach out to us. Our specialized team is committed to collaborating with you to identify the ideal solution.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="container">
        <div className="row justify-content-center"> {/* Adjust column size and center text */}
          <div className="col-md-12 text-center">
            <h2
              className="mt-1 agenthead"
              style={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(24px, 5vw, 45px)",
              }}
            >
              App Ad Types Inventories
            </h2>
          </div>
        </div>
        </div>
       <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                 
                    <div className="item">
                        <div className="image-grids" style={{backgroundImage: `url(${FooterAd})`,backgroundRepeat:'no-repeat'}}></div>
                        <h4 className="appinhead"style={{fontFamily:'"Poppins", sans-serif',fontSize:"25px",fontWeight:"bold",color:"black"}}>Footer Ad</h4>
                      
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="item">
                        <div className="image-grids" style={{backgroundImage: `url(${BannerAd})`, backgroundRepeat: "no-repeat"}}></div>
                        <h4 className="appinhead"style={{fontFamily:'"Poppins", sans-serif',fontSize:"25px",fontWeight:"bold",color:"black"}}>BannerAd</h4>
                     
                </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="item">
                        <div className="image-grids" style={{backgroundImage: `url(${VideoAd})`, backgroundRepeat: "no-repeat"}}></div>
                        <h4 className="appinhead"style={{fontFamily:'"Poppins", sans-serif',fontSize:"25px",fontWeight:"bold",color:"black"}}>VideoAd</h4>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Adver;
