import React from "react";
import Orion from "../../assets/img/me.png"
import "./style.css"

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img className="rounded-circle face" alt="My face" src={Orion} />
      <p className="bio">
        I'm an ambitious web developer who enjoys solving puzzles and problems by calculating the best possible solutions. I am looking for a web development job for an innovative company. I Love tackling the rules and tactics in digital card games to identify the best line of play and am applying this problem-solving passion to coding. I acquired a certificate from Berkeley Extension Full-stack Bootcamp, which expanded skills in HTML/CSS, Javascript, JQuery, React, and Node. I’m thrilled to work with other developers to find bugs quickly and design excellent coding structures. My enthusiasm for problem-solving and tranquil demeanor is invaluable for any company.
    </p>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
          
        I'm skilled in these frontend technologies:
        <ul>
          <li>React.js</li>
          <li>HTML and templating</li>
          <li>Handlebars</li>
          <li>CSS and frameworks</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>AJAX</li>
          <li>jQuery</li>
          <li>APIs</li>
          <li>Firebase</li>
        </ul>
      </div>
     
      <div className="col-md-6">
        And in these backend technologies:
        
        <ul>
          <li>Server-side JavaScript:</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>HTTP</li>
          <li>Databases and ORMs:</li>
          <li>MySQL and Sequelize</li>
          <li>MongoDB and Mongoose</li>
          <li>MVC</li>
        </ul>
    
       </div>
      </div>
      </div>
    </div>
  );
}

export default About;
