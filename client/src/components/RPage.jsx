import React, { useState } from 'react';

import Button from "./Button";
import Notes from "./Notes";
import NotesButton from "./NotesButton";
import ToggleableButton from './ToggleableButton';

const RPage = () => {
  
  return (
    <>
      <main>
        <section className="container">
          <h1>React</h1>
          <div>
            <p>React is a JavaScript library for building user interfaces.</p>
            <h3>Installation</h3>
            <p>To install React, use npm or yarn:</p>
            <pre>
              <code>{`npm install react react-dom`}</code>
            </pre>
            <h3>Usage</h3>
            <p>Import React in your application:</p>
            <pre>
              <code>{`import React from 'react';`}</code>
            </pre>
            <p>Create a React component:</p>
            <pre>
              <code>{`const MyComponent = () => {
  return <div>Hello, React!</div>;
}`}</code>
            </pre>
            <p>
              For more information, refer to the{" "}
              <a
                href="https://react.dev/blog/2023/03/16/introducing-react-dev"
                target="_blank"
              >
                React documentation
              </a>
              .
            </p>
          </div>
          <div>
            <h3>Vite</h3>
            <p>
              Vite is a next-generation frontend tooling that provides a fast
              development server and optimized build process.
            </p>
            <h4>Installation</h4>
            <p>To create a new React project with Vite:</p>
            <pre>
              <code>{`npm create vite@latest`}</code>
            </pre>
            <p>
              For more information, visit the{" "}
              <a href="https://vitejs.dev/" target="_blank">
                Vite website
              </a>
              .
            </p>
            <h2>V School Specific Notes:</h2>
          </div>
          <Button text="Return to MERN" linkTo="/" />
          <ToggleableButton buttonText="Developer Notes" initialState={false}>
              <NotesButton notesComponent={<Notes />} />
            </ToggleableButton>
        </section>
      </main>
    </>
  );
};

export default RPage;
