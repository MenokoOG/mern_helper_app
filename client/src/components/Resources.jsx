import React from 'react';

const Resources = () => {
  return (
    <>
      <main>
        <section className="container">
          <h1 className="page-title">Helpful Resources</h1>
          <section className="content">
            {/* Existing resources */}
            <h2>HTML</h2>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. You can learn HTML from the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">Mozilla Developer Network (MDN) documentation</a>.</p>

            <h2>CSS</h2>
            <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. You can learn CSS from the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">MDN documentation</a>.</p>

            <h2>JavaScript</h2>
            <p>JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. You can learn JavaScript from the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN documentation</a>.</p>

            <h2>npm</h2>
            <p>npm (Node Package Manager) is the default package manager for the JavaScript runtime environment Node.js. It's an indispensable tool for modern web development. Learn more about npm from the <a href="https://docs.npmjs.com/">official npm documentation</a>.</p>

            <h2>Morgan</h2>
            <p>Morgan is a popular HTTP request logger middleware for Node.js, perfect for monitoring requests during development. Find documentation and usage information on <a href="https://github.com/expressjs/morgan">GitHub</a>.</p>

            <h2>dotenv</h2>
            <p>dotenv is a module that loads environment variables from a .env file into process.env, simplifying the management of configuration settings. Documentation and usage information are available on <a href="https://github.com/motdotla/dotenv">GitHub</a>.</p>

            <h2>UUID</h2>
            <p>UUID (Universally Unique Identifier) provides a way to generate unique identifiers, essential for ensuring data uniqueness across components. Documentation is available on <a href="https://www.npmjs.com/package/uuid">npm</a>.</p>

            <h2>Git</h2>
            <p>Git is the backbone of version control for developers, allowing you to track and manage code changes. Learn Git from the <a href="https://git-scm.com/documentation">official Git documentation</a>.</p>

            <h2>GitHub</h2>
            <p>GitHub extends Git's capabilities with online hosting, making it easier to collaborate on projects. Learn about GitHub from the <a href="https://docs.github.com/en">official GitHub documentation</a>.</p>

            <h2>Netlify</h2>
            <p>Netlify offers hosting and serverless backend services for static websites and web applications with continuous deployment from Git across all of Netlify’s CDN. Find more on the <a href="https://docs.netlify.com/">Netlify documentation</a>.</p>

            <h2>Render</h2>
            <p>Render is a comprehensive cloud platform offering a range of services from static site hosting to PostgreSQL databases, emphasizing ease of use and automation. Documentation is available on <a href="https://render.com/docs">Render documentation</a>.</p>

            {/* New IDE resources */}
            <h2>Visual Studio Code (VS Code)</h2>
            <p>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes. Learn more and download from the <a href="https://code.visualstudio.com/">official website</a>.</p>

            <h2>Sublime Text</h2>
            <p>Sublime Text is a sophisticated text editor for code, markup, and prose. It offers a slick user interface along with a host of features such as Goto Anything, multiple selections, command palette, and more, making coding faster and more efficient. Learn more and download from the <a href="https://www.sublimetext.com/">official website</a>.</p>

            {/* Problem Solving Process */}
            <h2>Code Problem Solving Process</h2>
            <h3>Understand the Problem:</h3> 
<p>
Read carefully and identify the key components.</p>
<p>Use resources like Stack Overflow or the MDN Web Docs to clarify doubts.</p>
<h3>Plan:</h3>
<p> Write pseudocode or create flowcharts to outline your solution. Tools like Lucidchart or draw.io can be very helpful for visual planning.</p>
<h3>Execute:</h3>
<p> Code with focus, using VS Code or Sublime Text for a better coding experience. Both editors support extensions and plugins that can facilitate your coding process.</p>
<h3>Review:</h3>
<p>Test your code thoroughly. Use Git for version control to manage changes and collaborate with others. GitHub offers actions and CI/CD workflows to automate your testing and deployment processes.</p>

            {/* Project Proposal Preparation */}
            <h2>Project Planning and Proposal:</h2>

<h3>Project Proposal:</h3>  <p>Start with a clear and concise paragraph. Tools like Google Docs can be useful for drafting and sharing documents.</p>

<h3>MVP Definition:</h3><p> Define the scope of your MVP to ensure you have a focused and attainable goal. Trello or Asana can be used for project management and to track progress. </p>

<h3>User Story Mapping:</h3><p> Describe the user journey through your application to identify key features and functionalities. Tools like StoriesOnBoard can help visualize this process. </p>

<h3>Mind Mapping:</h3><p> Plan your application's architecture and components. MindMeister or Coggle are great tools for creating mind maps and visualizing your project structure. </p>


<p>By following these guidelines and utilizing the suggested tools and resources, you can enhance your development workflow, from problem-solving to project planning and execution.</p>

            {/* Agile and Scrum */}
            <h2>Agile and Scrum</h2>
            <p>Understanding Agile and Scrum is crucial for modern software development. These methodologies promote adaptive planning, evolutionary development, and flexibility. Learn more about Agile from the <a href="https://agilemanifesto.org/">Agile Manifesto</a> and about Scrum from <a href="https://www.scrum.org/resources/what-is-scrum">Scrum.org</a>.</p>
            
            {/* Add more resources as needed */}
          </section>
        </section>
      </main>
    </>
  );
};

export default Resources;
