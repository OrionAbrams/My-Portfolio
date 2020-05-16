import React from "react";
import Orion from "../../assets/img/me.png"
import { Link } from "react-router-dom";
import "./style.css"

function About() {
  return (
    <div className="very-high">
      <div className="row">
        <div className="col-md-11">
          <h1>About Me</h1>
          <img className="face" alt="My face" src={Orion} />
          <p className="bio">
            Hi! My name is Orion and I am a full stack developer who loves thinking outside the box for solutions to problems. I spent years teaching meditation but recently made a big career change, went to Berkeley Extension Full Stack Coding Bootcamp, and have been working at <Link target="_blank" className="" to="//www.celigo.com">Celigo</Link> in San Mateo as an Integration Engineer since July 2019. Check out some of my projects and contact me with any questions. Thanks!
        </p>
          

        </div>
      </div>
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-12 textcontainer">
           
              <p className="bio">
            <Link target="_blank" className="contact-links text-dark" to="//drive.google.com/file/d/14GC2oUkdZH_dKI7r7Fd4EDVvvjzs-Rsa/view?usp=sharing"> Resume &nbsp;</Link>
            <Link target="_blank" className="contact-links text-dark" to="//github.com/OrionAbrams"> Github &nbsp;</Link>
            <Link target="_blank" className="contact-links text-dark" to="//www.linkedin.com/in/orionabrams/"> LinkedIn &nbsp;</Link>
            <Link target="_blank" className="contact-links text-dark space-from-footer" to="//twitter.com/OrionAbrams"> Twitter &nbsp;</Link>
          </p>
            </div>
          
      <div className="container space-from-footer">
        <div className="row">
          <div className="col-md-6 top-space">
            <div className="card mw-75 h-100">
              <p className="text-center tech-title">Front-End Skills:</p>
              <ul>
                <li>React.js</li>
                <li>Integrating/Creating APIs</li>
                <li>Netsuite Administration and Scripting</li>
                <li>CSS and frameworks</li>
                <li>Handlebars</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>HTML and templating</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
      
          <div className="col-md-6 top-space">
            <div className="card mw-75 h-100">
              <p className="text-center tech-title">Back-End Skills:</p>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>HTTP</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MVC</li>
                <li>Python</li>
                <li>SDK integration</li>
              </ul>
            </div>
          </div>
          {/* just need more content here to fix scrollbar issue if want bold hover */}
        </div>
      </div>
       </div>
        </div>
    // </div>
  );
}

export default About;
