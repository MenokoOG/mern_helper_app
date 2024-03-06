// Home.js
import React from 'react';
import Navbar from './Navbar';
import Button from './Button';
import Notes from './Notes';
import vschool from '../assets/v_school.png';

const Home = () => {
  return (
    <>
      
      <main>
        <section className="container">
          <h1 className="page-title">MERN Stack Helper</h1>
          <img src={vschool} alt="v school image" />
          <section className="intro">
            <p>MERN Stack Helper is a web application designed to provide comprehensive information and guidance on utilizing the MERN stack technologies - MongoDB, Express.js, React.js, and Node.js. The application consists of multiple pages, each focusing on a specific technology within the MERN stack.</p>
          </section>
          <section className="buttons">
            <Button text="M" linkTo="/m-page" />
            <Button text="E" linkTo="/e-page" />
            <Button text="R" linkTo="/r-page" />
            <Button text="N" linkTo="/n-page" />
          </section>
           <Notes /> 
        </section>
      </main>
    </>
  );
}

export default Home;
