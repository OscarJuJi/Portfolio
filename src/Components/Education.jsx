
/**
 * Education component
 *
 * Space for you to describe more about your Education.
 */
import React from "react";

import image from "../images/Edu_BG2.jpg";

const imageAltText = "purple and blue abstract background";
const educationList = [
  {
    title: "Artificial Intelligence Engineering",
    description:
      "Currently, I am pursuing a degree in artificial intelligence engineering at the 'Escuela Superior de Computo (ESCOM)', IPN. I am currently delving into machine learning models and deep learning algorithms. Furthermore, I have developed soft skills including teamwork, assertive communication, personal leadership, among others.(2021-2025)",
  },
  {
    title: "Oracle next education",
    description:
      "I actively participated in the Oracle Next Education course sponsored by Oracle. Through this program, I acquired essential skills that span various relevant areas: programming logic, front-end and back-end development, as well as entrepreneurship.",
  },
  {
    title: "Microsoft Learn AI Skills Challenge",
    description:
      "Through this course, I obtained insights into Microsoft Azure cloud services, with a specific focus on practical applications of Machine Learning and Cognitive Services. Furthermore, I expanded my understanding of the lifecycle and documentation processes for artificial intelligence models.",
  },
];

const Education = () => (
  <section className="padding" id="education">
    <img className="background" src={image} alt={imageAltText} />
    <h2 style={{ textAlign: "center" }}>Education</h2>
    <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
      <div className="container">
        {educationList.map((education) => (
          <div className="box" key={education.title} style={{background:"#eeeedcaa"}}>
            {/* <p>{education}</p> */}
            <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
            <p className="small">{education.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div id="Scroll_Down_B_S" className="S_D_B_S_C" style={{ position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
      <a href="#portfolio"><span></span><span></span><span></span></a>
    </div>
  </section>
);
export default Education;