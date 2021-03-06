// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Gavel from "@material-ui/icons/Gavel";
// @material-ui/icons
import House from "@material-ui/icons/House";
import Work from "@material-ui/icons/Work";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";



const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Blue Cottage Remodeling</h2>
          <h5 className={classes.description}>
            Additions, Kitchen Remodels, Decks, Bathroom Renovations, Building a shed,...whatever you want.
                      
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Licensed"
              description="I'm in the process of getting any licenses needed for remodeling."
              icon={Gavel}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Insured"
              description="I'm also in the process of setting up the business to have insurance."
              icon={House}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Experienced"
              description="Carpentry, Light Electrical , Plumbing, Designing, Roofing, 15 years of professional experience and 30 years altogether."
              icon={Work}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
