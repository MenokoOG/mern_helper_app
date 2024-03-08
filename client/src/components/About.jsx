import React from 'react';


import Navbar from './Navbar';

const About = () => {
  return (
    <>
      
      <main>
        <section className="container">
          <h1 className="page-title">About MERN Stack Helper</h1>
          <section className="content">
            <p>Docs are here:<a href="https://github.com/MenokoOG/mern_helper_app" target="_blank"> MERN Stack Helper GitHub</a> </p>
            <p>Welcome to  MERN Stack Helper, created by <a href="https://www.linkedin.com/in/lawrence-jefferson-ii-46497075" target="_blank">Lawrence Jefferson II</a>
, also known as <a href="https://github.com/MenokoOG" target="_blank">MenokoOG</a> in the programming and design community.</p>
            <p>At  MERN Stack Helper, our primary aim is to support fellow students in their journey through the Full Stack Web Development course. We understand the challenges of mastering multiple technologies, which is why we've developed this application as a reference and helping tool.</p>
            <p>Our platform offers in-depth guides tailored to each MERN stack technology, providing step-by-step instructions and best practices. Navigate seamlessly through different technologies using our intuitive interface designed specifically for students.</p>
            
            <p>Your feedback and contributions are invaluable to us! If you have any questions, suggestions, or feedback, please feel free to reach out. Your input helps us improve and enhance the learning experience for all users.</p>
            <p>Help us reach more students by spreading the word about MERN Stack Helper. Together, we can create a supportive and thriving community of developers committed to mastering the MERN stack.</p>
            <p>Thank you for choosing MERN Stack Helper. Let's empower each other to succeed in our Full Stack Web Development journey!</p>
          </section>
        </section>
      </main>
    </>
  );
}

export default About;
