import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import WebsiteNavbar from "../WebsiteNavbar";
import CoachPositionQA from "../CoachPosition/CoachPositionQA";
import image from "../../assets/images/coach1.webp";
import engine from "../../assets/images/engine2.webp";
import Select from 'react-select';
import Footer from "../Footer";
import Trainsonwheelscoachfaq from "../Trainsonwheelscoachfaq";
const CoachPosition = () => {
  return (
    <div>
      <WebsiteNavbar />
      <Container fluid>
        <Row className="mt-0 mb-0 form-backgrounds">
          <Row className="justify-content-center align-items-center text-center p-5 ">
            <h3 style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "clamp(24px, 5vw, 45px)",
              textAlign: "center",
            }}>
              Coach Position</h3>
          </Row>

          <form>
            <Row className="p-3 d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row justify-content-center align-items-center text-center">
              <Col className="my-4 mx-2"
                md={6} lg={4} xl={4} xxl={3}
              >
                <Select
                  placeholder="Enter Train Name Or Number"
                  options={[]} // Pass options array here
                  value={null} // Pass selected value here
                  
                />
              </Col>

              <Col className="d-flex flex-column text-center my-4" xxl={2} xl={2} lg={2} md={3} sm={6}>
                <Button
                  className="text-wrap"
                  style={{
                    backgroundColor: "#0077B2",
                    border: "none",
                    width: "100%",
                    height: "60px",
                    fontWeight: "bold",
                  }}
                  type="button"
                  disabled={false} // Pass loading state here
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </Row>
        <Col md={6} lg={6}>
        <Row className="d-flex flex-row justify-content-start align-items-start text-start">
          {/* Coach Position UI */}
          <div className="train-container mt-4 mb-3">
            <h5 className="text-center">Coach Position:</h5>
            <div className="train d-flex justify-content-center overflow-auto train-animation">
              <div className="coach-row d-flex" style={{ width: '100%' }}>
                {/* Replace data.coachPosition.map with static data */}
                {[1, 2, 3, 4].map((coach, index) => (
                  <div key={index} className="coach-item text-center m-2">
                    <div className="coach text-center p-2 bg-light rounded">
                      Coach {coach}
                    </div>
                    <img
                      style={{ height: "40px", width: "90px" }}
                      src={index === 0 ? engine : image}
                      alt={`Coach ${index + 1}`}
                      title="Coach Position Image"
                      className="coach-image mt-2 coach-animation"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Train Card UI */}
          <div className="train-card-container">
            <Card className="train-card">
              <div className="train-info">
                <h3 className="train-name">Train Name</h3>
                <div className="train-details">
                  <span className="train-number">Train Number</span>
                  <span className="train-route">
                    Source <FaArrowRight /> Destination
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Train Routes Table */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Table className="mt-3 shadow rounded text-center" style={{ maxWidth: "700px", backgroundColor: "#f8f9fa", borderRadius: "10px", overflow: "hidden" }}>
              <thead style={{ backgroundColor: "#d9dadb", fontSize: "20px", fontWeight: "bold", color: "#333" }}>
                <tr>
                  <th colSpan="2" style={{ padding: "10px", backgroundColor: "#d9dadb", fontSize: "25px" }}>
                    Train Routes
                  </th>
                </tr>
                <tr>
                  <th style={{ padding: "10px" }}>Station Name</th>
                  <th style={{ padding: "10px" }}>Station Code</th>
                </tr>
              </thead>
              <tbody>
                {[{ stationName: 'Station 1', stationCode: 'ABC' }, { stationName: 'Station 2', stationCode: 'DEF' }].map((station, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "inherit" }}>
                    <td style={{ padding: "10px" }}>{station.stationName}</td>
                    <td style={{ padding: "10px" }}>{station.stationCode}</td>
                    
                  </tr>,
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "inherit" }}>
                    <td style={{ padding: "10px" }}>{station.stationName}</td>
                    <td style={{ padding: "10px" }}>{station.stationCode}</td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Row>
        <Trainsonwheelscoachfaq/>
        </Col>
        <Col md={6} lg={6}> </Col>
      </Container >
      <Footer />
    </div>
  );
};

export default CoachPosition;
