import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//import of components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Socialbar from "components/Socialbar/Socialbar";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

//styles import
import styles from "assets/jss/material-kit-react/views/landingPage.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function Homer(props) {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="voltscypt"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Socialbar />
      <Parallax filter image={require("assets/img/bg8.jpg")}>
        <div className={classes.container}>
          <GridContainer style={{ justifyContent: "flex-start" }}>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Your Needs ><br /> Our Solution
              </h1>
              <h4>we are here to automate your world.</h4>
              <br />
              <Button
                color="warning"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}

export default Homer;
