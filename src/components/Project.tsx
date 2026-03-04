import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects" style = {{color: "white"}}>
        <h1>Certifications</h1>
        <ul>
          <li>Azure Fundamentals (AZ-900)</li>
          <li>Microsoft Backend-Developer (Coursera)</li>
          <li>System Design in Cloud (LinkedIn)</li>
          <li>React Essentials (LinkedIn)</li>
          <li>C# and .NET Essential Training (LinkedIn)</li>
        </ul>
    </div>
    );
}

export default Project;