import React from "react";
import Orion from "../../assets/img/me.png"
import "./style.css"

function About() {
  return (
    <div className="very-high">
    <div className="row">
    <div className="col">
      <h1>About Me</h1>
      <img className="rounded-circle face" alt="My face" src={Orion} />
      <p className="bio">
        Hi! Welcome to my website. My name is Orion and I am a web developer with a passion for solving puzzles. I recently acquired a certificate from Berkeley Extension Full-stack Bootcamp and am working on projects with most of my free time to improve my coding skills and create useful applications. Thank you for visiting my page, and please check out some of my projects. Please contact me with any questions using the mail icon above. Thanks!
    </p>
    </div>
    </div>
      <div className="container space-from-footer">
        <div className="row">
          <div className="col-md-6">
          <div className="card mw-75 h-100">
        <p className="text-center"><u>I'm skilled in these frontend technologies:</u></p>
        <ul>
          <li>React.js</li>
          <li>HTML and templating</li>
          <li>CSS and frameworks</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>AJAX</li>
          <li>jQuery</li>
          <li>APIs</li>
          <li>Firebase</li>
        </ul>
        </div>
      </div>
     
      <div className="col-md-6">
      <div className="card mw-75 h-100">
      <p className="text-center"><u>And in these backend technologies:</u></p>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>HTTP</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>MVC</li>
        </ul>
        </div>
       </div>
      </div>
      </div>
    </div>
  );
}

export default About;
