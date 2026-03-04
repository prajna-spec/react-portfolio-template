import React from 'react';
import '../assets/styles/Extracurriculars.scss';
import ActivityCard from './ActivityCard';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import { title } from 'process';



function Extracurriculars() {
  const activities = [
    {
      title: 'Hackathons',
      description: '',
      icon: <BuildIcon/>,
       
      subactivities: [
        {
          title: 'FoodDaily - AI-Powered Meal Planner | UniHack 2023',
          role: 'Organisation',
          duration: '2023',
          link: 'https://devpost.com/software/fooddaily?_gl=1*1x7jbeo*_gcl_au*MTkzNTQ5MjkzMS4xNzcyNTgyNjMy*_ga*NDc5NjM0MjIxLjE3NzI1ODI2MzM.*_ga_0YHJK3Y10M*czE3NzI1ODI2MzIkbzEkZzEkdDE3NzI1ODI3MDEkajYwJGwwJGgw',
          description: 'Co-developed FoodDaily an LLM powered web app that generates personalised meal plans based on user dietary requirements, integrating OpenAI with Node.js to drive intelligent recommendations.',
        },

        {
          title: 'Moodify | UniHack 2022',
          role: 'Participant',
          duration: '2022',
          link: "https://devpost.com/software/moodify-suajl8",
          description: 'Created a web app that uses machine learning to analyze user data and provide personalized study recommendations, improving academic performance.',
        }
      ]
    },

    {
      title: 'Professional Development',
      description: '',
      icon: <SchoolIcon />,

       subactivities: [
        {
          title: 'AWS She Builds Program',
          role: 'Organisation',
          link: "https://www.linkedin.com/company/aws-she-builds-mentorship-program/about/",
          description: 'A selected participant in the AWS She Builds Mentorship Program (2025), focused on networking, career mapping, and building technical depth in system design and software engineering.'
        },

        {
          title: "RSP Study Program",
          role: 'Participant',
          link: "https://www.linkedin.com/company/ravis-study-program/about/",
          description:  'Completed a selective 3-month coding bootcamp covering Data Structures & Algorithms (DSA), System Design, and hands-on projects, strengthening technical interview readiness.'
        }
    ]
    }
  ];

  return (
    <div id="extracurriculars">
      <div className="items-container">
        <h1>Extracurriculars</h1>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Extracurriculars;