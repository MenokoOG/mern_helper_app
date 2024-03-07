import React from 'react';



import Navbar from './Navbar';

const Planning = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <h1 className="page-title">Planning Tips</h1>
          <section className="content">
             {/* Problem Solving Process */}
             <h2>Code Problem Solving Process</h2>
             <div className='card'>
            <h3>Understand the Problem:</h3> 
<p>
Read carefully and identify the key components.</p>
<p>Use resources like Stack Overflow or the MDN Web Docs to clarify doubts.</p>
<h3>Plan:</h3>
<p> Write pseudocode or create flowcharts to outline your solution. Tools like Lucidchart or draw.io can be very helpful for visual planning.</p>
<h3>Execute:</h3>
<p> Code with focus, using VS Code or Sublime Text for a better coding experience. Both editors support extensions and plugins that can facilitate your coding process.</p>
<h3>Review:</h3>
<p>Test your code thoroughly. Use Git for version control to manage changes and collaborate with others. GitHub offers actions and CI/CD workflows to automate your testing and deployment processes.</p></div>
             

            {/* Project Proposal Preparation */}

            <h2>Project Planning and Proposal:</h2>
            <div className='card'><h3>Project Proposal:</h3>  <p>Start with a clear and concise paragraph. Tools like Google Docs can be useful for drafting and sharing documents.</p>

<h3>MVP Definition:</h3><p> Define the scope of your MVP to ensure you have a focused and attainable goal. Trello or Asana can be used for project management and to track progress. </p>

<h3>User Story Mapping:</h3><p> Describe the user journey through your application to identify key features and functionalities. Tools like StoriesOnBoard can help visualize this process. </p>

<h3>Mind Mapping:</h3><p> Plan your application's architecture and components. MindMeister or Coggle are great tools for creating mind maps and visualizing your project structure. </p>


<p>By following these guidelines and utilizing the suggested tools and resources, you can enhance your development workflow, from problem-solving to project planning and execution.</p></div>



            {/* Agile and Scrum */}
            <h2>Agile and Scrum</h2>
            <div className='card'><p>Understanding Agile and Scrum is crucial for modern software development. These methodologies promote adaptive planning, evolutionary development, and flexibility. Learn more about Agile from the <a href="https://agilemanifesto.org/">Agile Manifesto</a> and about Scrum from <a href="https://www.scrum.org/resources/what-is-scrum">Scrum.org</a>.</p></div>
            

          </section>
        </section>
      </main>
    </>
  );
}

export default Planning;
