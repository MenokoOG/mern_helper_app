import React from 'react';


const Resources = () => {
  return (
    <>
      
      <main>
        <section className="container">
          <h1 className="page-title"> Helpful Resources</h1>
          <section className="content">
            <h2>HTML</h2>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. You can learn HTML from the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">Mozilla Developer Network (MDN) documentation</a>.</p>

            <h2>CSS</h2>
            <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. You can learn CSS from the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">MDN documentation</a>.</p>

            <h2>JavaScript</h2>
            <p>JavaScript is a programming language that enables you to interact with web pages. You can learn JavaScript from the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN documentation</a>.</p>

            <h2>npm</h2>
            <p>npm (Node Package Manager) is the default package manager for the JavaScript runtime environment Node.js. You can learn more about npm from the <a href="https://docs.npmjs.com/">official npm documentation</a>.</p>

            <h2>Morgan</h2>
            <p>Morgan is a popular HTTP request logger middleware for Node.js. You can find the documentation and usage information on <a href="https://github.com/expressjs/morgan">GitHub</a>.</p>

            <h2>dotenv</h2>
            <p>dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. You can find the documentation and usage information on <a href="https://github.com/motdotla/dotenv">GitHub</a>.</p>

            <h2>UUID</h2>
            <p>UUID (Universally Unique Identifier) is a 128-bit unique identifier standardized by the Open Software Foundation. You can find the documentation and usage information on <a href="https://www.npmjs.com/package/uuid">npm</a>.</p>

            <h2>Git</h2>
            <p>Git is a distributed version control system for tracking changes in source code during software development. You can learn Git from the <a href="https://git-scm.com/documentation">official Git documentation</a>.</p>

            <h2>GitHub</h2>
            <p>GitHub is a web-based platform for version control using Git. You can learn about GitHub and its features from the <a href="https://docs.github.com/en">official GitHub documentation</a>.</p>

            <h2>Netlify</h2>
            <p>Netlify is a cloud computing company that offers hosting and serverless backend services for web applications. You can find the documentation and usage information on <a href="https://docs.netlify.com/">Netlify documentation</a>.</p>

            <h2>Render</h2>
            <p>Render is a cloud platform that offers hosting and infrastructure services for web applications. You can find the documentation and usage information on <a href="https://render.com/docs">Render documentation</a>.</p>

            {/* Add more resources as needed */}
          </section>
        </section>
      </main>
    </>
  );
}

export default Resources;
