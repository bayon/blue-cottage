// @material-ui/core components
import Icon from '@material-ui/core/Icon';
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import MyHeaderLinks from "components/Header/MyHeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [ ];

const useStyles = makeStyles(styles);
const theme = createMuiTheme();
theme.typography.h1 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)': {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
};
theme.typography.h2 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.2rem',
  },
};
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Blue Cottage Remodeling LLC."
        rightLinks={<MyHeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/american_gothic_bw.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              {/* <h1 className={classes.title}>blue-cottage-remodeling.com</h1> */}
              <Typography variant="h1">Blue Cottage Remodeling</Typography>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
            <GridItem  xs={12} sm={6} md={6}>
            
              <Typography variant="h3">Let's renovate!</Typography>
             
             <div style={{marginTop:15}}>

            
            
              <a href="tel:8122670592" style={{color:"#fff",textDecoration:"none"}}>(812) 267-0592  <Icon  >phone</Icon></a>
             
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
    </ThemeProvider>
  );
}
