import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ReactCardFlip from "react-card-flip";
import Grid from "@mui/material/Grid";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <Grid item xs={12} md={6} lg={3} onClick={this.handleClick}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <div className="card">
            <Card>
              <CardMedia
                className="cardContent"
                component="img"
                image={this.props.image1}
              />
            </Card>
          </div>

          <div className="card">
            <Card>
              <CardContent className="cardContent2">
                <Typography>
                  <h4>{this.props.title}</h4>
                </Typography>

                <Typography>
                  <div id="projDesc">{this.props.desc}</div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </ReactCardFlip>
      </Grid>
    );
  }
}

export default ProjectCard;
