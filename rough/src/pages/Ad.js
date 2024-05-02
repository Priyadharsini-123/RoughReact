import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Add from '../assets/images/adwithus.jpg'
const Ad = () => {
  return (
    <>
      <Col xs={12} sm={12} lg={12}>
        <div class="section-block">
          <div class="text-center item-absolute">
            <h1 style={{
              marginTop: '10vw', // Adjust margin based on viewport width
              textAlign: 'left',
              lineHeight: '1.2', // Adjust line height as needed
              fontSize: 'calc(1.9vw + 1rem)', // Adjust font size based on viewport width
              marginLeft: '20vw', // Adjust margin based on viewport width
            }}>
              <span style={{fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(24px, 5vw, 45px)",
    color:'#fff'}}>Advertise With Us</span>
            </h1>

            <div className="adcont">
            <p class="m-0"
    >Trains on Wheels provides ad options that effectively  </p>
     <p className="m-0">connect with active audiences all over India,</p>
    
     <p className="m-0">helping you achieve your marketing goals</p>
            </div>
          
            <a href="">
              <button className="download">Download media kit</button>
            </a>
          </div>
        </div>
      </Col>
      <div class="container m-5">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-12">
            <div class="">
              <div class="contents">
              <h2 style={{fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(24px, 5vw, 45px)"}}>Agency Business</h2>
                <div className="agent">

                <p class="paragraph m-0" style={{fontFamily: "Poppins, sans-serif",
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
    
             
                </div>
                
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-12">
            <div class="">
            <h2 style={{fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(24px, 5vw, 45px)"}}>App Ad Inventories</h2>
          
              {/* <h1></h1> */}
              {/* <ul>
                <li>Title credits</li>
                <li>Title credits</li>
                <li>Title credits</li>
                <li>Title credits</li>
                <li>Title credits</li>
              </ul> */}


<ul class="paragraphs " style={{fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(18px, 5vw, 20px)",
    color: "black",
    textWrap:'nowrap'}}> 
    <li>Title credits</li>
    <li>Title credits</li>
    <li>Title credits</li>
    <li>Title credits</li>
    </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ad;
