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
            margin: "12px",
            width: "80vw",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px",
          }}
        >
          <div className="container ">
            <div className="row ">
              <div className="col-sm  m-3 bg " style={{ position: "relative" }}>
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
             <div>
             <img
                 
                 className="swap-image "
                  alt="swap"
                  loading="lazy"
                  width="40"
                  height="42"
                  decoding="async"
                  data-nimg="1"
                 
                  src={Swap}
                  style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
                /> 
             </div>
                
                <div  className="" style={{ position: "relative", display: "inline-block" }}>
                  <input
                    id="To"
                    placeholder="Enter To Station"
                    type="text"
                    className="tostation"
                  />
                  <img
                    alt="Frame icon"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      left: "0.2em",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "30px",
                      height: "24px",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    
                    src={Tostation}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Wheelsseat;
