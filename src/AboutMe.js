import React from "react";
import "./AboutMe.css";
import { Grid } from "@material-ui/core";
import jkt from "./media/indonesia.png";
import berkeley from "./media/berkeley.png";
import face from "./media/profpic.jpeg";
import { Divider } from "@mui/material";

function AboutMe() {
  return (
    <div className="aboutMe">
      <a class="anchor" id="intro"></a>
      <h2>Who Am I?</h2>
      <hr></hr>
      <img src={face} className="profpic" />
      <div className="intro">
        <p>
          Born and raised in Indonesia, I am a student at UC Berkeley studying
          Computer Science. Many things pique my interest, whether it's
          full-stack development, machine learning, dApp development,
          basketball, playing musical instruments, or even just talking with
          people. Feel free to reach out through my socials or email!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
