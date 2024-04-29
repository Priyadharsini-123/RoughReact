import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const TrainFooter = () => {
  return (
    <>
      <div class="footer">
        <div class="footer-content">
          <footer class="container-1">
            <div class="taizoin-bio">
              <img
                class="footer-logo-icon"
                alt="taizo-logo-white"
                src="https://tow-admin-web.onrender.com/static/media/logo5.418da2849d1e4d966f5a.webp"
                style={{ marginLeft: "-12px" }}
              />

              <div style={{lineHeight:'20px'}}>
                <p class="m-0">
                  We'll get you where you want to go
                </p>
                <p class="m-0">
                  our innovative app is the ideal way
                </p>
                <p class="m-0">
                  plan and keep track of your travel.
                </p>
              </div>
            </div>
            <div class="footer-links">
              <div class="company">
                <div class="links">Links</div>

                <button class="pricing">
                  <a class="pricing" href="jobseeker">
                    About Us
                  </a>
                </button>
                <button class="pricing">
                  <a class="pricing" href="about-us">
                    FAQ
                  </a>
                </button>
              </div>
              <div class="support">
                <div class="links">Know More</div>
                <button class="pricing">
                  <a class="pricing" href="book-free-call" target="_blank">
                    PNR Status
                  </a>
                </button>
                <button class="pricing">
                  {" "}
                  <a
                    class="pricing"
                    href="https://wame.pro/taizo.in"
                    target="_blank"
                  >
                    Seat Availabilty
                  </a>
                </button>
                <button class="pricing">
                  {" "}
                  <a class="pricing" href="introduction" target="_blank">
                    {" "}
                    Running Status{" "}
                  </a>
                </button>
              </div>
              <div class="company">
                <div class="links">More</div>
                <button class="pricing">
                  {" "}
                  <a
                    class="pricing"
                    href="https://forms.gle/TpFXxCZTf3HJGJbU7"
                    target="_blank"
                  >
                    Fare Calculator
                  </a>
                </button>
                <button class="pricing">
                  {" "}
                  <a
                    class="pricing"
                    href="https://forms.gle/TpFXxCZTf3HJGJbU7"
                    target="_blank"
                  >
                    Fare Comparsion
                  </a>
                </button>
              </div>
            </div>
            <div class="social-link">
              <div class="social-icons">
                <a href="https://wame.pro/taizo.in" target="_blank">
                  <img
                    class="whatsapp-icon"
                    alt=""
                    src="./assets/img/whatsapp.svg"
                  />
                </a>

                <img
                  class="facebook-icon"
                  alt="facebook-icon"
                  src="./assets/img/entyposocialfacebookwithcircle.svg"
                  id="facebookIcon"
                />

                <img
                  class="youtube-icon"
                  alt="youTube-icon"
                  src="./assets/img/youtube.svg"
                  id="youTubeIcon"
                />

                <img
                  class="facebook-icon"
                  alt="linkedin-icon"
                  src="./assets/img/linkedin-with-circle.png"
                  id="linkedInCircledIcon"
                />

                <img
                  class="facebook-icon"
                  alt="instagram-icon"
                  src="./assets/img/entyposocialinstagramwithcircle.svg"
                  id="instagramIcon"
                />
              </div>
              <div class="support2">
                <div class="we-would-love" style={{ color: "white" }}>
                  We would love to hear from you
                </div>
                <div class="support-details">
                  <div class="">
                    {" "}
                    <a
                      href="mailto: info@taizo.in"
                      style={{ color: "#0077b2" }}
                      target="_blank"
                    >
                      info@txxxx.in
                    </a>
                    <div class="div" style={{ color: "white" }}>
                      +91 6381475573
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div class="footer-content-child"></div>
          <div class="cotainer-2">
            <div class="copyright-taizo">
              Copyright © 2024 Trains on Wheels.All Rights Reserved
            </div>
            <div class="mb-4 text-right">
              <p class="footerBottomContent tclink">
                <a href="privacy-policy" target="_blank">
                  Privacy Policy
                </a>{" "}
                /
                <a href="term-services" target="_blank">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainFooter;
