import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import Rupee from "../../../assets/images/Indian Rs.png";
import Seat from "../../../assets/images/Train Seat.png";
import Train from "../../../assets/images/Train Station.png";
import WebsiteNavbar from "../../../components/WebsiteNavbar";
import Footer from "../Footer";
import { toast } from "react-toastify";
import axios from "axios";

const Fare = () => {
 
  const [Trainnumber, setTrainnumber] = useState("");
  const [ageGroup, setAgeGroup] = useState("ADULT");
  const [classes, setClasses] = useState("");
  const [quota, setQuota] = useState("GN");
  const [FromScode, setFromScode] = useState("");
  const [ToScode, setToScode] = useState("");
  const [data, setData] = useState([]);
  const [fare, setFare] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fareloading, setFareLoading] = useState(false);

  useEffect(() => {
    if (data && data.routes && data.routes.routes && data.routes.routes.length > 0) {
      // Set the first "From Station" as default
      const firstFromStation = data.routes.routes[0].schedule[0].scode;
      setFromScode(firstFromStation);
      // Set the first "To Station" as default
      const lastStopIndex = data.routes.routes[0].schedule.length - 1;
      const firstToStation = data.routes.routes[0].schedule[lastStopIndex].scode;
      setToScode(firstToStation);
    }
  }, [data]);


  useEffect(() => {
    if (data && data.fare && data.fare.fare && Object.keys(data.fare.fare).length > 0) {
      const defaultClass = Object.keys(data.fare.fare)[0];
      setClasses(defaultClass);
    }
  }, [data]);

  console.log(Trainnumber);
  console.log(ageGroup);
  console.log(FromScode);
  console.log(ToScode);
  console.log(fare);

  const clearInput = () => {
    setTrainnumber("");
  };

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  console.log(Trainnumber);
  console.log(data);

  const handleSearchSubmit = async () => {
    console.log("print1");

    try {
      setLoading(true);
      console.log("print2");

     
      console.log("Trainnumber:", Trainnumber);

      if (!Trainnumber) {
        toast.error("Train number is missing", { autoClose: 1000 });
        return;
      }

      const response = await axios.get(
        `https://api-trainsonwheels.onrender.com/info/fareCalculator/${Trainnumber}`
      );

      console.log("Response:", response);

      if (response && response.data.data) {
        setData(response.data.data);
        console.log(response.data.data);
        toast.success(response.data.message, { autoClose: 1000 });
      } else {
        console.log(response.error);
        toast.error(response.error?.data?.error || "Failed to fetch data", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("An error occurred", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };




  const handleGetFare = async () => {
    console.log("print1");

    try {
      setFareLoading(true);
      console.log("print2");

      const response = await axios.get(
        `https://api-trainsonwheels.onrender.com/info/fareCalculator2?fromStnCode=${FromScode}&destStnCode=${ToScode}&trainNo=${Trainnumber}&ageGroup=${ageGroup}`
      );

      console.log("Response:", response);
      console.log(FromScode);
      console.log(ToScode);
      console.log(ageGroup);
     console.log(Trainnumber);
     console.log(classes);
     console.log(quota);



      if (response && response.data.data) {
        setFare(response.data.data.fare);
        console.log(response.data.data.fare);
        toast.success(response.data.message, { autoClose: 1000 });
      } else {
        console.log(response.error);
        toast.error(response.error?.data?.error || "Failed to fetch data", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("An error occurred", { autoClose: 1000 });
    }
    finally {
      setFareLoading(false);
    }
  };

  return (
    <>
      <WebsiteNavbar />

      <div className="d-flex justify-content-center mt-5">
        <Card
          className=""
          style={{
            margin: "12px",
            maxWidth: "515px",
            width: "100%",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px",
            marginTop:"40px"
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
                  value={Trainnumber}
                  onChange={(e) => setTrainnumber(e.target.value)}
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
                disabled={loading}
              >
                {loading ? "Loading..." : "Search"}
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
                <select
                  value={FromScode}
                  onChange={(e) => setFromScode(e.target.value)}
                  className="selectup"
                >
              
                  {data?.routes?.routes[0]?.schedule?.map((stop, index) => (
                    <option key={index} value={stop.scode}>
                      {stop.sname} - ({stop.scode})
                    </option>
                  ))}
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
                <select
                  value={ToScode}
                  onChange={(e) => setToScode(e.target.value)}
                  className="selectup"
                >
                  
                  {data?.routes?.routes[0]?.schedule
                    .slice()
                    .reverse()
                    .map((stop, index) => (
                      <option key={index} value={stop.scode}>
                        {stop.sname} - ({stop.scode})
                      </option>
                    ))}
                </select>
              </div>
            </Col>
          </Row>
         
          {/* Group Age row start */}
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
               
                  <option value="ADULT">ADULT</option>
                  <option value="CHILD">CHILD</option>
                  <option value="SCFEMALE">SCFEMALE</option>
                  <option value="SCMALE">SCMALE</option>
                </select>
              </div>
            </div>
            {/* Group age row end */}

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
               
                  {data &&
                    data.fare &&
                    data.fare.fare &&
                    Object.keys(data.fare.fare).map((className, index) => (
                      <option key={index} value={className}>
                        {className}
                      </option>
                    ))}
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
            disabled={fareloading}
            >
              {fareloading ? "Loading..." : "Get Fare"}
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
      <Footer />
    </>
  );
};

export default Fare;
