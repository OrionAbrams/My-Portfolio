import React from "react";
import { Link } from "react-router-dom";
import "./pages/style.css"
import Twitter from "../assets/img/twitter.png"
import Github from "../assets/img/github.png"
import Linkedin from "../assets/img/linkedin.png"


function Footer() {
  return (
    <footer className="footer">&copy; Orion 2020
    <Link target="_blank" to={"//twitter.com/orionabrams"} >
    <img className="prof-icons" alt="twitter" src={Twitter} />
    </Link>
    <Link target="_blank" to={"//github.com/orionabrams/"} >
    <img className="prof-icons" alt="Github" src={Github} />
    </Link>
    <Link target="_blank" to={"//linkedin.com/in/orionabrams/"} >
    <img className="prof-icons" alt="Linkedin" src={Linkedin} />
    </Link>
    </footer>
  );
}

export default Footer;
