/**
 * About component
 */

import React from "react";

/**
 * About background image
 */
import image from "../images/motion-background.jpg";
import arrowSvg from "../images/down-arrow.svg";

const imageAltText_back = "purple and blue abstract background";

const imageAltText = "Scroll-down button";
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Artificial intelligence engineering student. I enjoy creating automated learning systems with versatile practical applications, Additionally, I strive to learn more about artificial intelligence, particularly within the world of technology, to expand my expertise.";

/**
 * List of some of skills or technologies I work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Machine Learnning",
  "Deep Learnning",
  "Data Science",
  "Computer Vision & Image Processing",
  "Azure ML & Cognitive Services",
  "Oracle SQL",
  "Virtual Environments",
  "API-REST Consumption",
  "Version Control (GitHub)",
  "Repository Management",
  "React",
  "Node.js & AJAX",
  "Anaconda",
  "Python",
  "Java",
  "C++",
  "C#",
  "Matlab",
  "HTML, CSS & JS",
];

const detailOrQuote =
  "I am passionate about solving problems in new Creatively and efficiently ways. I always seek challenges and opportunities that allow me to enhance my skills and knowledge in the field of artificial intelligence, in order to further enrich my professional experience.";

const About = () => {
  return (
    <section className="padding" id="about">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          zIndex: 0,
        }}
      >
        <img className="background" src={image} alt={imageAltText_back} />
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      <div id="Scroll_Down_B_S" className="S_D_B_S_C" style={{ position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <a href="#education"><span></span><span></span><span></span></a>
      </div>
    </section>
  );
};

export default About;
