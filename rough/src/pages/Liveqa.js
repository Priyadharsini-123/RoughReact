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


const LiveQA = () => {
  const accordionData = [
    {
      id: 0,
      title: "What is Live Train Running Status? ",
      body: `Live Train Running Status allows passengers to track their train's real-time location, expected arrival and departure times, and other details using GPS and mobile networks. It helps passengers stay informed about their journey's progress`,
    },
    {
      id: 1,
      title: "How do I know Where is my train?",
      body: "To check the running status of your train and know where is your train, Download the TRAINS ON WHEELS app and make use of the ‘Running Status’ feature. Enter your train’s name or number and know the live status of your train."
    },
    

    {
      id: 2,
      title: "  How can a train past running status help me? ",
      body: (
        <p>
          Accessing a train's past running status can assist you in choosing the
          most suitable train for your journey. For instance, if you're
          traveling from New Delhi to Mumbai during winter, you can input the
          train number and select winter dates from last year to evaluate how
          well a specific train performed during similar conditions.
        </p>
      ),
    },
    {
      id: 3,
      title: "  Why can't I get my Train live running status? ",
      body: (
        <div>
          <p>This typically happens in two scenarios.</p>
          <ul>
            <li>
              {" "}
              When the train you have queried for doesn't run on the given date.{" "}
            </li>
            <li>
              {" "}
              You have entered the train number, or perhaps name, incorrectly.{" "}
            </li>
          </ul>
        </div>
      ),
    },

    {
      id: 4,
      title: "How To Check Train Running Status?",
      body: (
        <div>
          <p>
            Trains on Wheels offers an easy way for passengers to check the live
            status<br></br> 
            <strong>Here are the steps:</strong>
            <ul>
            <li>Download the Trains on Wheels app</li>
            <li>
              Open and tap on Running Status and enter IRCTC Train Number/Train
              Name
            </li>
            <li>
              Click on Search and You will now see
              your train's live location
            </li>
          </ul>
          </p>

         
        </div>
      ),
    },
  

    {
      id: 6,
      title: "What is the train inquiry number for Railways?  ",
      body: (
        <p>
          The train inquiry number for Indian Railways is 139. This number
          provides various services and information related to train schedules,
          fares, availability of seats, PNR status, and more. You can dial 139
          from your mobile or landline phone to access these services.
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

export default LiveQA;
