// RPage.js
import React from 'react';

import Button from './Button';
import Notes from './Notes';

const RPage = () => {
  return (
    <>
      
      <main>
        <section className="container">
          <h1>React</h1>
          <div>
            
            <p>
              React is a JavaScript library for building user interfaces.
            </p>
            <h3>Installation</h3>
            <p>To install React, use npm or yarn:</p>
            <pre><code>{`npm install react react-dom`}</code></pre>
            <h3>Usage</h3>
            <p>Import React in your application:</p>
            <pre><code>{`import React from 'react';`}</code></pre>
            <p>Create a React component:</p>
            <pre><code>{`const MyComponent = () => {
  return <div>Hello, React!</div>;
}`}</code></pre>
            <p>For more information, refer to the <a href="https://reactjs.org/docs/getting-started.html">React documentation</a>.</p>
          </div>
          <Button text="R" linkTo="/" />
          <Notes />
        </section>
      </main>
    </>
  );
}

export default RPage;
