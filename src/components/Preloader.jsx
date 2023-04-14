import React from "react";
import loadimg from "../assets/img/svg/Logo.svg";
const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="preloader">
        <img className="animationMove " width={170} src={loadimg} alt="loadimg" />
      </div>
    </div>
  );
};

export default Preloader;
