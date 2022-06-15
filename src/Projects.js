import React from "react";
import "./Projects.css";
import Grid from "@mui/material/Grid";

import StockImg from "./media/stock.png";
import Warden from "./media/warden.jpeg";
import QuiConnect from "./media/quiconnect.png";
import Gitlet from "./media/gitlet.png";

import ProjectCard from "./helper_class/ProjectCard";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <a class="anchor" id="projects">
          Projects Anchor
        </a>
        <h2> Check out some of my projects! </h2>
        <hr />
        <div className="projectsGrid">
          <Grid container spacing={6}>
            <ProjectCard
              image1={StockImg}
              title="Stock Portfolio Rebalancer"
              desc="Awarded 3rd place in UChicago Trading Competition. Implemented strategy is based on the Black Litterman model, built with NumPy and Pandas."
            />
            <ProjectCard
              image1={Warden}
              title="Warden"
              desc="Won 1st place in CivHacks hackathon. Built mobile app that compiles up-to-date data on criminal incidents in Berkeley. Built with React Native, Flask, and the Gmail API."
            />
            <ProjectCard
              image1={QuiConnect}
              title="QuiConnect"
              desc="CalHacks hackathon project. Developed alternative to the default contacts app by utilizing QR codes to share all social media and contact information in one go."
            />
            <ProjectCard
              image1={Gitlet}
              title="Gitlet"
              desc="Miniature clone of the version-control system Git. Built purely using Java, implemented BFS algorithms such as Djikstra's."
            />
          </Grid>
        </div>
        <a class="moreGHub" href="https://github.com/aardisaputra">
          <p>Check out my GitHub to see more!</p>
        </a>
      </div>
    );
  }
}

export default Projects;
