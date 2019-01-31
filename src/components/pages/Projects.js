import React from "react";
import { Link } from "react-router-dom";
import Rupert from "../../assets/img/rupert.png"
import Pawstagram from "../../assets/img/pawstagram.png"
import RPS from "../../assets/img/RPS.png"
import Gbooks from "../../assets/img/google-books.png"
import "./style.css"

function Projects(props) {
  return (
    <div>
      <h1>Projects Page</h1>
      <div className="container-fluid very-high">
        <div className="row card-deck bottom-space top-space">
          <div className="card col-md-6">
            <Link target="_blank" to={"//pawstagram.herokuapp.com/"} >
              <img className="project zoom card-img-top" alt="Pawstagram" src={Pawstagram} />
            </Link>
            <p className="card-text h-100 card-body">Pawstagram is a full stack social media web based application built for users to show off their pets. It uses  JQuery, Mysql, Sequelize, Express, Firebase, Handlebars, Material Bootstrap, and RESTful APIs. <a href="https://github.com/OrionAbrams/Pawstagram" target="_blank" rel="noopener noreferrer">Source Code</a></p>

          </div>
          <div className="card col-md-6">

            <Link target="_blank" to={"//google-books-react-orion.herokuapp.com/"} >
              <img className="project zoom card-img-top" alt="Google Books" src={Gbooks} />
            </Link>
            <p className="card-text h-100 card-body">Full MERN Stack (Mongo, Express, React, Node) app that searches for google books, puts them into mongo database, and user can save or delete them. <a href="https://github.com/OrionAbrams/Google-Books" target="_blank" rel="noopener noreferrer">Source Code</a></p>

          </div>


        </div>
        <div className="row card-deck space-from-footer">
          <div className="card col-md-6">

            <Link target="_blank"
              to={"//orionabrams.github.io/Multiplayer-RPS/"} >
              <img className="project zoom card-img-top" alt="Multiplayer Rock-Paper-Scissors" src={RPS} />
            </Link>
            <p className="card-text h-100 card-body">Multiplayer Rock-Paper-Scissors is a simple rock, paper, scissors game using firebase to connect the user as player one or player two. It uses Javascript, JQuery, Firebase, Bootstrap, and Moment.js. <a href="https://github.com/OrionAbrams/Multiplayer-RPS" target="_blank" rel="noopener noreferrer">Source Code</a></p>

          </div>
          <div className="card col-md-6">
            <Link target="_blank" to={"//rupert-movie-companion.herokuapp.com/"} >
              <img className="project zoom card-img-top" alt="Rupert, The Movie Companion" src={Rupert} />
            </Link>
            <p className="card-text h-100 card-body">Rupert is a movie helper app using Firebase, Dialogflow(as a Rupert chatbot), Bootstrap, and TMDB(The Movie Database) API. <a href="http://github.com/OrionAbrams/Rupert_Movie_Companion" target="_blank" rel="noopener noreferrer">Source Code</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
