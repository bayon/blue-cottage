/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Button from "components/CustomButtons/Button.js";
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function MyHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
     
      <ListItem className={classes.listItem}>
        <Link to={"/"} className={classes.dropdownLink}>
           Home Page
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/login-page"} className={classes.dropdownLink}>
           Login Page
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        
         <Link to={"/profile-page"} className={classes.dropdownLink}>
           Profile Page
        </Link>
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem> */}
      
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            // href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      
    </List>
  );
}
