import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Footer";
import CoachPositionQA from "../CoachPosition/CoachPositionQA";
import image from "../../../assets/images/coach1.webp";
import engine from "../../../assets/images/engine2.webp";
import WebsiteNavbar from "../../../components/WebsiteNavbar";
import mixpanel from "mixpanel-browser";
import Select from 'react-select';
import { useGetTrainDataQuery } from "../../../redux/features/api/CoachPositionApi";

const CoachPosition = () => {
  const [coachPosition, setCoachPosition] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const { data: TrainData } = useGetTrainDataQuery(coachPosition);

  const handleCoachPositionSearch = () => {
    mixpanel.track("CoachPosition Searched");
  };

  useEffect(() => {
    if (TrainData && TrainData?.data) {
      const options = TrainData?.data.map(train => ({
        value: train.TrainNo,
        label: `${train.TrainNo} - ${train.TrainName}`,
      }));
      setOptions(options);
    }
  }, [TrainData, coachPosition]);

  const handleSubmit = async () => {
    mixpanel.track("CoachPosition button clicked");

    if (coachPosition.trim().length < 5) {
      toast.error("Please enter a valid train number", { autoClose: 1000 });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api-trainsonwheels.onrender.com/info/coachPosition2?trainNo=${coachPosition}`
      );
      if (response.data && response.data.data) {
        setData(response.data.data);
        toast.success(response.data.message, { autoClose: 1000 });
      } else {
        toast.error(
          response.error?.data?.error || "Failed to fetch data",
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

  const customStyles = {
    control: provided => ({
      ...provided,
      height: '60px',
      width: '100%',
    }),
  };

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
                  styles={customStyles}
                  placeholder="Enter Train Name Or Number"
                  options={options}
                  value={options.find(option => option.value === coachPosition)}
                  onChange={selectedOption => {
                    setCoachPosition(selectedOption.value);
                    handleCoachPositionSearch();
                  }}
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
        <Row className="d-flex flex-row justify-content-start align-items-start text-start">
{coachPosition && data && (
  <div className="train-container mt-4 mb-3">
    <h5 className="text-center">Coach Position:</h5>
    <div className="train d-flex justify-content-center overflow-auto train-animation">
      <div className="coach-row d-flex" style={{ width: `${data.coachPosition.length * 100}px` }}>
        {data.coachPosition.map((coach, index) => (
          <div key={index} className="coach-item text-center m-2">
            <div className="coach text-center p-2 bg-light rounded">
              {coach}
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
)}
       {coachPosition && data && (
            <div className="train-card-container">
              <Card className="train-card">
                <div className="train-info">
                  <h3 className="train-name">{data.trainName}</h3>
                  <div className="train-details">
                    <span className="train-number">{data.trainNumber}</span>
                    <span className="train-route">
                      {data.source} <FaArrowRight /> {data.destination}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {coachPosition && data && (
              <Table
                className="mt-3 shadow rounded text-center"
                style={{
                  maxWidth: "700px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <thead
                  style={{
                    backgroundColor: "#d9dadb",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  <tr>
                    <th
                      colSpan="2"
                      style={{
                        padding: "10px",
                        backgroundColor: "#d9dadb",
                        fontSize: "25px",
                      }}
                    >
                      Train Routes
                    </th>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px" }}>Station Name</th>
                    <th style={{ padding: "10px" }}>Station Code</th>
                  </tr>
                </thead>
                <tbody>
                  {data.listOfStations.map((station, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#f2f2f2" : "inherit",
                      }}
                    >
                      <td style={{ padding: "10px" }}>{station.stationName}</td>
                      <td style={{ padding: "10px" }}>{station.stationCode}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Row>
        <CoachPositionQA/>
        </Col>
        <Col md={6} lg={6}> </Col>
      </Container >
      <Footer />
    </div>
  );
};

export default CoachPosition;
