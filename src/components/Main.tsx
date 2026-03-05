import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import portfolioWebsite from '../assets/images/portfolioWebsite.png';
import Tooltip from '@mui/material/Tooltip/Tooltip';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
           <img src={portfolioWebsite} alt="Avatar" />
        </div>
        <div className="content">ß
          <div className="social_icons">
            <Tooltip title = "Resume">
              <a href="https://docs.google.com/document/d/1biV1kR50C55Z6aj1g-HAo46uSBg8wmxElHIxWrI3QSc/edit?usp=sharing" target="_blank" rel="noreferrer"><ArticleIcon/> </a>
            </Tooltip>
            <Tooltip title = "LinkedIn Profile">
              <a href="https://www.linkedin.com/in/prajnagupta" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </Tooltip>
            
          </div>
          <h1>Prajna Gupta</h1>
          <p> Software Engineer.</p>
          <p> <i style={{ fontSize: "0.75em"}}>Building things that work and keep working:) </i></p>
          <p style = {{fontSize: "0.95em"}}>
            I build and maintain scalable production systems, with a focus on system design, performance, and long-term maintainability. I enjoy refactoring and modernising mature codebases, thinking about how systems evolve over time. I’m currently expanding into AI-powered systems, exploring AI-assisted engineering workflows and learning how intelligent systems can be integrated into real-world architectures.
          </p>

          <div className="mobile_social_icons">
            <Tooltip title = "Resume">
              <a href="https://docs.google.com/document/d/1biV1kR50C55Z6aj1g-HAo46uSBg8wmxElHIxWrI3QSc/edit?usp=sharing" target="_blank" rel="noreferrer"><ArticleIcon/> </a>
            </Tooltip>
            <Tooltip title = "LinkedIn Profile">
              <a href="https://www.linkedin.com/in/prajna-gupta/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </Tooltip>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;