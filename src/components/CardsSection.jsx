import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import avtarImage from "../assets/img/png/AvatarImage.png";
import manAvtar from "../assets/img/png/manAvatar.png";
import Slider from "react-slick";

const CardsSection = () => {
  const first = useRef("");
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
        },
      },
    ],
  };
  return (
    <div className="py-4">
      <Container>
        <div className="d-lg-flex overflow-hidden">
          <Slider {...settings} className="w_50 w_lg_100 ms-lg-5 me-lg-2  ">
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={avtarImage} alt="avtarImage " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      Clara Insomnia
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Occupation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={manAvtar} alt="manAvtar " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      John Doe
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={avtarImage} alt="avtarImage " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      Clara Insomnia
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Occupation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={manAvtar} alt="manAvtar " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      John Doe
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={manAvtar} alt="manAvtar " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      John Doe
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={manAvtar} alt="manAvtar " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      John Doe
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          {/* <button onClick={() => first.current.slickPrev()}>prev</button>
          <button onClick={() => first.current.slickNext()}>next</button> */}
          <Slider
            {...settings}
            ref={first}
            className="w_50 w_lg_100 me-lg-5 ms-lg-2 d-none d-lg-block "
          >
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={avtarImage} alt="avtarImage " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      Clara Insomnia
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Occupation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={manAvtar} alt="manAvtar " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      John Doe
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={avtarImage} alt="avtarImage " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      Clara Insomnia
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Occupation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={manAvtar} alt="manAvtar " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      John Doe
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={avtarImage} alt="avtarImage " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      Clara Insomnia
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Occupation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="m-2 p-2 "
              md={6}
            >
              <div className="cardbackground p-3">
                <p className="mb-0 fs_lg fw-normal color_white text_black_50 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="mt-4 d-flex align-items-center">
                  <img src={manAvtar} alt="manAvtar " />
                  <div className="ms-3">
                    <p className="mb-0 text-black hoverWhite fw-semibold fs_lg">
                      John Doe
                    </p>
                    <p className="mb-0 mt-1 fs_sm hoverDark fw-normal text_dark_90">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default CardsSection;
