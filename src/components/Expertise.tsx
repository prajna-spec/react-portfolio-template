import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Angular",
    "TypeScript",
    "C#",
    "C++",
    ".NET Development",
    "Windows Forms",
    "CSS3",
    "SASS",
    "SQL",
    "Postman",
    "Refactoring",
    "OOP",
    "Test Driven Development",
    "Design Patterns",
    "Data Structures & Algorithms",
    "Azure Devops",
    "Jira",
    "Git",
    "SVN",
    "Qt",
    "Linear Programming",
    "API Development",
    "Streamlit",
    "Azure",
    "AWS"
];

const labelsSecond = [
  "Python",
   "SQL",
   "Pytorch",
   "TensorFlow",
   "Data Analysis",
   "Statistical Modeling",
   "Computer Vision",
   "Machine Learning Algorithms",
   "Deep Learning",
   "Data Pipelines"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Hands-on experience in developing end-to-end applications and modernizing legacy systems to improve performance, scalability, and maintainability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data Engineering, Machine Learning and AI</h3>
                    <p>Designed and developed scalable data workflows and machine learning solutions to transform complex datasets into actionable insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;