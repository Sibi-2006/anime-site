import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <div className='about'>
      <h1>About This Site</h1>
      <p>
        This is a simple Anime Explorer built using React and the Jikan API.<br />
        You can browse trending anime, search your favorite titles, and view detailed info.
      </p>
      <p>
        Built with 💙 by an anime lover, for anime lovers!
      </p>

      <h3>Connect with me:</h3>
      <p className='link'>
        <a 
          href="https://github.com/Sibi-2006" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginRight: "20px" }}
          className='connect'
        >
          🔗 GitHub
        </a>

        <a 
          href="https://www.instagram.com/_mr._.cb_?utm_source=qr&igsh=MWc1ZXQyZ3NpYXpyZQ==" 
          target="_blank" 
          rel="noopener noreferrer"
          className='connect'
        >
          📸 Instagram
        </a>

        <a
            href="https://www.linkedin.com/in/sibiraj-r-147936336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className='connect'
            >
            <FaLinkedin size={20} />
             LinkedIn
        </a>

      </p>
    </div>
  );
}
