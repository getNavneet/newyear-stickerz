import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./social.css"
const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://x.com/get2Navneet" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/bittu_boss__01_/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="mailto:navneetkumar.learn@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
