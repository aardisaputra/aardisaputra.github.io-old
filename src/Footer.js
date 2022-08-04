import React from "react";
import "./Footer.css";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#fff",
      contrastText: "#000000",
    },
  },
});

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <a id="contact" />
      <div className="footer">
        <Grid container justify="center">
          <Button
            variant="contained"
            size="large"
            color="neutral"
            href="https://drive.google.com/file/d/1X9moKYPbK2UYZywDm3VHqgV23qYBvNue/view?usp=sharing"
          >
            <h3>DOWNLOAD RESUME</h3>
          </Button>
        </Grid>
        <Grid className="icons" container justify="center">
          <IconButton href="https://www.instagram.com/austinardisaputra/">
            <InstagramIcon
              className="icon"
              color="neutral"
              size="large"
              fontSize="large"
            />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/aardisaputra/">
            <LinkedInIcon
              className="icon"
              color="neutral"
              size="large"
              fontSize="large"
            />
          </IconButton>
          <IconButton href="https://github.com/aardisaputra">
            <GitHubIcon
              className="icon"
              color="neutral"
              size="large"
              fontSize="large"
            />
          </IconButton>
          <IconButton href="mailto:ardisaputra@berkeley.edu">
            <MailIcon
              className="icon"
              color="neutral"
              size="large"
              fontSize="large"
            />
          </IconButton>
        </Grid>
        <div className="copyright">
          <p>© Copyright 2022 Austin Nicola Ardisaputra</p>{" "}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Footer;
