import React from 'react';


const Resources = () => {
  return (
    <>
      <main>
        <section className="container">
          <h1 className="page-title">Helpful Resources</h1>
          <section className="content">
            {/* Existing resources */}
            <div className='card'><h2>HTML</h2>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. You can learn HTML from the 
            </p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">Mozilla Developer Network (MDN) documentation</a>.</div>
            
              <div className='card'><h2>CSS</h2>
            <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. You can learn CSS from the </p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">MDN documentation</a>.</div>
            
            <div className='card'><h2>JavaScript</h2>
            <p>JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. You can learn JavaScript from the </p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN documentation</a>.</div>
            
            <div className='card'><h2>npm</h2>
            <p>npm (Node Package Manager) is the default package manager for the JavaScript runtime environment Node.js. It's an indispensable tool for modern web development. Learn more about npm from the</p> <a href="https://docs.npmjs.com/">official npm documentation</a>.</div>
            
            <div className='card'><h2>Morgan</h2>
            <p>Morgan is a popular HTTP request logger middleware for Node.js, perfect for monitoring requests during development. Find documentation and usage information on</p> <a href="https://github.com/expressjs/morgan">GitHub</a>.</div>
            
            <div className='card'><h2>dotenv</h2>
            <p>dotenv is a module that loads environment variables from a .env file into process.env, simplifying the management of configuration settings. Documentation and usage information are available on </p><a href="https://github.com/motdotla/dotenv">GitHub</a>.</div>
            
            <div className='card'><h2>UUID</h2>
            <p>UUID (Universally Unique Identifier) provides a way to generate unique identifiers, essential for ensuring data uniqueness across components. Documentation is available on</p> <a href="https://www.npmjs.com/package/uuid">npm</a>.</div>
            
            <div className='card'><h2>Git</h2>
            <p>Git is the backbone of version control for developers, allowing you to track and manage code changes. Learn Git from the</p> <a href="https://git-scm.com/documentation">official Git documentation</a>.</div>
            
            <div className='card'><h2>GitHub</h2>
            <p>GitHub extends Git's capabilities with online hosting, making it easier to collaborate on projects. Learn about GitHub from the</p> <a href="https://docs.github.com/en">official GitHub documentation</a>.</div>
            
            <div className='card'><h2>Netlify</h2>
            <p>Netlify offers hosting and serverless backend services for static websites and web applications with continuous deployment from Git across all of Netlify’s CDN. Find more on the </p><a href="https://docs.netlify.com/">Netlify documentation</a>.</div>
            
            <div className='card'><h2>Render</h2>
            <p>Render is a comprehensive cloud platform offering a range of services from static site hosting to PostgreSQL databases, emphasizing ease of use and automation. Documentation is available on </p><a href="https://render.com/docs">Render documentation</a>.</div>
            

            {/* New IDE resources */}
            <div className='card'><h2>Visual Studio Code (VS Code)</h2>
            <p>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes. Learn more and download from the</p> <a href="https://code.visualstudio.com/">official website</a>.</div>
            
            <div className='card'><h2>Sublime Text</h2>
            <p>Sublime Text is a sophisticated text editor for code, markup, and prose. It offers a slick user interface along with a host of features such as Goto Anything, multiple selections, command palette, and more, making coding faster and more efficient. Learn more and download from the </p><a href="https://www.sublimetext.com/">official website</a>.</div>
            

           
            
            {/* Add more resources as needed */}
          </section>
        </section>
      </main>
    </>
  );
};

export default Resources;
