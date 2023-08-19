/**
 * About component
 */

import React from "react";

/**
 * About background image
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Artificial intelligence engineering student. I enjoy e creating automated learning systems with versatile practical applications, Additionally, I strive to learn more about artificial intelligence, particularly within the world of technology, to expand my expertise.";

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
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
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
    </section>
  );
};

export default About;
