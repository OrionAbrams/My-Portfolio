import React from "react";
import { Link } from "react-router-dom";
import "./pages/style.css"
import Twitter from "../assets/img/twitter.png"
import Github from "../assets/img/github.png"
import Linkedin from "../assets/img/linkedin.png"


function Footer() {
  return (
    <footer className="footer">&copy; Orion Abrams 2019
    <Link target="_blank" to={"//twitter.com/OrionAbrams"} >
    <img className="prof-icons" alt="twitter" src={Twitter} />
    </Link>
    <Link target="_blank" to={"//github.com/orionAbrams/"} >
    <img className="prof-icons" alt="Github" src={Github} />
    </Link>
    <Link target="_blank" to={"//www.linkedin.com/in/orionabrams/"} >
    <img className="prof-icons" alt="Linkedin" src={Linkedin} />
    </Link>
    </footer>
  );
}

export default Footer;
