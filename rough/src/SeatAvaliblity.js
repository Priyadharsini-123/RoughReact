import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Rupee from "../src/assets/images/Indian Rs.png";
import Seat from "../src/assets/images/Train Seat.png";
import Train from "../src/assets/images/Train Station.png";

const SeatAvaliblity = () => {
  return (
    <>

<div
      style={{
        width: '58px',
        height: '58px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        margin: '24px 0 19px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></div> 
          
        
        
          <Container style={{ width: '1200px', background: 'hsl(0, 0%, 100%)', boxShadow: '0px 2px 5px #0f1417', borderRadius: '20px', padding: '32px 40px 24px', margin: '0 auto' }}>
           
            <ul className="nav header-links  justify-content-around ">
            <li className="nav-item">
              <a role="tablist" className="nav-link header-links" href="#">
                <div className="img-container  navimg">
                  <img
                    src={Seat}
                    alt="Seat Availability"
                    className="mt-1 mx-auto mt-md-0 d-block"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div
                  className="d-block d-sm-inline-block text-dark"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <div className="d-block d-sm-inline-block ">Seat</div>{" "}
                  Availability
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a role="tablist" className="nav-link header-links" href="#">
                <div className="img-container  ">
                  <img
                    src={Train}
                    alt="Train Station"
                    className="mt-1 mx-auto mt-md-0 d-block"
                    style={{ height: "42px", width: "42px" }}
                  />
                </div>
                <div
                  className="d-block d-sm-inline-block text-dark"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <div className="d-block d-sm-inline-block">Check</div> Station
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a role="tablist" className="nav-link header-links" href="#">
                <div className="img-container navimg">
                  <img
                    src={Rupee}
                    alt="Train Fare"
                    className="mt-1 mx-auto mt-md-0 d-block"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div
                  className="d-block d-sm-inline-block text-dark"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <div className="d-block d-sm-inline-block">Fare</div>{" "}
                  Calculator
                </div>
              </a>
            </li>
          </ul>
          
            
            <div className="d-flex align-items-center m-4">
              <div style={{marginRight: '12px',
      position: 'relative'}}>
                <div  style={{ width: '260px',borderRadius: '8px',
      height: '72px',
      background: '#fff',
      cursor: 'pointer',
      position: 'relative',
      padding: '16px 18px 15px',
      border: '2px solid #e1e7ee' }}>
                  <p style={{fontSize: '14px',
        fontWeight: 500,
        color: '#777',
        position: 'absolute',
        padding: '0 4px',
        left: '14px',
        top: '-10px',
        backgroundColor: '#fff'}}>From</p>
                  <p  style={{ color: '#C2C2C2', paddingTop: '5px',display: 'flex',
      alignItems: 'center',
     
      fontSize: '18px',
      fontWeight: 600,
      color: '#c2c2c2',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis' }}>Enter Source Name</p>
                  
                </div>
                <span style={{boxShadow: '0 0 10px rgba(0,0,0,.103)',
        borderRadius: '12px',
        backgroundColor: '#fff',
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'absolute',
        right: '-24px',
        top: '18px',
        zIndex: 1,
        padding: '8px'}}>
                  <img src="https://gos3.ibcdn.com/reverse-arrow-1668596930.png" alt="arrow icon" width="20" height="20" />
                </span>
              </div>
              <div style={{marginRight: '12px',
      position: 'relative'}}>
                <div  style={{ width: '260px',borderRadius: '8px',
      height: '72px',
      background: '#fff',
      cursor: 'pointer',
      position: 'relative',
      padding: '16px 18px 15px',
      border: '2px solid #e1e7ee' }}>
                  <p className="Seatfrom Destinationto">To</p>
                  <p className="Seatchioce" style={{ color: '#C2C2C2', paddingTop: '5px' }}>Enter Destination Name</p>
                 
                </div>
              </div>
              <div className="Seatcard-inner-in">
                <div className="Seatcard-inner-left" style={{ width: '142px' }}>
                  <span className="DownArrow fswDownArrow"></span>
                  <p className="Seatfrom">Departure</p>
                  <p className="Seatchioce" style={{ color: '#141823' }}>09 Apr'24</p>
                 
                </div>
              </div>
              {/* <div className="Seatcard-inner-in styles_FswFieldItemIsFullWidth__KgdCI">
                <div className="styles_rdDySlct__dEHlH">
                  <button className="styles_rdDySlct__optn__0Ur06 ">
                    <span className="styles_rdDySlct__tatklTag__e2tv2">Tatkal open</span>
                    <div className="makeFlex hrtlCenter appendTop8">
                      <span className="styles_rdDySlct__optnRdio__xvPK1 "></span>
                      <span className="styles_rdDySlct__optnLbl__j38Yv ">Today</span>
                    </div>
                  </button>
                  <button className="styles_rdDySlct__optn__0Ur06 ">
                    <span className="styles_rdDySlct__tatklTag__e2tv2">Tatkal open</span>
                    <div className="makeFlex hrtlCenter appendTop8">
                      <span className="styles_rdDySlct__optnRdio__xvPK1 "></span>
                      <span className="styles_rdDySlct__optnLbl__j38Yv ">Tomorrow</span>
                    </div>
                  </button>
                  <button className="styles_rdDySlct__optn__0Ur06 ">
                    <span className="styles_rdDySlct__tatklTag__e2tv2">Tatkal open</span>
                    <div className="makeFlex hrtlCenter appendTop8">
                      <span className="styles_rdDySlct__optnRdio__xvPK1 "></span>
                      <span className="styles_rdDySlct__optnLbl__j38Yv ">Day After Tomorrow</span>
                    </div>
                  </button>
                </div>
              </div> */}
            </div>
             <div className="Seatbutton">
              <span className="Seatsearch" style={{ marginTop: '60px' }}>SEARCH SEATS</span>
            </div> 
            </Container>
        
     
 








      
    </>
  );
}

export default SeatAvaliblity;
