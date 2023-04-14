import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import chartImage from "../assets/img/png/chartImage.png";
const TheService = () => {
  return (
    <div>
      <Container>
        <h2 className="text_darkLight text-center my-4 pt-2 pt-lg-1 my-lg-5 fs_4xl fw-bold">
          The Services We Offer <span className="text_green">For You</span>
        </h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item className="accordian_bg" eventKey="0">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <p className="mb-0  fw-semibold fs_xxl">01</p>
                <h3 className="ms-3 ms-lg-4 mb-0  fw-semibold fs_xxl">
                  UI/UX Design
                </h3>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="ms-4 ps-1 ps-lg-4">
                <p className="text_dark_50  fw-normal fs_md">
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim
                  <span className="d-lg-block">
                    lacus id aliquam montes euismod urna sem.
                  </span>
                </p>
                <img
                  className="w-100 my-lg-3"
                  src={chartImage}
                  alt="chartImage"
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4 accordian_bg" eventKey="1">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <p className="mb-0  fw-semibold fs_xxl">02</p>
                <h3 className="ms-3 ms-lg-4 mb-0  fw-semibold fs_xxl">
                  Digital Marketing
                </h3>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="ms-4 ps-1 ps-lg-4">
                <p className="text_dark_50  fw-normal fs_md">
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim
                  <span className="d-lg-block">
                    lacus id aliquam montes euismod urna sem.
                  </span>
                </p>
                <img
                  className="w-100 my-lg-3"
                  src={chartImage}
                  alt="chartImage"
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4 accordian_bg" eventKey="2">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <p className="mb-0  fw-semibold fs_xxl">03</p>
                <h3 className="ms-3 ms-lg-4 mb-0  fw-semibold fs_xxl">
                  Social Media Management
                </h3>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="ms-4 ps-1 ps-lg-4">
                <p className="text_dark_50  fw-normal fs_md">
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim
                  <span className="d-lg-block">
                    lacus id aliquam montes euismod urna sem.
                  </span>
                </p>
                <img
                  className="w-100 my-lg-3"
                  src={chartImage}
                  alt="chartImage"
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4 accordian_bg" eventKey="3">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <p className="mb-0  fw-semibold fs_xxl">04</p>
                <h3 className="ms-3 ms-lg-4 mb-0  fw-semibold fs_xxl">
                  Development
                </h3>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="ms-4 ps-1 ps-lg-4">
                <p className="text_dark_50  fw-normal fs_md">
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim
                  <span className="d-lg-block">
                    lacus id aliquam montes euismod urna sem.
                  </span>
                </p>
                <img
                  className="w-100 my-lg-3"
                  src={chartImage}
                  alt="chartImage"
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <div className="bg_greenImage py-1 mt-lg-5">
        <Container>
          <h3 className="fs_3xl fw-medium text_darkLight mt-4 mt-lg-5">
            We are passionate about helping businesses grow and succeed in the
            digital age. We take pride in our work and strive to exceed your
            expectations every time.
          </h3>
          <div className="bg_greenBox my-4 my-lg-5">
            <Row className="py-4 justify-content-center">
              <Col className="my-3 my-lg-0" sm={6} md={4} lg={3}>
                <h3 className="text-white fw-bold text-center fs_4xl">10+</h3>
                <p className="mb-0 text_white_80 text-center fw-medium fs_xl">
                  Years of Experiences
                </p>
              </Col>
              <Col className="my-3 my-lg-0" sm={6} md={4} lg={3}>
                <h3 className="text-white fw-bold text-center fs_4xl">666+</h3>
                <p className="mb-0 text_white_80 text-center fw-medium fs_xl">
                  Project Completed
                </p>
              </Col>
              <Col className="my-3 my-lg-0" sm={6} md={4} lg={3}>
                <h3 className="text-white fw-bold text-center fs_4xl">555+</h3>
                <p className="mb-0 text_white_80 text-center fw-medium fs_xl">
                  Satisfied Client
                </p>
              </Col>
              <Col className="my-3 my-lg-0" sm={6} md={4} lg={3}>
                <h3 className="text-white fw-bold text-center fs_4xl">10+</h3>
                <p className="mb-0 text_white_80 text-center fw-medium fs_xl">
                  Awards Achieved
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TheService;
