import React from 'react'
import Fare from '../src/pages/Fare'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FareRough from './pages/FareRough';
import Rough from './pages/Rough';
import Choose from './pages/Choose'
import Faq from './pages/Faq';
import FareDetails from './pages/FareDetails';

import Trainseat from './pages/Trainseat';
import Pnrfaq from './pages/Pnrfaq';
import Livefaq from './pages/Livefaq';
import DeskSeat from './pages/DeskSeat';
import Trainsonwheelslivefaq from './pages/Trainsonwheelslivefaq';
import Trainsonwheelscoachfaq from './pages/Trainsonwheelscoachfaq';
import Trainonwheelspnrfaq from './pages/Trainonwheelspnrfaq';
import CoachPosition from './pages/CoachPosition/CoachPoasition';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import Wheelsseat from './pages/Wheelsseat';
import WebsiteNavbar from './pages/WebsiteNavbar';
import Footer from './pages/Footer';




const App = () => {
  return (
    <>
    <WebsiteNavbar/>
    {/* <Wheelsseat/> */}
    {/* <Mobile/> */}
    {/* <Desktop/> */}
    {/* { <DeskSeat/> } */}
    {/* <CoachPosition/> */}
    {/* <Trainonwheelspnrfaq/> */}
    {/* <Trainsonwheelscoachfaq/> */}
  {/* <Trainsonwheelslivefaq/> */}
    {/* <DeskSeat/> */}
    <Trainseat/>
    {/* <Livefaq/> */}
     {/* <Pnrfaq/>  */}
       {/* <Trainseat/>    */}
          {/* <Fare/>    */}
    {/* <FareDetails/>  */}
     {/* <Faq/> */}
   {/* <Seat/> */}
       
   <Footer/>  
    </>
  )
}

export default App