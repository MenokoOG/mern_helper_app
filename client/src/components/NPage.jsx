// NPage.js
import React from 'react';
import Navbar from './Navbar';
import Button from './Button';
import Notes from './Notes';

const NPage = () => {
  return (
    <>
      
      <main>
        <section className="container">
          <h1>Node.js</h1>
          <div>
            
            <p>
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
            </p>
            <h3>Installation</h3>
            <p>To install Node.js, download the installer from the <a href="https://nodejs.org/">official Node.js website</a> and follow the installation instructions.</p>
            <h3>Usage</h3>
            <p>Check the installed Node.js version:</p>
            <pre><code>{`node --version`}</code></pre>
            <p>Create a Node.js script:</p>
            <pre><code>{`console.log('Hello, Node.js!');`}</code></pre>
            <p>For more information, refer to the <a href="https://nodejs.org/en/docs/">Node.js documentation</a>.</p>
          </div>
          <Button text="N" linkTo="/" />
          <Notes />
        </section>
      </main>
    </>
  );
}

export default NPage;
