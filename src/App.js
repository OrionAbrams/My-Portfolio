import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import NoMatch from "./components/pages/NoMatch";
import Footer from "./components/Footer"
import "./components/pages/style.css"

function App() {
  return (
    <Router>
      <div className="wrapping">
        <NavTabs />
        <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
