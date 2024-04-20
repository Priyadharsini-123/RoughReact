import React from "react";

import FaqItem from "../components/FaqItem";

const Trainsonwheelslivefaq = () => {
  const faqsData = [
    {
      questionText: "What is Live Train Running Status? ",
      answerText: `Live Train Running Status refers to a service provided by the Indian Railways that enables passengers to track the real-time location and movement of a train. It utilizes various technologies, including GPS and mobile networks, to provide accurate updates on the train's current position, expected arrival and departure times, and other relevant information such as delays and upcoming stations. This service allows passengers to stay informed about the progress of their journey and plan accordingly.`,
    },
    {
      questionText: "How do I know Where is my train?",
      answerText:
        "To check the running status of your train and know where is your train, Download the <strong> TRAINS ON WHEELS </strong> app and make use of the ‘Running Status’ feature. Enter your train’s name or number and know the live status of your train.",
    },
    {
      questionText: " How does running status work? ",
      answerText: (
        <div>
          <p>
            A GPS-equipped device is affixed to the locomotive responsible for
            pulling or pushing the train. As the locomotive embarks from its
            origin station, the device registers this departure and gathers
            information regarding the subsequent stations the train is scheduled
            to pass through. This mechanism facilitates the determination of the
            train's present whereabouts, its velocity, and any potential
            disruptions encountered during the journey.
          </p>
        </div>
      ),
    },
    {
      questionText: "  How can a train past running status help me? ",
      answerText: (
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
      questionText: "  Why can't I get my Train live running status? ",
      answerText: (
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
      questionText: "How To Check Train Running Status?",
      answerText: (
        <div>
          <p>
            Trains on Wheels provides a convenient method for passengers to
            monitor the live running status of Indian Railways trains online.
            Utilizing accurate GPS tracking technology, travelers can obtain
            up-to-date details regarding the train's current position, expected
            arrival and departure schedules, potential delays, and probable
            platform allocations. This ensures that passengers remain informed
            throughout their journey, enhancing their travel experience.
          </p>
          <p>Here are the steps:</p>
          <ul>
            <li>Download the Trains on Wheels app</li>
            <li>
              Open and tap on Running Status and enter IRCTC Train Number/Train
              Name
            </li>
            <li>Click on Search for your IRCTC Train Status</li>
            <li>You will now see your train's live location</li>
          </ul>
        </div>
      ),
    },
    {
      questionText:
        "  Things to Know Before Checking Train Running Status Online ",
      answerText: (
        <div>
          <p>
            To track IRCTC Train Running Status, passengers need to have the
            below mandatory details:
          </p>
          <ul>
            <li>
              {" "}
              <strong>Date of Journey (DOJ):</strong> This can be found on the
              ticket or in the text message received after booking. This date is
              when the passenger should board the train.
            </li>
            <li>
              <strong>Train Number and Name:</strong> This is a unique
              five-digit number assigned to each train.
            </li>
            <li>
              <strong>Source and Destination Station Names: </strong>The
              passenger must know about the source and destination station
              names. A source station is where the train begins its journey,
              while the destination station is its final stop.
            </li>
          </ul>
        </div>
      ),
    },
    {
      questionText: "What is the train inquiry number for Railways?  ",
      answerText: (
        <p>
          The train inquiry number for Indian Railways is 139. This number
          provides various services and information related to train schedules,
          fares, availability of seats, PNR status, and more. You can dial 139
          from your mobile or landline phone to access these services.
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="app-container mt-4">
        <div className="faqs-card-container">
          <h1 className="heading" style={{ color: "black", fontSize: "45px" }}>
            FAQ’s
          </h1>

          <ul className="faqs-list-container">
            {faqsData.map((eachFaq) => (
              <FaqItem
                key={eachFaq.id}
                faqData={eachFaq}
                style={{ fontSize: "20px" }}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Trainsonwheelslivefaq;
