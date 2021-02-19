// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import fortes from "assets/img/forte-family-at-beach.JPG";
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
                <img src={fortes} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Katie Forte
                <br />
                <small className={classes.smallTitle}>Administrator</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                   Katie Forte is my wife. We've been married like a hundred years now. She helps me keep my schedule straight and handles all the administrative business.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
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
                   I swing a hammer, cut wood with saws, and break stuff with slegde hammers. I usually come home dirty and smelly. 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Wilma 'the dog'
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
