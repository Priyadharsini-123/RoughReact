
import React,{useState} from "react";
import { Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const HeaderAbout = () => {
    const [counterOn,setCounteron]=useState(false)
  return (
    <>
    
      <div className="About">
        <div className="aboutbg">
          <Container>
            <Row className="justify-content-center">
              <Col className="xs={12} md={8} lg={6}">
                <div className="aboutinner">
                <AnimatedOnScroll               
                 animationIn="bounceInLeft">
                  <h1 className="abouttitle">About Us</h1>
                  </AnimatedOnScroll>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
 {/* who we are start */}
 


      <section style={{ paddingTop: '50px',
  backgroundColor:'rgb(242, 244, 244)'}}>
    <h2 style={{fontWeight: 'bold',
    textAlign: 'center',
    // color: 'rgb(0, 119, 178)',
    fontFamily: '"Poppins", sans-serif',
    fontSize: "clamp(24px, 5vw, 45px)"}}>Who we are</h2>
     <AnimatedOnScroll               
     animationIn="bounceInLeft"
             
            >
    <p class="paragraph mt-5" style={{fontFamily:'"Poppins", sans-serif', fontSize: "clamp(18px, 5vw, 20px)",color:"black"}}>
    Trains on Wheels is your go-to app for all things train-related. We're here to make your train travel experience smoother, simpler, and more enjoyable. Whether you're a frequent commuter or an occasional traveler</p></AnimatedOnScroll>
    <AnimatedOnScroll               
     animationIn="bounceInRight">
    <p className='paragraph'style={{fontFamily:'"Poppins", sans-serif', fontSize: "clamp(18px, 5vw, 20px)",color:"black"}}>our app is designed to provide you with everything you need to plan your journey with ease.Our goal is to make train travel hassle-free, so you can focus on enjoying the ride. 
    Download the "Trains on Wheels" app today and let's embark on your next adventure together</p> </AnimatedOnScroll>
    <AnimatedOnScroll               
     animationIn="bounceInLeft">
    <p className='paragraph mb-5'style={{fontFamily:'"Poppins", sans-serif', fontSize: "clamp(18px, 5vw, 20px)",color:"black"}} mb-5>Trains on Wheels is the all-in-one official app from Indian  railway which consists of information related to  local  and metro  train ,  Express trains  & PNR status, Live Announcements from Indian Railways</p></AnimatedOnScroll>

   
   
    
</section>
      {/* Who we are  end */}

       {/* About short start */}
       <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="item">
                        <div className="image-grid" style={{backgroundImage: "url(https://betxnew.s3.ap-south-1.amazonaws.com/images/1712668666805-mob3.png)"}}></div>
                        <div className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize:"25px",fontWeight:"bold",color:"black"}}>Explore different <br />ways of travel</div>
                        <p className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize: "clamp(20px, 1vw, 10px)",color:"black"}}> In-app Countless ways to find meaningful new journeys </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="item">
                        <div className="image-grid" style={{backgroundImage: "url(https://betxnew.s3.ap-south-1.amazonaws.com/images/1712570266565-book%201.png)", backgroundRepeat: "no-repeat"}}></div>
                        <div className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize:"25px",fontWeight:"bold",color:"black"}}>All  your Option <br />in one place</div>
                        <p className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize: "clamp(20px, 1vw, 10px)",color:"black"}}>Compare options and find the right price with our easy app</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="item">
                        <div className="image-grid" style={{backgroundImage: "url(https://notification-traininfo.s3.amazonaws.com/images/1712390599938-customer-service%20%283%29.png)"}}></div>
                        <div className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize:"25px",fontWeight:"bold",color:"black"}}>Our Customer<br />Support</div>
                        <p className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize: "clamp(20px, 1vw, 10px)",color:"black"}}>In-app  reliable customer Information service</p>
                    </div>
                </div>
            </div>
        </div>
    
      {/* About short end */}
      {/* Mission start */}
      <div style={{ backgroundColor: 'rgb(242, 244, 244)' }}>
      <Container fluid>
        <Row className="mt-4"></Row>
        <Row className="mt-0">
       
          <Col lg={6} className="d-flex flex-column justify-content-center align-items-center text-center mb-3">
          <AnimatedOnScroll               
     animationIn="bounceInLeft">
            <h2 style={{fontWeight: 'bold',
    textAlign: 'center',
    // color: 'rgb(0, 119, 178)',
    fontFamily: '"Poppins", sans-serif',
    fontSize: "clamp(21px, 5vw, 37px)"}}>Our Mission</h2>
               <p className='mission  text-center'>Our goal is to unify railway travel services, providing users with a seamless experience to access the most competitive prices and receive intelligent, up-to-date travel information anytime, anywhere.</p> 
           
            <div class="row mb-3">
              <div class="col-md-6 mx-auto text-center mt-3">
                <ul class="list-inline m-0 py-2"></ul>
              </div>
            </div>
            </AnimatedOnScroll>
          </Col>
 
          <Col lg={6} className='d-flex justify-content-center align-items-center'>
            <img src="https://betxnew.s3.ap-south-1.amazonaws.com/images/1712668672091-mob1.png" className="img-fluid float-md-right wow fadeInLeft mb-5" style={{ maxWidth: "60%", height: "auto" }} alt="Getpageimage" />
          </Col>
        </Row>
      </Container>
    </div>
      {/* Mission end */}
      {/* Rating start */}
      <Container>
        
      <Row className="justify-content-center">
        <Col xs="auto">
        <h2 style={{fontWeight: 'bold',
    textAlign: 'center',
    // color: 'rgb(0, 119, 178)',
    fontFamily: '"Poppins", sans-serif',
    fontSize: "clamp(24px, 5vw, 45px)"}}>App Statistics</h2>
        </Col>
      </Row>
      <ScrollTrigger onEnter={()=>setCounteron(true)} onExist={()=>setCounteron(false)}>
      <Row className="justify-content-center">
        <Col xs="auto">
         
        </Col>
      </Row>
      </ScrollTrigger>
       <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="item">
                        
                        <div style={{ fontSize: '60px',
    textAlign: 'center',
    paddingTop: '32px',
    fontFamily: '"Poppins", sans-serif',
    color: 'rgb(0, 119, 178)'}}>{counterOn && <CountUp start={0} end={5000} duration ={1} delay={0.1}/>}+</div>
                         <p className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize: "clamp(20px, 1vw, 10px)",color:"black"}}>App Download</p>    
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="item">
                        
                        <div style={{ fontSize: '60px',
    textAlign: 'center',
    paddingTop: '32px',
    fontFamily: '"Poppins", sans-serif',
    color: 'rgb(0, 119, 178)'}}>{counterOn && <CountUp start={2000} end={100} duration ={1} delay={0.1}/>}+</div>
                       <p className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize: "clamp(20px, 1vw, 10px)",color:"black"}}>Daily User</p>    
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="item">
                       
                        <div style={{ fontSize: '60px',
    textAlign: 'center',
    paddingTop: '32px',
    fontFamily: '"Poppins", sans-serif',
    color: 'rgb(0, 119, 178)'}}>{counterOn && <CountUp start={5000} end={4.2}  decimals={1} duration ={1} delay={0.2}/>}+</div>
                        <p className="usp-text"style={{fontFamily:'"Poppins", sans-serif',fontSize: "clamp(20px, 1vw, 10px)",color:"black"}}>App Rating</p>    
                    </div>
                </div>
            </div>
        </div> 
    </Container>
  
      {/* Rating end */}
    </>
  );
};

export default HeaderAbout;
