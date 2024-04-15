import React from "react";
import { Card, Container } from "react-bootstrap";
import Rupee from "../assets/images/Indian Rs.png";
import Seat from "../assets/images/Train Seat.png";
import Train from "../assets/images/Train Station.png";
import { Button } from "react-bootstrap";
const Trainseat = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card
          className=""
          style={{
            margin: "12px",
            width: "100%",
            boxShadow: "0px 2px 5px #0f1417",
            borderRadius: "10px",
          }}
        >
          <div className=" px-0">
            {/* <============================Nav bar Option icon start=======================> */}
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
                    <div className="d-block d-sm-inline-block">Seat</div>{" "}
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
                    <div className="d-block d-sm-inline-block">Check</div>{" "}
                    Station
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
          </div>

          {/* <===================From start================> */}
          <div className="container">
          <div className="row">
  {/* First column */}
  <div className="col-md-6 position-relative"> {/* Added position-relative */}
    <div className="row">
      <div className="col-md-6">
        <div className="From">
          <p className="FromLabel">From</p>
          <p className="Source">Enter Source Name</p>
        </div>
        {/* Adjusted the position of the image */}
        <span style={{
          boxShadow: '0 0 10px rgba(0,0,0,.103)',
          borderRadius: '12px',
          backgroundColor: '#fff',
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'absolute',
          left: '267px',
          top: '18px',
          zIndex: 1,
          padding: '8px'
        }}>
          <img src="https://gos3.ibcdn.com/reverse-arrow-1668596930.png" alt="arrow icon" width="20" height="20" />
        </span>
      </div>
      <div className="col-md-6">
        <div className="to">
          <p className="Seatfrom">To</p>
          <p className="destination">Enter Destination Name</p>
        </div>
      </div>
    </div>
  </div>
  {/* Second column */}
  <div className="col-md-3">
    <div class="row">
      <div class="col-md-6">
        <div className="Seatcard-inner-left">
          <span className="DownArrow fswDownArrow"></span>
          <p className="Seatfrom">Date</p>
          <p className="destination" style={{ color: "#141823" }}>
            09 Apr'24
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div className="Seatcard-inner-left">
          <span className="DownArrow fswDownArrow"></span>
          <p className="Seatfrom">Quota</p>
          <p className="destination" style={{ color: "#141823" }}>
            General
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="col-md-3">
    <div class="row">
      <div class="col-md-4">
        <Button  style={{ border:'2px solid black' }}>
         Today
        </Button>
      </div>
      <div class="col-md-4">
        <Button style={{ border:'2px solid black' }}>
        Tomorrow
        </Button>
      </div>
      <div class="col-md-4">
        <Button style={{ border:'2px solid black' }}>
         Day after Tomorrow
        </Button>
      </div>
    </div>
  </div> */}
  <div className="Seatbutton">
    <span className="Seatsearch" style={{ marginTop: '60px' }}>SEARCH SEATS</span>
  </div>
</div>

          </div>
        </Card>
      </div>
    </>
  );
};

export default Trainseat;