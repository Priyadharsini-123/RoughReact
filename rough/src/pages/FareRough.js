import { useState } from "react";
import {  Button, Card } from "react-bootstrap";

import Rupee from "../assets/images/Indian Rs.png";
import Seat from "../assets/images/Train Seat.png";
import Train from "../assets/images/Train Station.png";

const FareRough = () => {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const clearInput = () => {
    setInputValue("");
  };
  const handleSearchSubmit = () => {
    // Logic for handling search submit
    console.log("Search submitted:", searchValue);
  };
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return (
    <div className="d-flex justify-content-center">
      <Card
        className=""
        style={{
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "5px",
        }}
      >
        <div className=" px-0">
          {/* <============================Nav bar Option icon start=======================> */}
          <ul className="nav header-links  justify-content-around p-0">
            <li className="nav-item">
              <a role="tablist" className="nav-link header-links" href="#">
                <div className="img-container p-2 navimg">
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
                <div className="img-container p-2 ">
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
                <div className="img-container p-2 navimg">
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
        {/* <============================Nav bar Option icon end=======================> */}

        {/* <============================Check for fare start=======================> */}
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
                Search
              </Button>
            </div>
          </div>
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
          {/* <============================Paasenger Catogory choose row end=======================> */}
        
        <button
          style={{
            backgroundColor: "#0077b2",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
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
   
   
  );
};

export default FareRough;
