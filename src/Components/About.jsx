import React from "react";
import image from "../images/background1.jpg"; // Imagen de fondo
import arrowSvg from "../images/down-arrow.svg"; // Flecha de scroll

const imageAltText = "Scroll-down button";

const description =
  "I'm an Artificial Intelligence Engineering student. I enjoy creating automated learning systems with versatile practical applications. Additionally, I strive to learn more about artificial intelligence, particularly within the world of technology, to expand my expertise.";

// Listado de habilidades
const skillsList = [
  "Artificial Intelligence",
  "Machine Learning & Deep Learning",
  "Natural Language Processing",
  "Google Cloud Platform  & AI",
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
  "PowerBI",
  "Python",
  "Java",
  "C++",
  "C#",
  "Matlab",
  "HTML, CSS & JS",
  "typescript",
  "Docker",

];

// Mapeo de habilidades a sus logos
const skillsIcons = {
  "Artificial Intelligence": "https://img.icons8.com/color/100/artificial-intelligence.png",
  "Machine Learning & Deep Learning": "https://img.icons8.com/?size=100&id=oOOSYZyuA844&format=png&color=000000",
  "Natural Language Processing": "https://img.icons8.com/?size=100&id=sop9ROXku5bb&format=png&color=000000",
  "Google Cloud Platform  & AI": "https://img.icons8.com/color/100/google-cloud.png",
  "Data Science": "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000",
  "Computer Vision & Image Processing": "https://img.icons8.com/?size=100&id=bpip0gGiBLT1&format=png&color=000000",
  "Azure ML & Cognitive Services": "https://img.icons8.com/color/100/azure-1.png",
  "Oracle SQL": "https://img.icons8.com/color/100/oracle-logo.png",
  "Virtual Environments": "https://img.icons8.com/color/100/virtual-reality.png",
  "API-REST Consumption": "https://img.icons8.com/color/100/api.png",
  "Version Control (GitHub)": "https://img.icons8.com/fluency/100/github.png",
  "Repository Management": "https://img.icons8.com/color/100/git.png",
  "React": "https://img.icons8.com/color/100/react-native.png",
  "Node.js & AJAX": "https://img.icons8.com/color/100/nodejs.png",
  "PowerBI": "https://img.icons8.com/color/100/power-bi.png",
  "Python": "https://img.icons8.com/color/100/python.png",
  "Java": "https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png",
  "C++": "https://img.icons8.com/color/100/c-plus-plus-logo.png",
  "C#": "https://img.icons8.com/color/100/c-sharp-logo.png",
  "Matlab": "https://img.icons8.com/?size=100&id=r5Y16PcDkoWI&format=png&color=000000",
  "HTML, CSS & JS": "https://img.icons8.com/color/100/html-5--v1.png",
  "typescript": "https://img.icons8.com/color/100/typescript.png",
  "Docker" : "https://img.icons8.com/color/100/docker.png",
};

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
        {/* Grid de habilidades */}
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            textAlign: "left",
            margin: "2rem 0",
          }}
        >
          {skillsList.map((skill) => {
            
            const icon = skillsIcons[skill];
            return (
              
              <div
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.5rem",
                  border: "1px solid #444",
                  borderRadius: "0.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                {icon && (
                  <img
                    src={icon}
                    alt={`${skill} logo`}
                    style={{ width: "40px", height: "40px", objectFit: "contain", marginRight: "0.5rem" }}
                  />
                )}
                <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{skill}</span>
              </div>
            );
          })}
        </div>
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
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default About;
