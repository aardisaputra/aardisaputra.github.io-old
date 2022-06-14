import React from "react";
import "./Projects.css";
import ReactCardFlip from "react-card-flip";
import Box, { BoxProps } from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import TestImg from "./media/test.jpg";
import TestImg2 from "./media/test.webp";
import StockImg from "./media/stock.png";
import Warden from "./media/warden.jpeg";
import QuiConnect from "./media/quiconnect.png";
import Gitlet from "./media/gitlet.png";

import ProjectCard from "./helper_class/ProjectCard";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <a class="anchor" id="projects"></a>
        <h2> Check out some of my projects! </h2>
        <hr />
        <div className="projectsGrid">
          <Grid container spacing={6}>
            <ProjectCard image1={StockImg} image2={TestImg2} />
            <ProjectCard image1={Warden} image2={TestImg2} />
            <ProjectCard image1={QuiConnect} image2={TestImg2} />
            <ProjectCard image1={Gitlet} image2={TestImg2} />
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
