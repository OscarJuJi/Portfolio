/**
 * Home component
 *
 * The section at the top of the page.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. 
 */ 
import image from "../images/background.png";

const imageAltText = "Scroll-down button";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="A simple web code" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "90vw",textAlign:"right", color: "rgb(145,205, 145)"}}>
        <h1 style={{ marginBottom: "3rem"}}className="word">{name}</h1>
        <h2>{title}</h2>
      </div>
      <div id="Scroll_Down_B_S" className="S_D_B_S_C" style={{ position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <a href="#about"><span></span><span></span><span></span></a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
