import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import lj from "../assets/l_jefferson.png"
import ph from "../assets/ph.png"


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
            <img src={lj} alt="lawrence jefferson ii" />
            <img src={ph} alt="purple heart" />
            
            <p>Once upon a time I was a kick-butt soldier in the U.S. Army. On November 16, 2008 in Herat Afghanistan while working with the U.S. State department as part of a protection detail for a visiting U.S. Ambassador, all of it changed. I was left with injuries that took me a long time to get stabilized and further time to learn how to manage my new self. Over the years since I have suffered more injury, loss,  and trauma, yet I never gave up. I turned to programming and technology to bring my out of the darkness. V School has been such a tremendous turning point for me. That is why I made this application in hopes that it helps others as they pursue their dream in full stack development. It is just a small token I can offer with the new skills V School has given me that will help me continue to heal and make  life better for me and my family.</p>

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
