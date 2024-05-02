import React, { useState } from "react";
import styled from "styled-components"; // Import styled-components
import downArrow from "../assets/images/faqarrowdown.png";
import upArrow from "../assets/images/faquparrow.png";

const AccordionItem = styled.div`
  .accordion-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .faq-title {
    font-size: 22px;
    font-family: Poppins, sans-serif !important;
    color: black;
    font-weight: bold;
    margin-top: 10px;
  }

  .arrow {
    width: 20px;
    height: auto;
  }

  .accordion-body {
    color: black;
    font-size: 16px;
    max-height: 199px; 
    
  }

  .accordion-title-text {
    font-family: Poppins, sans-serif !important;
    font-size: 18px;
    color: #0077b2;
  }
`;


const PnrQA = () => {
    const accordionData  = [
        {
            id:0,
          title: "What is a PNR ?",
          body: `A Passenger Name Record (PNR) is a unique identifier used in the travel industry to store and manage information related to a passenger's reservation, including train details, seat assignments, itinerary, and contact information.`,
        },
        {
            id:1,
          title: "What use is of PNR?",
          body:
            `The PNR is a unique code assigned to each passenger's booking or reservation in the railway system. It's a reference number containing vital details like passenger information, journey details, and ticket status. This code helps with tracking, ticket confirmation, communication, and documentation for railway travel, ensuring smooth and efficient passenger management`
        },
        {
            id:2,
          title: " Check PNR status online ",
          body: (
            <div>
              
              <p>
                Want to know your PNR status? Simply enter your PNR number on our
                website and get the latest updates instantly.
              </p>
              <p>
                {" "}
                Download the Trains on Wheels App(available for Android) to{" "}
                <strong>Check PNR Status</strong>.on your mobile device and take
                advantage of other useful features{" "}
              </p>
            </div>
          ),
        },
        {
            id:3,
          title: "how many days we check pnr status?",
          body: (
            <p>
              You can check the PNR status of your train reservation at any time
              from the day of booking until the journey is completed. Once the train
              reaches its destination station, the PNR becomes invalid, and no
              further journeys can be made using the same PNR. However, the PNR
              number is stored in the database of Indian Railways (CRIS) for up to
              nine months.{" "}
            </p>
          ),
        },
        {
            id:4,
          title: "Why am I getting errors while checking PNR?",
          body: (
            <div>
              <p>
                1. You entered wrong PNR number(Please check PNR then try again ).
              </p>
              <p>
                2. Web servers are down.(In this case check again couple of
                minutes).
              </p>
              <p>
                3. Indian Railways Servers Maintenance happens at 11:30pm - 12:30am
                (Check again after 12:30 AM).
              </p>
            </div>
          ),
        },
        
        {
            id:5,
          title: "Are these PNR numbers ever reused?",
          body: (
            <p>
              Yes, PNR numbers are not reused for new reservations. Once a journey
              associated with a particular PNR is completed, that PNR number is
              retired and not assigned to any new reservations. This ensures the
              uniqueness of each PNR and avoids confusion or conflicts with past or
              future bookings
            </p>
          ),
        },
        {
            id:6,
          title:
            "  I have lost my train ticket but I remember my PNR number. Can I still travel? ",
          body: (
            <p>
              If you forget to bring a printout of your IRCTC e-ticket but have the PNR number and a valid ID, you're fine. Showing the booking SMS on your phone works too. If you have neither, the TTE might charge Rs. 50 per ticket. For counter tickets, carry the original ticket and ID. If you lose it but remember the PNR, get a duplicate ticket from the railway reservation counters.
            </p>
          ),
        },
        
        {
            id:8,
          title:
            " Is there an app to check PNR Live Status or Train Seat Availability on mobile? ",
          body: (
            <p>
              Yes, Download the Train on Wheels app available for Android and check
              your PNR.
            </p>
          ),
        },
        {
            id:9,
          title: "Where would I find PNR?",
          body: (
            <div>
              <p>
              On a paper ticket from a railway booking counter, you'll find the PNR number at the top left. It's typically split into two parts, often in a format like 890-1234567..
              </p>
              <p>
              On an IRCTC e-ticket or any other agency e-ticket, the PNR number can be located at the top left corner of the ticket.
                
              </p>
            </div>
          ),
        },
        {
            id:7,
          title:
            " Does checking PNR status let me know the passenger name, age or gender?",
          body: (
            <p>
              While checking the PNR status on the Indian Railway website, personal
              details such as name, age, and gender are not provided due to privacy
              concerns. However, individuals who have booked tickets can access this
              information by logging into the IRCTC website using their username and
              password and making a PNR enquiry there.
            </p>
          ),
        },
      ];
  const [activeId, setActiveId] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12">
          <div className="faq-container">
            <h1 className="faq-title">FAQ</h1>
            <div className="Accordion">
              {accordionData.map(({ id, title, body }) => (
                <AccordionItem key={id}>
                  <Accordion
                    id={id}
                    title={title}
                    body={body}
                    isActive={activeId === id}
                    onClick={() => handleAccordionClick(id)}
                  />
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
          <div className="advertisement-container">
            <p>This is ad space</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ id, title, body, isActive, onClick }) => {
  return (
    <div className="accordion-item" onClick={onClick}>
      <div className="accordion-title">
        <h2 className={`accordion-title-text ${isActive ? "expanded" : ""}`}>
          {title}
        </h2>
        <img
          className={`arrow ${isActive ? "up" : "down"}`}
          alt="arrow"
          src={isActive ? upArrow : downArrow}
        />
      </div>
      {isActive && <p className="accordion-body">{body}</p>}
      <hr />
    </div>
  );
};

export default PnrQA;
