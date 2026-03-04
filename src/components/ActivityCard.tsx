import React from 'react';
import '../assets/styles/ActivityCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ActivityCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  role?: string;
  duration?: string;
}


interface ActivityCardProps {
  title: string;                 // required
  description: string;           // not optional any more
  icon?: React.ReactNode;
  role?: string;
  duration?: string;
  link?: string;                // optional link for more info
  subactivities?: ActivityCardProps[]; // nested entries
}

function ActivityCard({ title, description, icon, role, duration, subactivities }: ActivityCardProps) {
  return (
    <Card className="activity-card">
      <CardContent>
        <div className = "card-header">
          {icon && <div className="card-icon">{icon}</div>}
        
        <Typography variant="h6" component="div" className="card-title">
          {title}
        </Typography>
        </div>
        <div className="card-content-flex">
          {description}
          {role && (
          <Typography variant="body2" className="card-duration">
            {role}
          </Typography>
        )}
        {duration && (
          <Typography variant="body2" className="card-duration">
            {duration}
          </Typography>
        )}
        </div>

        <div>
          {subactivities && subactivities.map((subactivity, index) => (
            
            <Typography key={index} variant="body2" className='card-subactivity'>
             <a href={subactivity.link} target="_blank" rel="noreferrer" style={{color: '#3498db', textDecoration: 'none'}}>{subactivity.title}</a>
              {subactivity.description}
            </Typography>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;