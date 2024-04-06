import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Rupee from '../assets/images/Rupee.png'
import Seat from "../assets/images/seat.png";
import Train from "../assets/images/train.png";
import { Form, Button, Card } from "react-bootstrap"; // Assuming Material-UI is used for styling
const Fare = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchSubmit = () => {
    // Logic for handling search submit
    console.log("Search submitted:", searchValue);
  };
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };
  return (
    <>
      <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
        <div
          className="card-header  primary-background px-0 mx-md-0 border"
          style={{
           maxWidth: "600px",
          width: "100%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "5px",
          }}
        >
          {/* <============================Nav bar Option icon start=======================> */}

          <ul className="nav header-links nav-pills nav-pills-warning nav-pills-icons justify-content-around p-0">
            <li>
              <a role="tablist" className="nav-link header-links" href="#">
                <div className="img-container p-2">
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
            {/* <train station start*/}
            <li className="nav-item">
              <a role="tablist" className="nav-link header-links" href="#">
                <div className="img-container p-2">
                  <img
                    src={Train}
                    alt=" train Station"
                    className="mt-1 mx-auto mt-md-0 d-block"
                    style={{ height: "40px", width: "40px" }}
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
            {/* <train station end*/}

            {/* train fare start*/}
            <li className="nav-item">
              <a role="tablist" className="nav-link header-links" href="#">
                <div className="img-container p-2">
                  <img
                    src={Rupee}
                    alt="train fare"
                    className="mt-1 mx-auto mt-md-0 d-block"
                    style={{ width: "40px", height: "40px" }}
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
          {/* train fare end*/}

          {/* <============================Nav bar Option icon end=======================> */}
          {/* <============================Check for fare start=======================> */}
          {/* <div>
            <h1
              class="text-center"
              style={{ margin: ".67em 0 .2em", FontSize: "1rem" }}
            >
              {" "}
              Check for Fare{" "}
            </h1>

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
                  Search
                </Button>
              </div>
            </div>
          </div> */}
          {/* <============================Check for fare end=======================> */}

          {/* <============================Paasenger Catogory choose row start=======================> */}
           <div className="row">
            {/* From row start */}
            <div className="col">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "15px",
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
                <select>
                  <option value="" className="option"></option>
                  {/* Add other options here if needed */}
                </select>
              </div>
            </div>
            {/* From row end */}

            {/* To row start */}
            <div className="col">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "15px",
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
                <select>
                  <option value="" className="option"></option>
                  {/* Add other options here if needed */}
                </select>
              </div>
            </div>
          </div> 

          {/* To row end */}
          {/* Date row start */}

          <div className="row">
            <div className="col">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "15px",
                }}
              >
                <label
                  className="date"
                  htmlFor="choosedate"
                  id="date"
                  aria-owns="choose-date"
                >
                  Date
                </label>
                <select>
                  <option value="" className="option"></option>
                  {/* Add other options here if needed */}
                </select>
              </div>
            </div>
            {/* Date row end */}

            {/* Class row start */}
            <div className="col">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "15px",
                }}
              >
                <label
                  className="class"
                  htmlFor="class"
                  id="class"
                  aria-owns="class"
                >
                  Class
                </label>
                <select>
                  <option value="" className="option"></option>
                  {/* Add other options here if needed */}
                </select>
              </div>
            </div>
          </div>
          {/* class row end */}
          {/* Catagory row start */}
          <div className="row">
            <div className="col">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "15px",
                }}
              >
                <label
                  className="catagory"
                  htmlFor="catagory"
                  id="date"
                  aria-owns="catogory"
                >
                  Catogory
                </label>
                <select>
                  <option value="" className="option"></option>
                  {/* Add other options here if needed */}
                </select>
              </div>
            </div>
            {/* Catogory row end */}

            {/* Quota row start */}
            <div className="col">
              <div
                className="from"
                style={{
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "15px",
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
                <select>
                  <option value="" className="option"></option>
                  {/* Add other options here if needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Quota row end  */}
{/* <============================Paasenger Catogory choose row start=======================> */}
          <button style={{backgroundColor: '#0077b2',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
  color: '#fff',
  borderRadius: '2px',
  marginBottom: '10px',
  border:'none'}}>Get fare</button>
        </div>
        <div className="table">
        <Card>
      <Card.Body>
        <Card.Title>Fare Details</Card.Title>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Base Charge</td>
              <td>{formatter.format(4898)}</td>
            </tr>
            <tr>
              <td>Reservation Charge</td>
              <td>{formatter.format(60)}</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>{formatter.format(75)}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td>{formatter.format(5033)}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  
        </div>
      </div>
    </>
  );
};

export default Fare;
