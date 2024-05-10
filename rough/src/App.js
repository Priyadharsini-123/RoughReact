import Header from "./Component/Header";
import Whychoose from "./Component/Home";
import './css/custom-bootstrap.css'
import './App.css';
import Home from "./Component/Home";
import Choose from "./Component/Choose";
import Video from "./Component/Video";
import { Work } from "./Component/Work";
import TestimonialSection, { Rating } from "./Component/TestimonialSection";
import { OurRoute } from "./Component/OurRoute";
import DownloadApp from "./Component/DownloadApp";
function App() {
  return (
    <>
   <Header/>
   
    <Home/>
    <Choose/>
    <Video/>
    <Work/>
    {/* <TestimonialSection/> */}
    <OurRoute/>
    <DownloadApp/>
    </>
    
  );
}

export default App;
