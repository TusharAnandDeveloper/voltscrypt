import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Youtube from "@material-ui/icons/YouTube";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: "0",
    top: "40%",
    zIndex: "4",
    backgroundColor: "default",
   
   
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

function Socialbar(props) {
  const classes = useStyles();
  return (
    <ButtonGroup
      className={classes.root}
      orientation="vertical"
      aria-label="vertical contained primary button group"
      variant="contained"
    >
      <Button href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
        <Facebook />
      </Button>
      <Button href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer">
        <Twitter />
      </Button>
      <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                      target="_blank"
                      rel="noopener noreferrer">
        <Youtube/>
      </Button>
      <Button href="https://www.Instagram.com"
                      target="_blank"
                      rel="noopener noreferrer">
        <Instagram />
      </Button>
    </ButtonGroup>
  );
}

export default Socialbar;
