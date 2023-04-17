import React, { useState } from "react";
import logoImage from "../assets/img/svg/Logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import footerCircle from "../assets/img/png/footerCircle.png";
import footerCircle2 from "../assets/img/png/footerCircle2.png";
import leftImage from "../assets/img/svg/left_img.svg";
import rightImage from "../assets/img/svg/right_img.svg";
import upBtn from "../assets/img/svg/upBtn.png";
const Footer = () => {
  const [first, setfirst] = useState(true);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <div className="overflow_x_hidden">
      <a
        className={
          first
            ? " position-fixed z_5 d-none end-0 bottom-0 "
            : " position-fixed z_5 end-0 bottom-0  justify-content-end d-flex me-2  mb-3"
        }
        onClick={() => moveToTop()}
      >
        <a href="#">
          <img
            width={40}
            className="rounded-5 animationMove"
            src={upBtn}
            alt="up_arrow"
          />
        </a>
      </a>
      <Container>
        <div
          data-aos="zoom-out-left"
          className="radiusBox  position-relative overflow-hidden z_4"
        >
          {/* <img
            className="position-absolute image_hw image_md_hw image_md_set image_set zn_1"
            src={leftImage}
            alt="leftImage"
          />
          <img
            className="position-absolute image_hw image_md_hw image2_md_set image2_set zn_1"
            src={rightImage}
            alt="leftImage"
          /> */}
          <div className="mx-lg-5 d-flex flex-column flex-lg-row py-4 py-lg-0 align-items-center justify-content-center justify-content-lg-between  px-2 px-sm-3">
            <h4
              data-aos="flip-up"
              className="mb-0  py-4 py-lg-5 text-white text-center text-lg-start fw-semibold fs_3xl"
            >
              Let's discuss and bring your
              <span className="d-md-block">vision to life.</span>
            </h4>
            <button
              data-aos="flip-down"
              className="footerBtn  text-white fw-medium fs_md border-0 "
            >
              Let's Talk
              <svg
                className="ms-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.99997H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70997C15.68 8.31997 15.68 7.68997 15.29 7.29997L8.71 0.699971C8.32 0.309971 7.69 0.309971 7.3 0.699971C6.91 1.08997 6.91 1.71997 7.3 2.10997L12.17 6.99997H1C0.45 6.99997 0 7.44997 0 7.99997C0 8.54997 0.45 8.99997 1 8.99997Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="FooterLine"></div>
        </div>
      </Container>
      <div className="bg_black position-relative z_4  overflow-hidden">
        <img
          className="position-absolute w_md_100 zn_1 top_4 start-0"
          src={footerCircle}
          alt="footerCircle"
        />
        <img
          className="position-absolute w_md_120 zn_1 bottom-0 w_260 end-0"
          src={footerCircle2}
          alt="footerCircle2"
        />
        <Container>
          <Row
            data-aos="zoom-out-right"
            className="justify-content-between py-3 py-lg-5"
          >
            <Col data-aos="flip-up" className="my-3 my-lg-0" lg={4}>
              <a href="#">
                <img className="w_md_133" src={logoImage} alt="logoImage" />
              </a>
              <p className="text_white_50 fs_md fw-normal pb-2 mb-4 mt-4">
                We're a team of experienced designers, developers, and
                marketers, passionate about delivering exceptional digital
                solutions.
              </p>
              <a
                className=" text_white_50  fw-medium ankerHover fs_md"
                href="mailto:hello@agenone.com"
              >
                hello@agenone.com
              </a>
            </Col>
            <Col data-aos="flip-down" className="my-3 my-lg-0" lg={6}>
              <Row>
                <Col data-aos="zoom-in" className="my-2 my-lg-0" xs={6} md={4}>
                  <ul className="ps-0 mb-0">
                    <li className="fs_md fw-bold text-white">Menu</li>
                    <li className="mt-4">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Services
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Project
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col data-aos="zoom-out" className="my-2 my-lg-0" xs={6} md={4}>
                  <ul className="ps-0 mb-0">
                    <li className="fs_md fw-bold text-white">Support</li>

                    <li className="mt-4">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col data-aos="zoom-in" className="my-2 my-lg-0" xs={6} md={4}>
                  <ul className="ps-0 mb-0">
                    <li className="fs_md fw-bold text-white">Social Media</li>
                    <li className="mt-4">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Linked In
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Dribbble
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="text_white_50 fw-normal fs_md ankerHover"
                        href="#"
                      >
                        Behance
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="FooterLine"></div>
          <p className="py-4 mb-0 text-md-center text_white_50">
            Copyright © 2023 by Agenone. All rights reserved.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
