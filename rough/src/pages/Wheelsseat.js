import React from "react";
import { Button, Card } from "react-bootstrap";
import Fromstation from "../assets/images/From_train.svg";
import Swap from "../assets/images/Swap.svg";
import Tostation from "../assets/images/To_train.svg";

const Wheelsseat = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card
          className=""
          style={{
            margin: "106px",
            width: "80vw",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-3 m-3 bg" style={{ position: "relative" }}>
                <input
                  id="From"
                  placeholder="Enter From Station"
                  type="text"
                  className="station"
                />
                <img
                  alt="Frame icon"
                  loading="lazy"
                  className="From"
                  decoding="async"
                  data-nimg="1"
                  src={Fromstation}
                />
              </div> 
              <div className="col-sm-1 d-flex justify-content-center align-items-center no-gutters">
                <img
                  alt="swap"
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                  className="cursor-pointer"
                  src={Swap}
                  style={{ color: "transparent" }}
                />
              </div> 
              <div className="col-sm-3 m-3 bg" style={{ position: "relative" }}>
                <input
                  id="To"
                  placeholder="Enter To Station"
                  type="text"
                  className="tostation"
                />
                <img
                  alt="Frame icon"
                  loading="lazy"
                  className="To"
                  decoding="async"
                  data-nimg="1"
                  src={Tostation}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Wheelsseat;
