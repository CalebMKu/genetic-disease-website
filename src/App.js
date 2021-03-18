import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import InformationBoxes from "./components/InformationBoxes"
import AboutBanner from "./components/AboutBanner";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Banner title="Learn About Color Blindness" text="LEARN MORE" />
            <InformationBoxes />
          </Route>
          <Route exact path="/faqs">
            <AboutBanner title="What Is This Disorder?" bodyInfo="
              Color blindness is an enherited disease that usually occurs in males.
            " />
            <AboutBanner title="What Are The Treatments For Color Blindness?" bodyInfo="
              There are no treatments to most types of CVD's, however if it is due to the use of a certain medication, going off if that medication may or may not help.
            " />
            <AboutBanner title="What Is The Prognosis?" bodyInfo="
              Most color blindness is permanent. 
            " />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

