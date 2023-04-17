import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import arrow from "../assets/img/svg/arrow.svg";
import specialIcon from "../assets/img/png/SpecialIcon.png";
import moneyImage from "../assets/img/png/moneyImage.png";
import groupImage from "../assets/img/png/group.png";
import starImage from "../assets/img/png/startImage.png";
import leftOrnament from "../assets/img/png/leftOrnament.png";
import rightOrnament from "../assets/img/png/rightOrnament.png";
import Slider from "react-slick";
const HeroSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 700,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="d-flex flex-column align-items-center py-4  py-lg-5 justify-content-center flex-grow-1">
      <Container>
        <p className="text-center text-white  px-2 py-2 mx-auto mb-0 fw-medium fs_xsm bg_dark mw_351 rounded-5">
          NUMBER ONE CREATIVE DIGITAL AGENCY
        </p>
        <h1 className="text-center text-white mt-3 fs_4xl fw-bold">
          <span className="text_green">Smart Choices</span>
          <span className="text-white d-block"> For Your Business Growth</span>
        </h1>
        <p className="text-center mt-3 mb-0 text_white_50 fw-medium fs_lg">
          We're a team of experienced designers, developers,
          <span className="d-block">
            and marketers, passionate about delivering exceptional digital
            solutions.
          </span>
        </p>
        <div className="d-flex justify-content-center mt-4 pt-1 mt-md-5">
          <button className="outline_none border-0 heroBtn text-white fw-medium fs_md">
            Contact Us
            <svg
              className="ms-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.99973H12.17L7.29 13.8797C6.9 14.2697 6.9 14.9097 7.29 15.2997C7.68 15.6897 8.31 15.6897 8.7 15.2997L15.29 8.70973C15.68 8.31973 15.68 7.68973 15.29 7.29973L8.71 0.699727C8.32 0.309727 7.69 0.309727 7.3 0.699727C6.91 1.08973 6.91 1.71973 7.3 2.10973L12.17 6.99973H1C0.45 6.99973 0 7.44973 0 7.99973C0 8.54973 0.45 8.99973 1 8.99973Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/* green section */}
        <div
          className="my-5 pb-2 shapeImage z_4  position-relative "
          data-aos="fade-zoom"
        
        >
          <img
            className="position-absolute start-0 top_11 top_xl_0 zn_1"
            src={leftOrnament}
            alt="leftOrnament"
          />
          <img
            className="position-absolute end-0 bottom-0 zn_1 d-none d-lg-block"
            src={rightOrnament}
            alt="rightOrnament"
          />
          <h2 className="text-center text-white fw-semibold fs_xxl pt-4 pt-lg-5 ">
            Benefit of
            <span className="d-block d-lg-inline">improving your business</span>
          </h2>
          <Slider {...settings} className="py-5 row">
            <Col lg={3}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={specialIcon} alt="specialIcon" />
                <p className="mt-2 mb-0 text-white fw-medium fs_xl">
                  Expanding the Market
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={moneyImage} alt="moneyImage" />
                <p className="mt-2 mb-0 text-white fw-medium fs_xl">
                  Cost-Effective
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={starImage} alt="starImage" />
                <p className="mt-2 mb-0 text-white fw-medium fs_xl">
                  More Professional
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={groupImage} alt="groupImage" />
                <p className="mt-2 mb-0 text-white fw-medium fs_xl">
                  Attract Client
                </p>
              </div>
            </Col>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
