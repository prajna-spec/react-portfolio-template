import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rio Tinto, Brisbane, Queensland</h4>
            <p>
              Contributed to the end-to-end development of Rio Tinto’s Life of Mine Optimization platform, delivering features, refactoring legacy components for performance, and ensuring quality through rigorous testing and code reviews
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">WallBridge Gilbert Aztec, Adelaide, South Australia</h4>
            <p>
              Designed and developed scalable data workflows and machine learning solutions to transform complex datasets into actionable insights.
            </p>
          </VerticalTimelineElement>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 Nov - 2023 Jan"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Maptek Pty Ltd, Adelaide, South Australia</h4>
            <p>
              Designed and developed a web-based POC  for an on-premise mining application that enables non-IT staff to configure server instances without requiring direct remote access. This approach addressed a key operational challenge by providing a secure, accessible, and cloud-friendly alternative to traditional manual workflows.

            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;