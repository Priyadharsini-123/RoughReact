import React, { useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import Rupee from "../assets/images/Indian Rs.png";
 import Seat from "../assets/images/Train Seat.png";
 import Train from "../assets/images/Train Station.png";




const Roughfare = () => {
    const [FromScode, setFromScode] = useState("");
    const [ToScode, setToScode] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [quota, setQuota] = useState("");
    const [classes, setClasses] = useState("");
    const [fare, setFare] = useState(null);
 
    const clearInput = () => {
        // Logic to clear input
      };
    
      const handleSearchSubmit = () => {
        // Logic to handle search submit
      };
    
      const handleGetFare = () => {
        // Logic to get fare
      };
    
      const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      });
    
  return (
    <>
     

      <div className="d-flex justify-content-center mt-3">
        <Card
          className=""
          style={{
            margin: "12px",
            maxWidth: "515px",
            width: "100%",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px",
          }}
        >
          <div className=" px-0">
         
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
         

          <div>
            <h1
              class="text-center"
              style={{ margin: ".67em 0 .2em", FontSize: "1rem" }}
            >
              {" "}
              Check for Fare{" "}
            </h1>
          </div>
          <div className="text-center my-3">
            <div className="col-8 col-sm-6 d-inline-block pl-0">
              <div className="underline-text-input">
                <input
                  type="text"
                  placeholder="Search Train"
                  className="underline-text-input-field"
                  
                 
                />

                <span className="cancel-icon" onClick={clearInput}>
                  &#x2715;
                </span>
              </div>
            </div>
            <div className="d-inline-block">
              <Button
                style={{ background: "#0077b2" }}
                onClick={handleSearchSubmit}
             
              >
               
              </Button>
            </div>
          </div>
  
          <Row>
            {/* From row start */}
            <Col md={6}>
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "38px",
                }}
              >
                <label
                  className="from"
                  htmlFor="from-station"
                  id="from"
                  aria-owns="from-station"
                >
                  From Station
                </label>
                <select className="selectup"
                  value={FromScode}
                  onChange={(e) => setFromScode(e.target.value)}
                  
                >
              
                  
                </select>
              </div>
            </Col>

            {/* From row end */}

            {/* To row start */}
            <Col md={6}>
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "38px",
                }}
              >
                <label
                  className="to"
                  htmlFor="to-station"
                  id="to"
                  aria-owns="to-station"
                >
                  To Station
                </label>
                <select className="selectup"
                  value={ToScode}
                  onChange={(e) => setToScode(e.target.value)}
                  
                >
                  
                </select>
              </div>
            </Col>
          </Row>
         
          {/* Catagory row start */}
          <div className="row">
            <div className="col-md-4">
              <div className="Age">
                <label
                  className="catagory"
                  htmlFor="catagory"
                  id="date"
                  aria-owns="catogory"
                >
                  Age Group
                </label>
                <select
                  id="ageGroup"
                  className="selectdown"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                >
               
                 
                </select>
              </div>
            </div>
            {/* Catogory row end */}

            {/* Quota row start */}
            <div className="col-md-4">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "38px",
                }}
              >
                <label
                  className="quota"
                  htmlFor="quota"
                  id="quota"
                  aria-owns="quota"
                >
                  Quota
                </label>
                <select className="selectdown"
                
                value={quota}
                onChange={(e) => setQuota(e.target.value)}
              
                >
                  
              
                  <option value="GN" className="option">
                    General
                  </option>
                  <option value="TQ" className="option">
                    Tatkal
                  </option>
                  {/* Add other options here if needed */}
                </select>
              </div>
            </div>

            <div className="col md={4}">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "38px",
                }}
              >
                <label
                  className="quota"
                  htmlFor="quota"
                  id="quota"
                  aria-owns="quota"
                >
                  Class
                </label>
                <select className="selectdown"
                 value={classes}
                 onChange={(e) => setClasses(e.target.value)}
                >
               
                </select>
              </div>
            </div>
          </div>

          {/* Quota row end  */}


          <button
            onClick={handleGetFare}
            style={{
              backgroundColor: "#0077b2",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
              color: "#fff",
              borderRadius: "2px",
              marginBottom: "10px",
              border: "none",
            }}
          >
            Get fare
          </button>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
      {fare && Object.keys(fare).length > 0 && (
  <Card
    style={{
      margin: "30px",
      maxWidth: "600px",
      width: "100%",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      borderRadius: "5px",
    }}
  >
    <Card.Body>
      <Card.Title>Fare Details</Card.Title>
      <Table striped bordered hover>
        <tbody>
          {Object.keys(fare).map((fareClass) =>
            fareClass === classes ? (
              <React.Fragment key={fareClass}>
                {Object.keys(fare[fareClass].breakup[quota]).map((key) => (
                  <tr key={key}>
                    <td>{fare[fareClass].breakup[quota][key].text}</td>
                    <td>{formatter.format(fare[fareClass].breakup[quota][key].value)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ) : null
          )}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
)}

      </div>
   
    </>
  );
};

export default Roughfare;


