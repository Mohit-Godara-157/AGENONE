import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logoImage from "../assets/img/svg/Logo.svg";
import closeImage from "../assets/img/svg/closeImage.jpg";
const NavBar = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <Container>
      <div className="blurBox position-absolute zn_1  d-none d-lg-block  start-0 top-0"></div>
      <nav className="d-flex align-items-center  py-4 justify-content-between ">
        <a href="#">
          <img className="w_md_133" src={logoImage} alt="logoImage" />
        </a>
        <ul
          className={
            first
              ? "navClose d-flex align-items-center ps-0 mb-0"
              : "navOpen d-flex align-items-center ps-0 mb-0"
          }
        >
          <img
            onClick={() => setfirst(true)}
            className="curser d-lg-none bg-transparent position-absolute top-0 end-0 mt-4 me-4 rounder-5"
            src={closeImage}
            width={40}
            alt="closeImage"
          />
          <li className="mx-3 my-3 my-lg-0">
            <a
              onClick={() => setfirst("d-none")}
              className="fs_md fw-medium navLinks position-relative text-white"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mx-3 my-3 my-lg-0">
            <a
              onClick={() => setfirst("d-none")}
              className="fs_md fw-medium navLinks position-relative text-white"
              href="#"
            >
              Services
            </a>
          </li>
          <li className="mx-3 my-3 my-lg-0">
            <a
              onClick={() => setfirst("d-none")}
              className="fs_md fw-medium navLinks position-relative text-white"
              href="#"
            >
              Project
            </a>
          </li>
          <li className="mx-3 my-3 my-lg-0">
            <a
              onClick={() => setfirst("d-none")}
              className="fs_md fw-medium navLinks position-relative text-white"
              href="#"
            >
              About Us
            </a>
          </li>
          <button
            onClick={() => setfirst("d-none")}
            className="navBtn d-lg-none border-0  fs_sm fw-medium text-white"
          >
            Contact Us
          </button>
        </ul>
        <button className="navBtn d-none d-lg-block border-0  fs_sm fw-medium text-white">
          Contact Us
        </button>
        <div
          onClick={() => setfirst(false)}
          className="d-flex flex-column align-items-center d-lg-none menuBorder"
        >
          <span className="menuitems mb-2"></span>
          <span className="menuitems"></span>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
