import React from "react";
import Grid from "@mui/material/Grid";
import "./ExpItem.css";

function ExpItem(props) {
  return (
    <div className="listItem">
      <li>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <section>
              <img src={props.img} align="left" />
              <h3>{props.org}</h3>
              <h4>{props.position}</h4>
            </section>
          </Grid>
        </Grid>
      </li>
    </div>
  );
}

export default ExpItem;
