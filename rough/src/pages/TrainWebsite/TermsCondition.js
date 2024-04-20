import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import WebsiteNavbar from "../../components/WebsiteNavbar";
import Footer from "../TrainWebsite/Footer";
const TermCondition = () => {
  return (
    <>
     <WebsiteNavbar/>
      <Container
  fluid
  className="justify-content-center align-items-center mt-5" style={{fontSize:'15px'}}
>
  <Row className="justify-content-center ">
    <Col xs={12} md={8}>
      <h2 className="text-center mt-4 bold">Terms - Condition</h2>
      <p className="mt-3"  style={{fontSize:"20px"}} >
      By installing or utilizing the app, you are automatically bound by these terms. It's imperative that you carefully review them before proceeding with the app. Any attempt to replicate, alter, or use our trademarks in any manner is strictly prohibited. You are also prohibited from attempting to access the apps source code, translating it into other languages, or creating derivative versions. The app itself, along with all associated trademarks, copyrights, database rights, and other intellectual property rights, remain the sole property of Driftmark Technology. Driftmark Technology is dedicated to ensuring the apps functionality and effectiveness. Therefore, we reserve the right to modify the app or introduce charges for its services at any time and for any reason. Rest assured.
      </p>
    </Col>
    <Col xs={12} md={8} className="text-start mt-2">
      <h5 className='bold'>Please be aware</h5>
      <p  style={{fontSize:"20px"}} >The Trains on Wheels app handles and processes the personal information you've shared with us to facilitate our Service.
        Ensuring the security of your phone and access to the app falls under your responsibility.
         We strongly advise against jailbreaking or rooting your phone, a procedure that involves bypassing software restrictions set by the official operating system of your device. Engaging in such actions could render your phone susceptible to malware, viruses, or other security breaches.
         The app integrates with third-party services, each of which has its own set of Terms and Conditions. You can find the Terms and Conditions for these third-party service providers by following the provided link.
        </p>
                    <p  style={{fontSize:"20px"}} >In order to enhance the functionality of the software, the Trains on Wheels app may gather specific data from applications, including</p>
                    <ul style={{fontSize:"20px"}}  >
                        <li><b>IP address:</b> This information may be utilized to approximate the general location of a device.</li>
                        <li><b>Non-user related crash logs:</b> These logs may aid in diagnosing issues and refining the software. Diagnostic data might also serve advertising and analytic purposes.</li>
                        <li><b>User-associated performance metrics:</b> Performance data like app launch time, hang rate, or energy consumption may be gathered to analyze user behavior, assess the effectiveness of current product features, and plan for future enhancements. Additionally, this data may be utilized for displaying advertisements, including sharing with other entities involved in ad display</li>
                        <li> <b>Device ID:</b> This includes identifiers such as the device's advertising identifier or other app-specific device identifiers, which may be utilized for third-party advertising and analytic purposes.</li>
                    </ul>
    </Col>
    <Col xs={12} md={8} className="text-start mt-2">
      <h5 className='bold'>Mobile Application License</h5>
       <p  style={{fontSize:"20px"}} >Use License</p>
      <p>
      <ul  style={{fontSize:"20px"}} >
<li>Recompiling, reverse engineering, disassembling, attempting to derive the source code of, or Decryption the application.</li>
<li>Making any modification, adaptation, improvement, enhancement, translation, or derivative work from the application.</li>
<li>Violating any applicable laws, rules, or regulations in connection with your access or use of the application.</li>
<li>Removing, altering, or obscuring any proprietary notice (including any notice of copyright or trademark) posted by us or the Licenses of the application.</li>
<li>Using the application for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended.</li>
<li>Making the application available over a network or other environment permitting access or use by multiple devices or users at the same time.</li>
<li>Using the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application.</li>
<li>Using the application to send automated queries to any website or to send any unsolicited commercial email.</li>
<li>Using any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application.</li>
</ul>
      </p>
      <h5 className='bold'> Android Devices </h5>
      <ul  style={{fontSize:"20px"}} >
<li>When you access the Site via a mobile application downloaded from the Google Play Store (each a "App Distributor"), the following terms apply:
</li>
<li>The licence granted to you for our mobile application is limited to a non-transferable licence to use the app on a device running the  Android operating systems, as applicable, and in accordance with the App Distributor's usage rules;
</li>
<li>In accordance with the terms outlined in these Terms of Use or as mandated by relevant legislation, we are committed to delivering all necessary maintenance and support services for the mobile application. You recognize that each App Distributor is not obliged to offer any maintenance or support services for the mobile application.</li>
</ul>
    </Col>
    <Col xs={12} md={8} className="text-start mt-2">
      <h5 className='bold'>Review Guidelines</h5>
      <ul  style={{fontSize:"20px"}} >
<li>Ensure your review reflects firsthand experience with the individual or entity being reviewed.</li>
<li>Avoid including offensive language, profanity, or any form of abusive, racist, offensive, or hateful remarks in your reviews.</li>
<li>Refrain from making discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability.</li>
<li>Avoid mentioning or alluding to illegal activities in your reviews.</li>
<li>If posting negative reviews, ensure you have no affiliation with competitors.</li>
<li>Avoid making legal conclusions about conduct.</li>
<li>Do not post any false or misleading statements in your reviews.</li>
</ul>
    </Col>
    <Col xs={12} md={8} className="text-start mt-2">
    <h5 className='bold'>Updates to These Terms and Conditions</h5>
<p  style={{fontSize:"20px"}} >Our Terms and Conditions may be revised periodically. It is recommended that you check this page regularly for any updates. We will inform you of any modifications by posting the revised Terms and Conditions on this page. </p>
    </Col>
    <Col xs={12} md={8} className="text-start mt-2">
    <h5 className='bold'>Contact Us</h5>
     <p  style={{fontSize:"20px"}} >If you have any inquiries or feedback regarding our Terms and Conditions, feel free to reach out to us at    <a href="mailto:trainsonwheel@gmail.com">trainsonwheel@gmail.com</a></p>
    </Col>
  </Row>
</Container>
<Footer/>
    </>
  )
}
export default TermCondition





