import React from "react";
import Faq from "react-faq-component";
import { Card } from "react-bootstrap";

const data = {
  rows: [
    {
      title: "What is a PNR ?",
      content: `A Passenger Name Record (PNR) is a unique identifier used in the travel industry to store and manage information related to a passenger's reservation, including train details, seat assignments, itinerary, and contact information.`,
    },
    {
      title: "What use is of PNR?",
      content:
        "A Passenger Name Record (PNR) is a unique 10-digit numerical identifier used by Indian Railways to manage and track passenger reservations. It serves as a crucial tool for passengers to stay updated on the status of their journey, particularly when their tickets are not yet confirmed. By using the PNR number, passengers can check whether their tickets have been confirmed or remain on the waitlist. Additionally, the PNR provides information such as coach and seat numbers, enabling passengers to plan their travel accordingly..",
    },
    {
        title: " Check PNR status online ",
        content: (
            <div>
            <p>
              You can now easily check PNR status in real time by using the{" "} online PNR live status system. Get an instant PNR status update <a href="#" style={{ textDecoration: 'none', color: '#0077B2' }}>trainsonwheels</a> online.
            </p>
            <p>
              Want to know your PNR status? Simply enter your PNR number on our website and get the latest updates instantly.
            </p>
            
            <p> Download the Trains on Wheels App(available for  Android) to <strong>Check PNR Status</strong>.on your mobile device and take advantage of other useful features  </p>
          </div>
          
        ),
      },
    {
      title: "how many days we check pnr status?",
      content: <p> You can check the PNR status of your train reservation at any time from the day of booking until the journey is completed. Once the train reaches its destination station, the PNR becomes invalid, and no further journeys can be made using the same PNR. However, the PNR number is stored in the database of Indian Railways (CRIS) for up to nine months." </p>,
    },
    {
        title: "Why am I getting errors while checking PNR?",
        content: 
       <div>
        <p>1. You entered wrong PNR number(Please check PNR then try again ).</p>
        <p>2. Web servers are down.(In this case check again couple of minutes).</p>
        <p>3. Indian Railways Servers Maintenance happens at 11:30pm - 12:30am (Check again after 12:30 AM).</p>
       </div>,
       
        
      },
      {
        title: "Types of pnr status",
        content: 
       <div>
      <p><strong>Confirmed (CNF):</strong>  This status indicates that your seat or berth is confirmed for the journey.</p>
      <p><strong>RAC (Reservation Against Cancellation) </strong>: RAC means that while your seat is not confirmed, you are guaranteed a place to sit on the train. If someone cancels their confirmed ticket, you might get a confirmed seat later.</p>
      <p> <strong>WL (Waiting List) </strong>: This status indicates that your ticket is on the waiting list. If seats become available due to cancellations, your status may move up, eventually becoming confirmed.</p>
      <p> <strong> RLWL (Remote Location Waiting List):</strong> This waiting list is for intermediate stations between the origin and destination. Confirmation depends on cancellations from passengers traveling between those particular stations.</p>

      <p>These are the common types of PNR statuses you may encounter while checking your reservation status for Indian Railways.</p>
       </div>,
       
        
      },

      {
        title: "Are these PNR numbers ever reused?",
        content: <p>Yes, PNR numbers are not reused for new reservations. Once a journey associated with a particular PNR is completed, that PNR number is retired and not assigned to any new reservations. This ensures the uniqueness of each PNR and avoids confusion or conflicts with past or future bookings</p>,
      },
      {
        title: "  I have lost my train ticket but I remember my PNR number. Can I still travel? ",
        content: <p>If a passenger fails to produce a printout of their e-ticket booked through the IRCTC website but remembers the PNR number, there shouldn't be any issue as long as they can provide a valid ID proof. Alternatively, showing the booking SMS on their mobile device is also acceptable. However, if both the printout and the SMS are unavailable, the TTE may impose a penalty of Rs. 50 per ticket. For counter tickets, passengers must carry both the original ticket and a valid ID proof. If the ticket is lost but the PNR number is remembered, passengers can request a duplicate ticket from railway reservation counters.</p>
      },
      {
        title: " Does checking PNR status let me know the passenger name, age or gender?",
        content: <p>While checking the PNR status on the Indian Railway website, personal details such as name, age, and gender are not provided due to privacy concerns. However, individuals who have booked tickets can access this information by logging into the IRCTC website using their username and password and making a PNR enquiry there.</p>
      },
      {
        title: " Is there an app to check PNR Live Status or Train Seat Availability on mobile? ",
        content: <p>Yes, Download the Train on Wheels app available for  Android and check your PNR, .</p>
      },
      {
        title: "Where would I find PNR?",
        content:<div>
           <p>On a paper ticket released in a railway booking counter, the PNR number is on the top left of the ticket.
        The PNR number on ticket might be split right into 3-7(digits) form (e.g. 890-1234567) on paper ticket.</p>
        <p>On IRCTC e-ticket or any other agency e-ticket the PNR number can be on the top left of the ticket.
PNR might also be on SMS alert on your mobile if you have booked e-ticket and provided your mobile number.
Below are two ticket samples of Online/IRCTC Ticket and Counter/Paper Ticket</p>
        </div>
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

export default function Pnrfaq() {
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
