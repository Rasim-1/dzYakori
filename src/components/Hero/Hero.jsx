import React from "react";
import "./Hero.scss";

const Hero = ({ about, text, img, num }) => {
  return (
    <>
      <section className={`hero hero${num}`} id={`hero${num}`}>
        <div className="container">
          <div className="hero__wrapp">
            <div className="hero__wrapp-about">
              <h2>{about}</h2>
              <p>{text}</p>
              <button>Contact Us</button>
            </div>
            <div className="hero__wrapp-img">
              <img src={img} alt="" className="hero__img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
