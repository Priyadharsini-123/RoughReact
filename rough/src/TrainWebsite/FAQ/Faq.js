import React from 'react'
import FaqItem from '../../../components/FaqComponent';
import WebsiteNavbar from '../../../components/WebsiteNavbar';
import Footer from '../Footer';

const Faqmain = () => {

  const faqsData = [
    {
      id: 0,
      questionText: 'What is Trains on Wheels app?',
      answerText:
        ' Trusted & loved by travellers, the Trains on Wheels  app is one of the highest-rated Indian Railways App for train booking. Use the Trains on Wheels  app, to check PNR status, train running status , train routes, seat availability, metro and local train schedule make a train enquiry, and more.',
    },
    {
      id: 1,
      questionText: 'Is Trains on Wheels free?',
      answerText:
        'Yes,The Trains on Wheels app is free to download and use!',
    },
    
    {
      id: 2,
      questionText: 'How to contact Trains on Wheels?',
      answerText:
        'Our committed team is available to assist you during daytime hours, ensuring personalized support and attention. Moreover, we provide English-speaking assistance around the clock, 24/7. Should you require assistance from Trains on Wheels, please utilize the following link to reach out to us, and we will respond promptly to your query.',
    },
    {
      id: 3,
      questionText: 'How is Trains on Wheels different from others?',
      answerText:
        'Trains on Wheels serves as an all-in-one solution, shedding light on previously obscure areas by leveraging software-driven solutions. Our platform is dedicated to tracking and analyzing reservation data, optimizing user experiences, and streamlining processes for checking train running and Passenger Name Record (PNR) statuses. Our app available for  Android and helps people discover proactive ways to look for several trains between stations and easily book train tickets based on classes.'
        
    },
    {
      id: 4,
      questionText: 'What are the Services Provided Trains on Wheels?',
      answerText:
        'A complete solution for all  metro train services! Check PNR status, access regional language support, see trainsonwheels, and find seat availability effortlessly. Stay updated with schedules for local and metro trains across India. Alternate trains feature should ease your travel plan'
        
    },
    {
      id: 5,
      questionText: 'Metro and Local train  Available over all india?',
      answerText:
        ' we are provide  🚇 Metro trains schedules of Indian cities like chennai, mumbai, delhi, kolkata, pune, ahmedabad, jaipur, nagpur, noida, bangalore and hyderabad.'
         
    },
    {
      id: 6,
      questionText:
        'Why choose the Trains on Wheels android app over other Train  apps?',
      answerText:
        'Ultimately, the decision to choose the Trains on Wheels  app over other train  apps depends on factors such as the specific features offered, user experience, reliability, and personal preferences. Users may want to explore different apps and compare their features to determine which one best meets their needs.',
    },
  ];
  return (
    <>
    <WebsiteNavbar/>

<div className="app-container mt-4">
      <div className="faqs-card-container">
        <h1 className="heading" style={{color:"black",fontSize:"45px"}}>FAQ’s</h1>
        
        <ul className="faqs-list-container">
          {faqsData.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqData={eachFaq} style={{fontSize:"20px"}} />
          ))}
        </ul>
      </div>
    </div>
   <Footer/>
    </>
  )
}

export default Faqmain