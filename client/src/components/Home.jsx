
import React from 'react';
import Navbar from './Navbar';
import Button from './Button'; 
import Notes from './Notes';
import vschool from '../assets/v_school.png';
import NotesButton from './NotesButton'; 
import ToggleableButton from './ToggleableButton'; 

const Home = () => {
  return (
    <>
      <main>
        <section className="container">
          <h1 className="page-title">MERN Stack Helper</h1>
          <a href="https://vschool.io/" target="_blank" rel="noopener noreferrer">
            <img src={vschool} alt="v school image" />
          </a>
          <section className="intro">
            <p>MERN Stack Helper is a web application designed to provide comprehensive information and guidance on utilizing the MERN stack technologies - MongoDB, Express.js, React.js, and Node.js. The application consists of multiple pages, each focusing on a specific technology within the MERN stack.</p>
          </section>
          <section className="buttons">
            <Button text="M" linkTo="/m-page" />
            <Button text="E" linkTo="/e-page" />
            <Button text="R" linkTo="/r-page" />
            <Button text="N" linkTo="/n-page" />
            <ToggleableButton buttonText="Developer Notes" initialState={false}>
              <NotesButton notesComponent={<Notes />} />
            </ToggleableButton>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
