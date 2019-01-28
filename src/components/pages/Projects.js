import React from "react";
import { Link } from "react-router-dom";
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
              <Link target="_blank" to={"//rupert-movie-companion.herokuapp.com/"} >
              <img className="project zoom" alt="Rupert, The Movie Companion" src={Rupert} />
              </Link>
          </div>
          <div className="col-md-3">
              <Link target="_blank" to={"//pawstagram.herokuapp.com/"} >
              <img className="project zoom" alt="Pawstagram" src={Pawstagram} />
              </Link>
          </div>
          <div className="col-md-3">
              <Link target="_blank" to={"//orionabrams.github.io/Multiplayer-RPS/"} >
              <img className="project zoom" alt="Multiplayer Rock-Paper-Scissors" src={RPS} />
              </Link>
          </div>
          <div className="col-md-3">
              <Link target="_blank" to={"//orionabrams.github.io/TriviaGame/"} >
              <img className="project zoom" alt="Video game trivia" src={Trivia} />
              </Link>
          </div>
        </div>
      </div>
      {/* <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/projects" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} /> */}
    </div>
  );
}

export default Projects;
