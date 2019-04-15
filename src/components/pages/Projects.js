import React from "react";
import { Link } from "react-router-dom";
import Rupert from "../../assets/img/rupert.png"
import Pawstagram from "../../assets/img/pawstagram.png"
import Pilates from "../../assets/img/baypilates.png"
import Gbooks from "../../assets/img/google-books.png"
import Fullstack from "../../assets/img/fullstack.png"
import Scraper from "../../assets/img/scraper.png"
import "./style.css"

function Projects(props) {
  return (
    <div>
      <h1>Projects Page</h1>
      <div className="container-fluid very-high">
        <div className="row card-deck bottom-space top-space">
          {/* left this in because wasn't sure if I wanted to have the descriptive text above */}
          {/* <h5 className="col-md-6 text-center">Group Projects</h5>
          <h5 className="col-md-6 text-center">Solo Projects</h5> */}
          <div className="row">
            <div className="card col-md-6">
              <Link target="_blank" to={"//pawstagram.herokuapp.com/"} >
                <img className="project zoom card-img-top" alt="Pawstagram" src={Pawstagram} />
              </Link>
              <p className="card-text h-100 card-body">Pawstagram is a full stack social media web based application built for users to show off their pets.
              App uses JQuery, Mysql, Sequelize, Express, Firebase, Handlebars, Material Bootstrap, and RESTful APIs. <a href="https://github.com/OrionAbrams/Pawstagram" target="_blank" rel="noopener noreferrer">Source Code</a></p>

            </div>
            <div className="card col-md-6">

              <Link target="_blank" to={"//baypilateswellness.com"} >
                <img className="project zoom card-img-top" alt="Bay Pilates Wellness" src={Pilates} />
              </Link>
              <p className="card-text h-100 card-body">A deployed website promoting pilates, nutrition, and massage.
              The site uses HTML, Jquery, Bootstrap, and advanced CSS techniques. <a href="https://github.com/OrionAbrams/Bay-Pilates-Wellness" target="_blank" rel="noopener noreferrer">Source Code</a></p>

            </div>

            <div className="row card-deck middle-spacing">
              <div className="card col-md-6">

                <Link target="_blank"
                  to={"//orionabrams.github.io/Multiplayer-RPS/"} >
                  <img className="project zoom card-img-top" alt="Multiplayer Rock-Paper-Scissors" src={Fullstack} />
                </Link>
                <p className="card-text h-100 card-body">Fullstack-Network is a web-based application that enables users affiliated with coding boot camps to organize their curriculum and increase networking engagement. App uses Express, React, Node, Sequelize, and Material Design Bootstrap. <a href="https://github.com/OrionAbrams/Fullstack-Network" target="_blank" rel="noopener noreferrer">Source Code</a></p>

              </div>
              <div className="card col-md-6">
                <Link target="_blank" to={"//rupert-movie-companion.herokuapp.com/"} >
                  <img className="project zoom card-img-top" alt="Rupert, The Movie Companion" src={Scraper} />
                </Link>
                <p className="card-text h-100 card-body">This app scrapes the latest news about indie games from IND13 and the user can leave notes on the site they and others can see. App uses Mongo, Express, Node, and Cheerio. <a href="https://github.com/OrionAbrams/Scraper" target="_blank" rel="noopener noreferrer">Source Code</a></p>
              </div>
            </div>
          </div>
          <div className="row card-deck middle-spacing space-from-footer">
            <div className="card col-md-6">
              <Link target="_blank" to={"//rupert-movie-companion.herokuapp.com/"} >
                <img className="project zoom card-img-top" alt="Rupert, The Movie Companion" src={Rupert} />
              </Link>
              <p className="card-text h-100 card-body">Rupert is a movie helper app using Firebase, Dialogflow(as a Rupert chatbot), Bootstrap, and TMDB(The Movie Database) API. <a href="http://github.com/OrionAbrams/Rupert_Movie_Companion" target="_blank" rel="noopener noreferrer">Source Code</a></p>
            </div>

            <div className="card col-md-6">

              <Link target="_blank" to={"//google-books-react-orion.herokuapp.com/"} >
                <img className="project zoom card-img-top" alt="Google Books" src={Gbooks} />
              </Link>
              <p className="card-text h-100 card-body">An app that searches for google books, puts them into mongo database, and user can save or delete them.
App uses Full MERN Stack (Mongo, Express, React, Node). <a href="https://github.com/OrionAbrams/Google-Books" target="_blank" rel="noopener noreferrer">Source Code</a></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
