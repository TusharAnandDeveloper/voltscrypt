import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//hash links
import { HashLink as Link } from "react-router-hash-link";

// @material-ui/icons

// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page

import Productinfo from "./Sections/Productinfo.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Products(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="Products" >
      <Parallax filter image={require("assets/img/bg9.jpg")}>
        <div className={classes.container}>
          <GridContainer style={{ justifyContent: "flex-start" }}>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Our Products</h1>
              <h4>information regarding our expertise</h4>
              <br />
              
                <Button
                  color="warning"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  More Info
                </Button>
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(classes.main)}
        id="product-info"
        style={{ height: "90vh" }}
        
      >
        <Productinfo />
      </div>
    </div>
  );
}
