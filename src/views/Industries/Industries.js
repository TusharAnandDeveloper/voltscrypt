import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components

import Parallax from "components/Parallax/Parallax.js";
import Socialbar from "components/Socialbar/Socialbar.js";


import styles from "assets/jss/material-kit-react/views/landingPage.js";

import image1 from "assets/img/bg.jpg";
// Sections for this page
import SectionCarousel from "./Sections/SectionCarousel.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Industries(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="Industries">
      <Socialbar />
      <Parallax filter image={image1} style={{ zIndex: "5" }}>
        <SectionCarousel />
      </Parallax>
    </div>
  );
}
