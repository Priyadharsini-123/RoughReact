import React from "react";
import PlayStore from "../assets/images/play-store-badge-.webp";
import Qrcode from "../assets/images/qrcode.png";
import Logo3 from "../assets/images/tow3.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TrainFooter = () => {
  return (
    <>
      <footer class="alert alert-primary mb-0">
        <section class="container py-5">
          <div class="row">
            <div class="col-md-2">
              <img src={Logo3} alt="Yatri" width="300" class="mb-3" />
            </div>
            <div class="col-md-6">
              <p style={{ color: "white", fontSize: "16px", fontFamily: 'Poppins, sans-serif' }}>
                Gain immediate access to reliable, genuine, and up-to-the-minute details regarding Indian train network. Discover live train locations, timetables, passenger services, amenities, and much more, all at your convenience
              </p>
            </div>
            <div class="col-md-4">
              <ul class="list-inline m-0 py-2">
                <li class="list-inline-item app-logos">
                  <img alt="AppQrCode" src={Qrcode} />
                </li>
                <li class="list-inline-item app-logos">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trainsonwheels.trainsonwheelsandroidapp"
                    target="_blank"
                  >
                    <img
                      src={PlayStore}
                      alt="Download TrainonWheels App from Apple Play Store"
                      class="img-fluid"
                      style={{ paddingTop: "1px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 footersocial mb-4 mb-md-0">
              <p style={{ color: "white", fontSize: "16px", fontFamily: 'Poppins, sans-serif' }}>
                We'll get you where you want to go our innovative app is the ideal way plan and keep track of your travel.
              </p>
              <h5 class="text-white">Follow Us</h5>
              <a
                href="https://www.instagram.com/yatri.railways/"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/Yatri-Railways-109548368006037"
                target="_blank"
                rel="noopener"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/YatriRailways"
                target="_blank"
                rel="noopener"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCSWQbFlMlZSjVKO_RaHF_EQ"
                target="_blank"
                rel="noopener"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>

            <div class="col-md-2">
              <h5 style={{ color: "white", fontSize: "18px", fontFamily: 'Poppins, sans-serif' }}>For Services</h5>
              <ul class="px-3 mb-3 footer-copyrights">
                <li>
                  <a href="https://yatrirailways.com/explore-mumbai">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://yatrirailways.com/travel-hacks">
                    Faq
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5 class="text-white" style={{ fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>Important Links</h5>
              <ul class="px-3 mb-3 footer-copyrights">
                <li>
                  <a href="https://yatrirailways.com/terms-of-use">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="https://yatrirailways.com/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <div>
                <h5 class="text-white" style={{ fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>Contact Us</h5>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                  <a href="tel: +91-22-67674603" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    <span class="fa fa-phone" style={{ marginRight: '6px' }}></span>+91 6381475573
                  </a>{" "}
                </p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px' }}>
                  <a href="mailto: info@yatrirailways.com" style={{ textDecoration: 'none', color: '#ebeded', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    <span class="fa fa-envelope" style={{ marginRight: '6px' }}></span>
                    trainsonwheel@gmail.com
                  </a>{" "}
                </p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                  <span class="fa fa-map-marker" style={{ marginRight: '6px', fontSize: '17px', }}></span>Kadirimangalam
                  Tirupathur,
                  <br />Tamil Nadu,
                  635653 India
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p class="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px' }}>
                Copyright © 2024 - TrainsonWheels
                <br />
                All Rights Reserved
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default TrainFooter;
