import React from "react";
import FaqItem from "../components/FaqItem";
import FareCompare from "../assets/images/Farecompare.png"
const Farecomparefaq = () => {
  const faqsData = [
    {
      questionText: "What is fare comparison?",

      answerText: `Fare comparison is a feature provided by various train apps and platforms that allows users to compare the prices of train tickets across different trains, classes, and booking platforms

      .`
      
    },

    {
      questionText: "How can I find the cheapest train fare for my trip?",
      answerText: `Use online fare comparison Trains on Wheels websites to compare prices across different trains, classes, This can help you find the best deals available. `
       
    },
    {
      questionText:
        "Are there any fees or charges for using the fare comparison feature?",
      answerText:
        "Trainsonwheels  fare comparison feature itself does not typically incur any direct fees or charges. These platforms often provide fare comparison as a free service to help users find the best train fares."
        
    },

    {
      questionText: "How accurate are the fare comparison results provided by Trains on Wheels website?",
      answerText: `According to our tests, it has an accuracy of more than 94% and is improving every day.The fare comparison results provided by Trains on Wheels website are generally accurate and reliable.
      Trains on Wheels is committed to offering users a reliable and comprehensive fare comparison service, helping them find the best train fares for their journeys with confidence.
      
      `,
    },

    {
      questionText:
        "Are there any apps or websites that provide real-time Fare comparsion?",
      answerText: "Yes, Trains on Wheels  websites offer best deals real-time Fare comparsion for trains. "
      
    },

    {
      questionText: "Trains on Wheels Coach position",
      answerText: (
        <div >

<div>
            
            <p >Start saving on your train journeys today with TrainsOnWheels FareComparison. Simply enter your departure and arrival stations, select your travel dates, and let us do the rest. Happy travels!Start saving on your train journeys today with TrainsOnWheels FareComparison. Simply enter your departure and arrival stations, select your travel dates, and let us do the rest. Happy travels!
</p>
          </div>
          <div>

            <p ><strong>HOW TO CHECK ON WEBSITE:</strong></p>
          </div>
          
          
          
          
          
          <div style={{display:'flex',justifyanswerText:'center'}}>
            
            <img src={FareCompare} alt="FareCompare" style={{ maxWidth: '50%', height: 'auto' }} />
            
          </div>
        </div>
      )
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

export default Farecomparefaq;
