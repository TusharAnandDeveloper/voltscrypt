import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
} from "assets/jss/material-kit-react.js";

const socialbarStyle = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: "0",
    top: "40%",
    zIndex: "4",
    

    "& > *": {
      margin: theme.spacing(0),
    },
  },
 
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)",
    },
  },

  
});

export default socialbarStyle;
