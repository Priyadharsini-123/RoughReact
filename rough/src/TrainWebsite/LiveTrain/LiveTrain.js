import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import WebsiteNavbar from "../../../components/WebsiteNavbar";
import Footer from "../Footer";
import LiveTrainQA from "../LiveTrain/LiveTrainQA";
import mixpanel from "mixpanel-browser";
import { toast } from "react-toastify";
import axios from "axios";
import { useGetTrainDataQuery } from "../../../redux/features/api/CoachPositionApi";
import Select from 'react-select';
import track from "../../../assets/images/livetraingif.gif"

const LiveTrain = () => {
  const [liveTrain, setLiveTrain] = useState("");
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const { data: TrainData } = useGetTrainDataQuery(liveTrain); 


  useEffect(() => {
    if (TrainData && TrainData.data) {
      const options = TrainData.data.map(train => ({
        value: train.TrainNo, 
        label: `${train.TrainNo} - ${train.TrainName}`, 
      }));
      setOptions(options);
    }
   
 }, [TrainData, liveTrain]);

 
  const handleLiveTrainSearch = () => {
    mixpanel.track("Live Train Searched");
  };

  const handleSubmit = async () => {
    if (liveTrain.trim().length < 5) {
      toast.error("Please enter a valid train number", { autoClose: 1000 });
      return;
    }
    try {
      setLoading(true);
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
  
      const response = await axios.get(
        `https://api-trainsonwheels.onrender.com/info/liveTrain2?trainNo=${liveTrain}&date=${formattedDate}`
      );
  
      if (response.data && response.data.data && response.data.data.length > 0) {
        setData(response.data.data[0]);
        console.log(response.data.data[0]);
        toast.success(response.data.message, { autoClose: 1000 });
      } else {
     
        toast.error(" This Train Is Not Running Today", { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };
  
  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: '60px',
      width: '100%',
    }),
  };
  
  return (
    <div>
      <WebsiteNavbar />
      <Container fluid>
      <Row className="mt-0 form-backgroundss">
      <Row className="justify-content-center align-items-center text-center p-5">
        <h3 style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "clamp(24px, 5vw, 45px)",
          textAlign: "center", 
        }}>Live Train Running Status</h3>
      </Row>
        <form>
            <Row className="p-3 d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row justify-content-center align-items-center text-center">
              <Col className="my-4 mx-2" md={6} lg={4} xl={4} xxl={3}>
                <Select
                  styles={customStyles}
                  placeholder="Enter Train Name Or Number"
                  options={options}
                  value={options.find(option => option.value === liveTrain)}
                  onChange={selectedOption => {
                    console.log("Selected value:", selectedOption.value);
                    setLiveTrain(selectedOption.value);
                    handleLiveTrainSearch(); 
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
        {data && data.stations && data.stations.length > 0 && (
          <Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
  <Table responsive className="text-center mt-5" style={{ width: '100%', backgroundColor: 'rgb(242, 244, 244)', fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
    <thead style={{ backgroundColor: "black", borderBottom: "2px solid #dee2e6" }}>
      <tr>
        <th style={{ width: "12%" }} className="no-border tracking-column-header">Tracking</th>
        <th style={{ width: "18%" }}>Station</th>
        <th style={{ width: "22%" }}>Scheduled Time</th>
        <th style={{ width: "20%" }}>Actual</th>
        <th style={{ width: "20%" }}>Delay</th>
      </tr>
    </thead>
    <tbody>
      {data.stations.map((station, index) => {
        let lastIndex = 0;
        for (let i = data.stations.length - 1; i >= 0; i--) {
          if (data.stations[i].arr === true) {
            lastIndex = i;
            break;
          }
        }

        return (
          <tr key={index} style={{ height: "20px", backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
            <td style={{ border: "none", padding: 0, height: "100%", width: "10px" }} className="no-border tracking-column-cell">
              <div className="trackerline">
                {index === lastIndex ? (
                  <div className="imagecontainer">
                    <img
                      src={track}
                      alt="TrainsOnWheels LiveTrack"
                      title="TrainsOnWheels LiveTrack"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                ) : null}
              </div>
            </td>
            <td>
              <div className="station-info">
                <div className="st-name">{station.sname} ({station.stnCode})</div>
                <div className="additional-info">{station.distance} km (day {station.day})</div>
              </div>
            </td>
            <td>
              <div className="station-info">
                <div className="st-name">Arr: {station.arrive ? station.arrive : '-'}</div>
                <div className="additional-info">Dep: {station.depart ? station.depart : '-'}</div>
              </div>
            </td>
            <td>
              <div className="station-info ">
                <div className="font-weight-bold text-success">
                  <time>{station.actArr ? station.actArr : '-'}</time>
                </div>
                <div className="font-weight-bold text-danger">
                  <time>{station.actDep ? station.actDep : '-'}</time>
                </div>
              </div>
            </td>
            <td>
              <div className="font-weight-bold text-danger mt-3">
                {station.arrive && station.actArr ? (
                  <time>{parseInt(station.arrive) - parseInt(station.actArr)} min</time>
                ) : (
                  '-'
                )}
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
</div>

          </Row>
          
        )}
        <LiveTrainQA/>
        </Col>
        <Col md={6} lg={6}> </Col>
      </Container>
      <Footer/>
    </div>
  );
};

export default LiveTrain;
