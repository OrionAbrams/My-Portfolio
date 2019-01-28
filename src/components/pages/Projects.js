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
      <div className="container-fluid very-high">
        <div className="row card-deck">
          <div className="card col-md-3">
              <Link target="_blank" to={"//rupert-movie-companion.herokuapp.com/"} >
                <img className="project zoom card-img-top" alt="Rupert, The Movie Companion" src={Rupert} />
              </Link>
              <p className="card-text card-body">Rupert!</p>
          </div>
          <div className="card col-md-3">

              <Link target="_blank" to={"//pawstagram.herokuapp.com/"} >
                <img className="project zoom card-img-top" alt="Pawstagram" src={Pawstagram} />
              </Link>
              <p className="card-text card-body">Pawstagram!</p>
           
          </div>
          <div className="card col-md-3">

              <Link target="_blank"
                to={"//orionabrams.github.io/Multiplayer-RPS/"} >
                <img className="project zoom card-img-top" alt="Multiplayer Rock-Paper-Scissors" src={RPS} />
              </Link>
              <p className="card-text card-body">Multiplayer Rock-Paper-Scissors!</p>
          
          </div>
          <div className="card col-md-3">

              <Link target="_blank" to={"//orionabrams.github.io/TriviaGame/"} >
                <img className="project zoom card-img-top" alt="Video game trivia" src={Trivia} />
              </Link>
              <p className="card-text card-body">Video Game Trivia!</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
