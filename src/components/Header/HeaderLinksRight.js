/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Search } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js"

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinksRight(props) {
  const classes = useStyles();
  return (
    <div>
    <CustomInput
      white
      inputRootCustomClasses={classes.inputRootCustomClasses}
      formControlProps={{
        className: classes.formControl
      }}
      inputProps={{
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search",
          className: classes.searchInput
        }
      }}
    />
    <Button justIcon round color="white">
      <Search className={classes.searchIcon} />
    </Button>
  </div>
  
  );
}
