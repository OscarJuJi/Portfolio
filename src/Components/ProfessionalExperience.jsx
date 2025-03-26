import React from "react";
import image from "../images/background1.jpg"; // Background image for the section



const experienceList = [
  {
    title: "Full-Stack Intern",
    company: "Banco de México",
    duration: "June 2024 – December 2024",
    description: [
      "Played a role as a full-stack developer.",
      "Developed and maintained web applications using SQL, HTML, CSS, JSP, and JavaScript.",
      "Optimized application performance and user experience.",
      "Managed SQL databases to ensure data integrity and efficiency.",
    ],
  },
];

const ProfessionalExperience = () => {
  return (
    <section
      id="experience"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "white",
      }}
    >
      <div
        style={{
          width: "50%",
          borderRadius: "1rem",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.75)", // Semi-transparent background for readability
          zIndex: 1,
        }}
      >
        <h2>Professional Experience</h2>
        {experienceList.map((job, index) => (
          <div key={index} style={{ marginBottom: "2rem" }}>
            <h3>{job.title} – {job.company}</h3>
            <h4 style={{ fontStyle: "italic", color: "#ccc" }}>{job.duration}</h4>
            <ul style={{ textAlign: "left", margin: "1rem 0" }}>
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div id="Scroll_Down_B_S" className="S_D_B_S_C" style={{ position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <a href="#portfolio"><span></span><span></span><span></span></a>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
