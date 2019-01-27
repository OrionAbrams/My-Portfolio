import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import Rupert from "../../assets/img/rupert.png"
import Pawstagram from "../../assets/img/pawstagram.png"
import RPS from "../../assets/img/RPS.png"
import Trivia from "../../assets/img/trivia.png"
import "./style.css"

function Projects(props) {
  return (
    <div>
      <h1>Projects Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="https://orionabrams.github.io/Multiplayer-RPS/">
              <img className="project" alt="Multiplayer Rock-Paper-Scissors" src={Rupert} /> </a>
          </div>
          <div className="col-md-3">
            <a href="https://pawstagram.herokuapp.com/">
              <img className="project" alt="Pawstagram" src={Pawstagram} /> </a>
          </div>
          <div className="col-md-3">
            <a href="https://orionabrams.github.io/Multiplayer-RPS/">
              <img className="project" alt="Multiplayer Rock-Paper-Scissors" src={RPS} /> </a>
          </div>
          <div className="col-md-3">
            <a href="https://orionabrams.github.io/TriviaGame/">
              <img className="project" alt="Video game trivia" src={Trivia} /> </a>
          </div>
        </div>
      </div>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/projects" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Projects;
