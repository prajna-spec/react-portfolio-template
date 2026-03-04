import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="www.linkedin.com/in/prajnagupta" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href= "https://github.com/prajna-spec" target="_blank" rel="noreferrer">Prajna Gupta</a> with 💜</p>
    </footer>
  );
}

export default Footer;