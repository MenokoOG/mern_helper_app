import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Navbar from './Navbar';

const Author = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <h1 className="page-title">Author</h1>
          <section className="content">
            <h2>Lawrence "Menoko OG" Jefferson II</h2>

            
            <p>Well rounded professional with strong background in leadership, employing modern technology and encouraging teams to achieve successful outcomes. Coming from a family rooted in technology, I enjoy investigating and learning about applications and technology stacks so that I may leverage them in my duties. Currently progressing through full stack (MERN) web development bootcamp with V School</p>

            <p>Connect with me</p>
            <a href="https://github.com/MenokoOG" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
<a href="https://www.linkedin.com/in/lawrence-jefferson-ii-46497075" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>

          </section>
        </section>
      </main>
    </>
  );
}

export default Author;
