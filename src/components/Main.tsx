import React from "react";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import portfolioWebsite from '../assets/images/portfolioWebsite.png';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
           <img src={portfolioWebsite} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><PictureAsPdfOutlinedIcon/></a>
            <a href="https://www.linkedin.com/in/prajna-gupta/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Prajna Gupta</h1>
          <p> Software Engineer.</p>
          <p> <i style={{ fontSize: "0.75em" }}>Building things that don't break (usually...). </i></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><PictureAsPdfOutlinedIcon/></a>
            <a href="https://www.linkedin.com/in/prajna-gupta/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;