import React from "react";
import Faq from "react-faq-component";
import { Card } from "react-bootstrap";
import Coach from "../assets/images/coach position.jpg"

import Tabelt from "../assets/images/tablet.png"
const data = {
  rows: [
    {
      title: "What is train coach position?",
      content: `The coach position of a train refers to its sequential order relative to the locomotive or engine. Understanding the coach position allows passengers to plan their boarding accordingly, ensuring they are in the right place on the platform to board the train efficiently.`,
    },
    {
        title: "Why is knowing the coach position important?",
        content:
          "Knowing the coach position helps passengers board the train quickly and efficiently, especially on busy platforms or when the train has a limited stop at the station. It also helps passengers locate their reserved seats or berths without confusion.",
      },
      {
        title: "Are there any apps or websites that provide real-time coach position information?",
        content:
          "Yes, Trains on Wheels apps and websites offer real-time coach position information for trains. These platforms use GPS tracking and other technologies to provide accurate updates on the coach position throughout the journey.",
      },
      {
        title: "Is the coach position the same for every journey?",
        content:
          "The coach position may vary depending on factors such as train composition, platform availability, and operational requirements. It's always a good idea to check the coach position for each journey, especially if you're traveling on different trains or routes.",
      },
    {
      title: "What is 2S in train? ",
      content:
        "2S in a train stands for Second Seating, which is a class of travel typically found in Indian Railways. In this class, passengers are provided with seats for the duration of the journey. It is a non-air-conditioned class commonly used for short-distance travel, offering a more economical option compared to higher classes.",
    },
    {
        title: " Classification of Indian Coaches  ",
        content: (
            <div>
            <p>AC Coaches:</p>
            <ul>
  <li> <strong>AC First Class (1A):</strong> Luxury class with spacious cabins, individual berths, and curtains for privacy.</li>
  <li> <strong>AC 2 Tier (2A):</strong>      Two-tier berths with curtains for privacy, suitable for long-distance travel.</li>
  <li>  <strong>AC 3 Tier (3A):</strong> Three-tier berths with curtains for privacy, offering a balance between comfort and affordability.</li>
  <li><strong>AC Chair Car (CC):</strong> Air-conditioned seating with adjustable seats, primarily used for day travel.</li>
</ul>
<p>Non-AC Coaches:</p> 
<ul>
  <li> <strong>Sleeper Class (SL):</strong> Non-air-conditioned berths with six berths per compartment, commonly used for overnight travel.</li>
  <li> <strong>General Unreserved (GS):</strong> Non-reserved seating, often crowded, and suitable for short-distance travel.</li>
  <li><strong>Second Seating (2S):</strong> Non-air-conditioned seating, primarily used for short-distance travel.</li>
  <li><strong>Chair Car (CC):</strong> Non-air-conditioned seating with adjustable seats, primarily used for day travel.</li>
</ul>    
          </div>
          
        ),
      },
      
      {
        title: "Trains on Wheels Coach position",
        content: (
          <div >
            <div>
              <p style={{display:'flex',justifyContent:'center'}}><strong>HOW I FIND COACH POSITION ON USING DEVICE:</strong></p>
            </div>
            
            <div style={{display:'flex',justifyContent:'center'}}>
              
              <img src={Coach} alt="Train on Wheels" style={{ maxWidth: '40%', height: 'auto' }} />
             MOBLE
            </div>
            
            
            
            <div style={{display:'flex',justifyContent:'center'}}>
              
              <img src={Tabelt} alt="Another Image" style={{ maxWidth: '40%', height: 'auto' }} />
              <p>moblie</p>
            </div>
          </div>
        )
      },
      {
        title: "What is Trains on Wheels Coach Position feature?",
        content: `The Trains on Wheels Coach Position feature provides real-time information about the positions of different coaches in a train. It helps passengers locate their reserved seats or berths more efficiently, especially on crowded platforms or during rush hours.`,
      },
      {
        title: "How can I access the Coach Position feature on the Trains on Wheels app?",
        content:
          "To access the Coach Position feature on the Trains on Wheels app, simply open the app, select your train journey, and navigate to the 'Coach Position' section. You'll find detailed information about the layout of the train, including the positions of different coaches relative to the locomotive.",
      },
      
      {
        title: "How accurate is the Coach Position information provided by the app?",
        content:
          "The Coach Position information provided by the Trains on Wheels app is updated regularly based on real-time data from railway authorities. While the app strives to provide accurate and up-to-date information, occasional discrepancies or delays may occur due to technical issues or network connectivity.",
      },
      
      
      
      
      
  ],
};

const styles = {
 
  
  rowTitleColor: "black",
  contentFontFamily:'Arial, sans-serif',
  rowTitleTextSize: '25px',
  
 
}

const config = {
  // Your config here
};

export default function Livefaq() {
  return (
    <div className="d-flex justify-content-center">
      <Card
        style={{
          margin: "15px",
          maxWidth: "515px",
          width: "100%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "5px",
        }}
      >
        <div style={{ paddingLeft: "20px" }}>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </Card>
    </div>
  );
}
