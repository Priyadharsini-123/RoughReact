import React from "react";
import Fromstation from "../assets/images/From_train.svg";
import { Button, Card } from "react-bootstrap";
import Swap from "../assets/images/Swap.svg";
import Tostation from "../assets/images/To_train.svg";
import Date from "../assets/images/Date.svg";

const Sitting = () => {
  return (
    <>
      <div className="desktoptrainseat">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div
                style={{
                  fontSize: "21px",
                  fontWeight: 400,
                  padding: "1.44vw 1.9vw 0 1.9vw",
                  fontFamily: "Poppins, sans-serif",
                  color: "black",
                  textWrap: "nowrap",
                  textTransform: "uppercase",
                }}
              >
                Check Seat Availability
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 m-3 d-flex flex-wrap">
              <div style={{ position: "relative" }}>
                <input
                  id="From"
                  placeholder="Enter From Station"
                  type="text"
                  className="station"
                />
                <img
                  alt="From icon"
                  loading="lazy"
                  className="From"
                  src={Fromstation}
                />
              </div>
              <div className="col-md-1 m-1">
                <img
                  alt="swap"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="swap-image"
                  src={Swap}
                  style={{ color: "transparent" }}
                />
              </div>
              <div style={{ position: "relative", width: "calc(100% - 21vw)" }}>
                <input
                  id="To"
                  placeholder="Enter To Station"
                  type="text"
                  className="tostation"
                />
                <img
                  alt="To icon"
                  loading="lazy"
                  className="To"
                  src={Tostation}
                />
              </div>
            </div>
            <div className="col-md-3 m-3 ">
              <div className="row Datefull">
                <div className="col-6" style={{ width: "32%" }}>
                  <div className="input-wrapper ">
                    <input id="Date" value={"Tue, 20 Apr"} type="text" />
                    <label htmlFor="" className="labelin">
                      Date
                    </label>
                    <img alt="Date icon" src={Date} />
                  </div>
                </div>
                <div className="col-sm-8 d-none d-md-flex align-items-center">
                  <div className="date-inputs-row">
                    <input id="date" className="dateinput" value={"21 Apr"} />
                    <input id="date" className="dateinput" value={"22 Apr"} />
                    <div className="search">Search</div>
                  </div>
                </div>

                <div className="col-6  d-flex align-items-center d-md-none">
                  <div className="bg" style={{ marginRight: "4px" }}>
                    Today
                  </div>
                  <div className="bg" style={{ marginRight: "4px" }}>
                    Tomorrow
                  </div>
                  <div
                    className="bg"
                    style={{ marginRight: "4px", whiteSpace: "nowrap" }}
                  >
                    Day After
                  </div>
                </div>
              </div>
            </div>

            {/* General start */}
            <div className="row   d-md-none class">
              <div className="col">
                <div className="custom-column">General</div>
              </div>
              <div className="col">
                <div className="custom-column">Tatkal</div>
              </div>
              <div className="col" style={{}}>
                <div className="custom-column">Ladies</div>
              </div>
            </div>
            {/* General end */}
            <div className="col-12 d-flex justify-content-center d-md-none">
              <button type="button" className=" search">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitting;
