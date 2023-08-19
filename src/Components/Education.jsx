/**
 * Education component
 *
 * Space for you to describe more about your Education.
 */
import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const projectList = [
    {
      title: "Faculty Management for the School of Computer Science",
      description:
        "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
      
    },
    {
      title: "Projects and assignments completed during my time at ESCOM",
      description:
        "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    },
  ];

  const Education = () => (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              {/* <p>{project}</p> */}
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
              </div>
          ))}
        </div>
      </div>

    </section>
  );
export default Education;