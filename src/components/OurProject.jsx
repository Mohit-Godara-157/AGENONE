import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/img/png/Img1.png";
import image2 from "../assets/img/png/Img2.png";
import overlayImage from "../assets/img/png/overlayImage.png";
import specialArrow from "../assets/img/png/SpecialArrow.png";
import slack from "../assets/img/png/slack.png";
import google from "../assets/img/png/google.png";
import netflix from "../assets/img/png/netflix.png";
import airbnd from "../assets/img/png/airbnd.png";
import adobe from "../assets/img/png/adobe.png";
import microsoft from "../assets/img/png/microsoft.png";
import circleImage from "../assets/img/png/CircleImage.png";
import bootomCircle from "../assets/img/png/bootomCircle.png";

const OurProject = () => {
  const [first, setfirst] = useState(1);
  return (
    <div className="bg_black sectionImage ">
      <div className="position-relative z_4">
        <img
          className="position-absolute top-0 start-0 w_md_120 zn_1"
          src={circleImage}
          alt="circleImage"
        />
        <img
          className="position-absolute bottomn_2 end-0 w_md_120 zn_1"
          src={bootomCircle}
          alt="bootomCircle"
        />
        <Container>
          <h2 className="text-center pt-5 text-white fw-bold fs_4xl">
            Our Project Have Been <span className="text_green_50">Done</span>
          </h2>
          <p className="text_white_50 mb-0 text-center fw-medium fs_lg">
            Take a look at some of our recent projects and see how we've helped
            other businesses elevate
            <span className="d-lg-block">
              their brand and drive business growth.
            </span>
          </p>
          <div className="   py-4 pt-lg-5 pb-lg-4">
            <div className="py-2 px-1 px-sm-2    rounded-5 bg_whiteDark d-flex justify-content-between align-items-center mx-auto mw_709">
              <button
                onClick={() => setfirst(1)}
                className={
                  first === 1
                    ? "sectionBtn border-0 fw-medium fs_sm"
                    : "sectioBtn border-0 fw-medium fs_sm"
                }
              >
                <span className="d-none d-md-block"> UI/UX Design</span>
                <span className="d-md-none">UI/UX</span>
              </button>
              <button
                onClick={() => setfirst(2)}
                className={
                  first === 2
                    ? "sectionBtn border-0 fw-medium fs_sm"
                    : "sectioBtn border-0 fw-medium fs_sm"
                }
              >
                <span className="d-none d-md-block"> Digital Marketing</span>
                <span className="d-md-none">Digital</span>
              </button>
              <button
                onClick={() => setfirst(3)}
                className={
                  first === 3
                    ? "sectionBtn border-0 fw-medium fs_sm"
                    : "sectioBtn border-0 fw-medium fs_sm"
                }
              >
                <span className="d-none d-md-block"> Sosmed Management</span>
                <span className="d-md-none">SMM</span>
              </button>
              <button
                onClick={() => setfirst(4)}
                className={
                  first === 4
                    ? "sectionBtn border-0 fw-medium fs_sm"
                    : "sectioBtn border-0 fw-medium fs_sm"
                }
              >
                <span className="d-none d-md-block">Development </span>
                <span className="d-md-none">Dev</span>
              </button>
            </div>
          </div>
          <Row
            className={
              first === 1 ? "py-4 py-lg-5 d-flex" : "py-4 py-lg-5 d-none"
            }
          >
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image1} alt="image1" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">Title</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image2} alt="image2" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">Title</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
          </Row>
          <Row
            className={
              first === 2 ? "py-4 py-lg-5 d-flex" : "py-4 py-lg-5 d-none"
            }
          >
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image2} alt="image2" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">Title</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image1} alt="image1" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">WELCOME</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  We are designed to help
                </p>
              </div>
            </Col>
          </Row>
          <Row
            className={
              first === 3 ? "py-4 py-lg-5 d-flex" : "py-4 py-lg-5 d-none"
            }
          >
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image1} alt="image1" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">Thanks You</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  Thanks For Visiting Our Page
                </p>
              </div>
            </Col>
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image2} alt="image2" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">Thanks You</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  Thanks For Visiting Our Page
                </p>
              </div>
            </Col>
          </Row>
          <Row
            className={
              first === 4 ? "py-4 py-lg-5 d-flex" : "py-4 py-lg-5 d-none"
            }
          >
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image2} alt="image2" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">Title</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
            <Col className="my-3 my-md-0" md={6}>
              <div className="cardBox p-3 h-100">
                <div className="position-relative curser">
                  <img className="w-100 " src={image1} alt="image1" />
                  <div className="position-absolute bg_overlay top-50 start-50 opacity_100 curser transform_center ">
                    <img
                      className="w_md_80"
                      src={specialArrow}
                      width={170}
                      alt="specialArrow"
                    />
                  </div>
                </div>
                <h4 className="fs_xxl text-white  fw-bold mt-4">Title</h4>
                <p className="mb-0 text_white_50 fs_lg fw-normal">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="line mt-3 mt-lg-4"></div>
      <Container>
        <Row className="py-4 justify-content-center">
          <Col className="my-3 my-lg-0 " xs={6} sm={4} md={3} lg={2}>
            <div className="d-flex justify-content-center">
              <img className="w-75 imageLinks" src={slack} alt="slack" />
            </div>
          </Col>
          <Col className="my-3 my-lg-0 " xs={6} sm={4} md={3} lg={2}>
            <div className="d-flex justify-content-center">
              <img className="w-75 imageLinks" src={google} alt="google" />
            </div>
          </Col>
          <Col className="my-3 my-lg-0 " xs={6} sm={4} md={3} lg={2}>
            <div className="d-flex justify-content-center">
              <img className="w-75 imageLinks" src={netflix} alt="netflix" />
            </div>
          </Col>
          <Col className="my-3 my-lg-0 " xs={6} sm={4} md={3} lg={2}>
            <div className="d-flex justify-content-center">
              <img className="w-75 imageLinks" src={airbnd} alt="airbnd" />
            </div>
          </Col>
          <Col className="my-3 my-lg-0 " xs={6} sm={4} md={3} lg={2}>
            <div className="d-flex justify-content-center">
              <img className="w-75 imageLinks" src={adobe} alt="adobe" />
            </div>
          </Col>
          <Col className="my-3 my-lg-0 " xs={6} sm={4} md={3} lg={2}>
            <div className="d-flex justify-content-center">
              <img
                className="w-75 imageLinks"
                src={microsoft}
                alt="microsoft"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProject;
