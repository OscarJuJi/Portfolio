import React from "react";

import PropTypes from "prop-types";
import image from "../images/background.png";

import resume from "../../public/resume.pdf";
import cv from "../../public/cv1.pdf";
import {Document, Page, pdfjs} from 'react-pdf';

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="A simple web code" />
      <div style={{ position: "absolute", top: "5rem", left: "5rem", width: "90vw", textAlign: "right", color: "rgb(145,205,145)" }}>
        <div style={{height: "auto", position: "relative"}} >
        <h1 style={{ marginBottom: "3rem", }} className="word">{name}</h1>
        
        </div>
        <h2>{title}</h2>
        
        <div style={{textAlign: "center",
            alignItems: "center",}}>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            marginTop: "15rem",
            marginRight: "14rem",  
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(145,205,145)",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "rgb(120,180,120)")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "rgb(145,205,145)")
          }
        >
          Curriculum
        </a>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            marginTop: "15rem",
            marginLeft: "auto",  
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(145,205,145)",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "rgb(120,180,120)")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "rgb(145,205,145)")
          }
        >
          Resume
        </a>
      </div>


      </div>

      <div id="Scroll_Down_B_S" className="S_D_B_S_C" style={{ position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <a href="#about"><span></span><span></span><span></span></a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Oscar Juarez",
  title: "Artificla Intelligence Engineer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;