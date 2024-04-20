import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alternate from "../../assets/images/alternate.webp";
import coachposition from "../../assets/images/coach position.webp";
import lanuguage from "../../assets/images/language.webp";
import livetrain from "../../assets/images/live train.webp";
import local from "../../assets/images/local.webp";
import metro from "../../assets/images/metro.webp";
import pnr from "../../assets/images/pnr.webp";
import refer from "../../assets/images/refer.webp";
import withdraw from "../../assets/images/withdraw.webp";

const Choose = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3, 
        },
      },
    ],
  };

  return (
    <main className="site-content" style={{ transition: "all 0.4s" }}>
      <section className="container pt-5">
        <div className="row align-items-center" style={{ width: "100%", height: "100%" }}>
          {/* For mobile and tablet view, take up full width */}
          <div className="col-md-12 mb-4 col-lg-8 mb-md-0">
            <Slider {...settings}>
              <div className="widget-box p-3">
                <img
                  src={alternate}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel alternateImage"
                  title="TrainsOnWheel alternateImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={coachposition}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel CoachPositionImage"
                  title="TrainsOnWheel CoachPositionImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={lanuguage}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel LanuguageImage "
                  title="TrainsOnWheel LanuguageImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={livetrain}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel LiveTrainImage"
                  title="TrainsOnWheel LiveTrainImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={local}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel LocalImage"
                  title="TrainsOnWheel LocalImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={metro}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel MetroTrainImage"
                  title="TrainsOnWheel MetroTrainImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={pnr}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel PnrImage"
                  title="TrainsOnWheel PnrImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={refer}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel ReferImage"
                  title="TrainsOnWheel ReferImage"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={withdraw}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel WithdrawImage"
                  title="TrainsOnWheel WithdrawImage"
                />
              </div>
            </Slider>
          </div>
          {/* For desktop view, split width into 8 and 4 columns */}
          <div className="col-md-12 col-lg-4 order-md-2 text-center">
            <h2
              className="mt-md-4"
              style={{
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(18px, 5vw, 20px)"
              }}
            >
              Access real-time updates on Local and Metro Trains, as well as
              information about the BEST services, directly on your smartphone
              for seamless commuting assistance.
            </h2>
            {/* <a
              href="javascript:void(0)"
              className="btn btn-cta mt-3"
              style={{
                background: "#3b64b8",
                border: "0",
                color: "#fff",
                borderRadius: "3px",
                fontWeight: "500",
                padding: "15px 40px",
                boxShadow: "0 6px 10px 0 rgba(0,0,0,0.1)",
                textTransform: "uppercase",
                fontSize: "13px",
                letterSpacing: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              View All Features
            </a> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Choose;
