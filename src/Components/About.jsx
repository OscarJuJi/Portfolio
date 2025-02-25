import React from "react";
import image from "../images/background1.jpg"; // Imagen de fondo
import arrowSvg from "../images/down-arrow.svg"; // Flecha de scroll

const imageAltText = "Scroll-down button";

const description =
  "I'm an Artificial Intelligence Engineering student. I enjoy creating automated learning systems with versatile practical applications. Additionally, I strive to learn more about artificial intelligence, particularly within the world of technology, to expand my expertise.";

const skillsList = [
  "Web design",
  "Machine Learning",
  "Deep Learning",
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
  "I am passionate about solving problems in new creative and efficient ways. I always seek challenges and opportunities that allow me to enhance my skills and knowledge in the field of artificial intelligence, in order to further enrich my professional experience.";

const About = () => {
  return (
    <section
      className="padding"
      id="about"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Efecto Parallax (opcional)
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "50%",
          borderRadius: "1rem",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.75)", // Fondo semitransparente para legibilidad
          color: "white",
          zIndex: 1,
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
      <div
        id="Scroll_Down_B_S"
        className="S_D_B_S_C"
        style={{
          position: "absolute",
          bottom: "-3rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <a alt={imageAltText} href="#education">
          <span></span><span></span><span></span>
        </a>
      </div>
    </section>
  );
};

export default About;
