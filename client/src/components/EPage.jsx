// EPage.js
import React from 'react';

import Button from './Button';
import Notes from './Notes';

const EPage = () => {
  return (
    <>
      
      <main>
        <section className="container">
          <h1>Express</h1>
          <div>
            
            <p>
              Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
            </p>
            <h3>Installation</h3>
            <p>To install Express, use npm or yarn:</p>
            <pre><code>{`npm install express`}</code></pre>
            <h3>Usage</h3>
            <p>Import Express in your Node.js application:</p>
            <pre><code>{`const express = require('express');`}</code></pre>
            <p>Create an Express application:</p>
            <pre><code>{`const app = express();`}</code></pre>
            <p>For more information, refer to the <a href="https://expressjs.com/">Express documentation</a>.</p>
          </div>
          <Button text="E" linkTo="/" />
          <Notes />
        </section>
      </main>
    </>
  );
}

export default EPage;
