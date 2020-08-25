import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//aos import
import Aos from "aos";
import "aos/dist/aos.css";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";


//styles import
import stylesC from "./Cards.module.css";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Services</h2>

      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card plain data-aos="zoom-in-up">
              <ul className={stylesC.chgrid}>
                <li>
                  <div className={stylesC.chitem}>
                    <div className={stylesC.chinfo}>
                      <div
                        className={stylesC.chinfofront + " " + stylesC.chimg1}
                      ></div>
                      <div className={stylesC.chinfoback}>
                        <h5>Info part </h5>
                        <p>Paragraph</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
            <h4 className={classes.cardTitle}>manual gridding</h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain data-aos="zoom-in-up">
              <ul className={stylesC.chgrid}>
                <li>
                  <div className={stylesC.chitem}>
                    <div className={stylesC.chinfo}>
                      <div
                        className={stylesC.chinfofront + " " + stylesC.chimg2}
                      ></div>
                      <div className={stylesC.chinfoback}>
                        <h5>Info part </h5>
                        <p>Paragraph</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
            <h4 className={classes.cardTitle}>manual gridding</h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain data-aos="zoom-in-up">
              <ul className={stylesC.chgrid}>
                <li>
                  <div className={stylesC.chitem}>
                    <div className={stylesC.chinfo}>
                      <div
                        className={stylesC.chinfofront + " " + stylesC.chimg3}
                      ></div>
                      <div className={stylesC.chinfoback}>
                        <h5>Info part </h5>
                        <p>Paragraph</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
            <h4 className={classes.cardTitle}>manual gridding</h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain data-aos="zoom-in-up">
              <ul className={stylesC.chgrid}>
                <li>
                  <div className={stylesC.chitem}>
                    <div className={stylesC.chinfo}>
                      <div
                        className={stylesC.chinfofront + " " + stylesC.chimg4}
                      ></div>
                      <div className={stylesC.chinfoback}>
                        <h5>Info part </h5>
                        <p>Paragraph</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
            <h4 className={classes.cardTitle}>manual gridding</h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain data-aos="zoom-in-up">
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <ul className={stylesC.chgrid}>
                  <li>
                    <div className={stylesC.chitem}>
                      <div className={stylesC.chinfo}>
                        <div
                          className={stylesC.chinfofront + " " + stylesC.chimg1}
                        ></div>
                        <div className={stylesC.chinfoback}>
                          <h5>backside info</h5>
                          <p>honolulu</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </GridItem>
            </Card>
            <h4 className={classes.cardTitle}>manual gridding</h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
