import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Footer";
import PnrQA from "../PnrStatus/PnrQA";

import WebsiteNavbar from "../../../components/WebsiteNavbar";
import mixpanel from "mixpanel-browser";

const PnrStatus = () => {
  const [pnrNumber, setPnrNumber] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); 
  
  const handlePnrSearch = () => {
    mixpanel.track("Pnr Number Searched");
  };
  
  const handleSubmit = async () => {
    try {
        setLoading(true); 
        mixpanel.track("Pnr button clicked ");

        if (pnrNumber.trim() === "") {
            toast.error("Please enter a valid PNR number", { autoClose: 1000 });
            return;
        }

        if (pnrNumber.trim().length < 10) {
            toast.error("PNR number must be at least 10 characters ", { autoClose: 1000 });
            return;
        }

        const response = await axios.get(
            `https://api-trainsonwheels.onrender.com/info/trigger-pnr/${pnrNumber}`
        );

        if (response.data) {
            setData(response.data.data.data);
            console.log(response.data.data.data);
            toast.success(response.data.message, { autoClose: 1000 });
        } else {
            toast.error(
                response.error?.data.error || "Failed to fetch data",
                { autoClose: 1000 }
            );
        }
    } catch (error) {
        console.error(error);
        toast.error("An error occurred", { autoClose: 1000 });
    } finally {
        setLoading(false); 
    }
};

  return (
    <div>
      <WebsiteNavbar/>
      <Container fluid >
      <Row className="form-background mt-0" >
          
          <Row className="justify-content-center align-items-center text-center p-5">
            <h3 style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "clamp(24px, 5vw, 45px)",
          textAlign: "center", 
        }}>
              PNR Status</h3>
          </Row>

          <form>
            <Row className="p-3 d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row justify-content-center align-items-center text-center">
              <Col className="my-4 mx-2"      md={6} lg={4} xl={4} xxl={3}>
                <div className="input-group">
                  <input
                    style={{ width: "100%", height: "60px", }}
                    type="text"
                    placeholder="Enter 10 Digit PNR Number"
                    className="form-control custom-input"
                    value={pnrNumber}
                    onChange={(e) => setPnrNumber(e.target.value)}
                    onClick={handlePnrSearch}
                  />
                </div>
              </Col>
              <Col
                className="d-flex flex-column text-center my-4"
                xxl={2} xl={2} lg={2} md={3} sm={6}
              >
                <Button
        className="text-wrap"
          style={{
            backgroundColor: "#0077B2",
            border: "none",
            width: "100%", 
            height: "60px",
            fontWeight: "bold",
          }}
                  onClick={handleSubmit}
                  type="button"
                
                  disabled={loading} 
                >
                  {loading ? "Loading..." : "Submit"} 
                </Button>
              </Col>
            </Row>
          </form>
        </Row>
<Col md={6} lg={6}>
          {/* Render PNR status card only if PNR number and data are available */}
          {pnrNumber && data && (
            <Row className="m-2 mt-5 d-flex flex-row justify-content-center align-items-center text-start ">
              <Card
                className="p-4 text-center" 
                style={{
                  backgroundColor: "White",
                  borderRadius: "10px", 
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
                  width: "900px", 
                  maxWidth: "100%",
                }}
              >
                <h3 className="text-center mb-4">PNR: {pnrNumber}</h3> 
                <h6 className="mb-2">{data.trainInfo.name}</h6> 
                <div className="mb-2">
                  <span>
                    {data.trainInfo.boarding}-{data.boardingInfo.stationName},
                    {data.boardingInfo.departureTime}
                  </span>
                  <FaArrowRight className="mx-1 my-1" />
                  <span>
                    {data.destinationInfo.stationName}-{data.trainInfo.destination},
                    {data.destinationInfo.arrivalTime}
                  </span>
                </div>
                <div>
                  <span>{data.trainInfo.dt}</span>
                  <span className="ml-2">Expected platform: {data.boardingInfo.platform}</span>
                </div>
              </Card>
            </Row>
          )}

          {/* Render passenger status card only if PNR number and data are available */}
          {pnrNumber && data && (
            <Row className="m-2 mt-5 mb-3 d-flex justify-content-center">
              <Card className="p-5" style={{ borderRadius: "20px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "White", 
                  width: "900px", 
                  maxWidth: "100%",
              }}>
                <h2 className="text-center mb-4 text-nowrap">Passenger Status</h2>
                <h5 className="mb-3">Seat Information:</h5>
                {data && data.seatInfo ? (
                  <p className="mb-4text-nowrap ">Berth: {data.seatInfo.berth}, Coach: {data.seatInfo.coach}, No Of Seats: {data.seatInfo.noOfSeats}</p>
                ) : (
                  <p className="mb-4">Seat information not available</p>
                )}
                <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr className="text-nowrap" style={{fontFamily:'"Poppins", sans-serif',fontSize: "clamp(15px, 1vw, 10px)"}} >
            <th>Passenger</th>
            <th>Current Berth No</th>
            <th>Current Coach</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.passengerInfo &&
            data.passengerInfo.map((passenger, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{passenger.currentBerthNo}</td>
                <td>{passenger.currentCoach}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
              </Card>
            </Row>
            
          )}
             <PnrQA/>
      </Col >
   
      <Col md={6} lg={6}> </Col>
      </Container>
      <Footer/>
    </div>
  );
};

export default PnrStatus;
