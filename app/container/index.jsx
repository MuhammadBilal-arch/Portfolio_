import React from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./Home";
import { Projects } from "./projects";
import Services from "./services";
import { Nav } from "../components/Nav/nav";
import { Footer } from "../components/Footer";

export const Main = () => {
  return (
    <React.Fragment>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />      
      <Footer />
    </React.Fragment>
  );
};
