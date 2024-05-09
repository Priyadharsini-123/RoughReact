import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import PlayStore from "../assets/images/play-store-badge-.webp";
import Qrcode from "../assets/images/qrcode.png";
import Logo3 from "../assets/images/tow3.png";


const TrainFooter = () => {
  return (
    <>
    <footer class="alert alert-primary mb-0">
        <section class="container py-5">
            <div class="row">
                <div class="col-md-2">
                    <img src={Logo3} alt="Yatri" width="300" class="mb-3"/>
                </div>
                <div class="col-md-6">
                    <p class="text-white">Gain immediate access to reliable, genuine, and up-to-the-minute details regarding Indian train network. Discover live train locations, timetables, passenger services, amenities, and much more, all at your convenience
</p>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline m-0 py-2">
                        <li class="list-inline-item app-logos">
                            <a href="https://play.google.com/store/apps/details?id=com.yatrirailways.yatri&hl=en_IN&gl=US&utm_source=website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank"><img alt="Download Yatri on Google Play" src={PlayStore} /></a>
                        </li>
                        <li class="list-inline-item app-logos">
                            <a href="https://apps.apple.com/in/app/yatri-mumbai-local-railway-app/id1563046909" target="_blank"><img src={Qrcode} alt="Download Yatri App from Apple Play Store" class="img-fluid" style={{paddingTop:'1px'}}/></a>
                        </li>
                    </ul>
                </div>
                <div class="w-100 my-4"></div>
                <div class="col-md-3 footersocial mb-4 mb-md-0">
                    <p><small class="text-white">We'll get you where you want to go our innovative app is the ideal way plan and keep track of your travel.
</small></p>
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

                <div class="col-md-3">
                    <h5 class="text-white">For Trainonwheels</h5>
                    <ul class="px-3 mb-3 footer-copyrights">
                        <li><a href="https://yatrirailways.com/explore-mumbai">About us</a></li>
                        <li><a href="https://yatrirailways.com/travel-hacks">Faq</a></li>
                        
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5 class="text-white">Important Links</h5>
                    <ul class="px-3 mb-3 footer-copyrights">
                        
                        <li><a href="https://yatrirailways.com/terms-of-use">Terms Of Use</a></li>
                        <li><a href="https://yatrirailways.com/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-md-3">

                    <div>
                        <h5 class="text-white">Contact Us</h5>
                        <p>
                  <a href="tel: +91-22-67674603" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    <span class="fa fa-phone" style={{ marginRight: '6px' }}></span>+91 6381475573
                  </a>{" "}
                </p>
                <p >
                  <a href="mailto: info@yatrirailways.com" style={{ textDecoration: 'none', color: '#ebeded', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    <span class="fa fa-envelope" style={{ marginRight: '6px' }}></span>
                    trainsonwheel@gmail.com
                  </a>{" "}
                </p>

                        <p className='text-white'><span class="fa fa-map-marker mr-2"  style={{ marginRight: '6px' }}></span>Kadirimangalam
                  Tirupathur,
                  <br />Tamil Nadu,
                  635653 India
</p>
                    </div>
                </div>
                <div class="w-100 my-3"></div>
                <div class="col-12">
                    <p class="text-white"><small>Copyright © 2024 -TrainsonWheels<br/>All Rights Reserved
</small></p>
                </div>
            </div>
        </section>
    </footer>
    
    
    
    </>
  )
}

export default TrainFooter