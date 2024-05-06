import React, { useState } from "react";
import { Table } from "react-bootstrap";
import track from "../assets/images/livetraingif.gif";

const LiveTrain = () => {
  const [data, setData] = useState('');

  return (
    <div>
      
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
          {/* You can map over your data.stations here */}
          
            <tr key={1} style={{ height: "20px", backgroundColor: 10 % 2 === 0 ? "#f9f9f9" : "white" }}>
              <td style={{ border: "none", padding: 0, height: "100%", width: "10px" }} className="no-border tracking-column-cell">
                <div className="trackerline">
                  <div className="imagecontainer">
                    <img
                      src={track}
                      alt="TrainsOnWheels LiveTrack"
                      title="TrainsOnWheels LiveTrack"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="station-info">
                  <div className="st-name"></div>
                  <div className="additional-info"> km (day)</div>
                </div>
              </td>
              <td>
                <div className="station-info">
                  <div className="st-name">Arr: { '-'}</div>
                  <div className="additional-info">Dep: {'-'}</div>
                  <div className="mediate border px-1 bg-light"> 13 intermediate stations </div>
                </div>
              </td>
              <td>
                <div className="station-info ">
                  <div className="font-weight-bold text-success">
                    <time>{ '-'}</time>
                  </div>
                  <div className="font-weight-bold text-danger">
                    <time>{ '-'}</time>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-weight-bold text-danger mt-3">
                  
                    <time> min</time>
                  
                  
                </div>
              </td>
            </tr>
          
        </tbody>
      </Table>
      
    </div>
  );
};

export default LiveTrain;
