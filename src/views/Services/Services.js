import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page

import TeamSection from "./Sections/TeamSection.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Services(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="Services">
      
      
      <div className={classNames(classes.main)}>
        <TeamSection />
      </div>
    </div>
  );
}
