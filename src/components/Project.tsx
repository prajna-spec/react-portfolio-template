import React from "react";
import '../assets/styles/Project.scss';

function Project({ parentToChild, modeChange }: any) {
    const { mode } = parentToChild;
    return (
        <div
            className="projects-container"
            id="projects"
            style={{ color: mode === 'dark' ? 'white' : 'black' }}
        >
            <h1>Certifications</h1>
            <li>Azure Fundamentals (AZ-900)</li>
            <li>Microsoft Backend-Developer (Coursera)</li>
            <li>System Design in Cloud (LinkedIn)</li>
            <li>React Essentials (LinkedIn)</li>
            <li>C# and .NET Essential Training (LinkedIn)</li>
        </div>
    );
}

export default Project;


 