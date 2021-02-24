// @material-ui/core components
import Icon from '@material-ui/core/Icon';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";

// import team1 from "assets/img/faces/avatar.jpg";
// import team2 from "assets/img/faces/christian.jpg";
const bayon = "https://media-exp1.licdn.com/dms/image/C4D03AQHXzD5ZUmbpSw/profile-displayphoto-shrink_200_200/0/1516574446401?e=1619049600&v=beta&t=4hI89lgoF7rS7uomD0_kLlEtVIIRHJn6Dobs06yP5UE"
const katie = "https://images.squarespace-cdn.com/content/v1/54c4dc08e4b0b73c478f4cfd/1614135043962-NYZMBOIZG2CVKC3LRA1O/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/unnamed.jpg?format=500w"


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>This is us</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={katie} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Katie Forte
                <br />
                <small className={classes.smallTitle}>Book Keeping</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                   Katie Forte is my wife. We've been married and living in southern Indiana for 10 years. She keeps the schedule and paper work, and also provides gardening services such as perma-culture gardening.
                </p>
                <a href="tel:8122673327" style={{color:"#777",textDecoration:"none"}}>(812) 267-3327  <Icon  >phone</Icon></a>

              </CardBody>
              <CardFooter className={classes.justifyCenter}>
               
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={bayon} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Bayon Forte
                <br />
                <small className={classes.smallTitle}>Skilled Tradesman</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                   Bayon has worked in remodeling for 15 years, as a framer, finish carpenter, roofer. He does light electrical work and plumbing as well. 
                </p>
                <a href="tel:8122670592" style={{color:"#777",textDecoration:"none"}}>(812) 267-0592  <Icon  >phone</Icon></a>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                 
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
           
        </GridContainer>
      </div>
    </div>
  );
}
