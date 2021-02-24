// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import image from "assets/img/bg7.jpg";
import image from "assets/img/american_gothic_bw.jpg";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import MyHeaderLinks from "components/Header/MyHeaderLinks.js";
//FORM AND REDUX part 1: in header
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //useSelector?
import * as yup from "yup";
import * as authAction from "../../redux/actions/authAction";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
//end  part 1

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  //FORM AND REDUX  part 2: default export function
  const dispatch = useDispatch();
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => {
    setInProgress(false);
  }, [inProgress]);
  //end  part 2

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Blue Cottage Remodeling"
        rightLinks={<MyHeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              {/* //FORM AND REDUX  part 3 JSX*/}
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                  console.log("values:", values);
                  setInProgress(true);
                  dispatch(authAction.loginUser(values))
                    .then(async (result) => {
                      console.log("result:", result);
                      localStorage.setItem("token", result.token);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                {(props) => (
                  <Card className={classes[cardAnimaton]}>
                    <CardBody>
                      <input
                        style={styles.inputBox}
                        placeholder="Email"
                        onChange={props.handleChange("email")}
                        value={props.values.email}
                        onBlur={props.handleBlur("email")}
                      />
                      <div>{props.touched.email && props.errors.email}</div>
                      <input
                        style={styles.inputBox}
                        placeholder="Password"
                        onChange={props.handleChange("password")}
                        value={props.values.password}
                        onBlur={props.handleBlur("password")}
                      />
                      <div>
                        {props.touched.password && props.errors.password}
                      </div>

                      <Button
                        style={styles.button}
                        onClick={props.handleSubmit}
                      >
                        <div>Login</div>
                      </Button>
                    </CardBody>
                    <CardFooter style={{ textAlign: "center" }}>
                      <div >
                        <div> <span style={{marginRight:"15px"}}>Don't Have an Account?</span>
                        <Button onClick={() => console.log("register")} >
                          <div>Register</div>
                        </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                )}
              </Formik>

              {/* //end  part 3*/}
              {/* <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                   
                  </CardHeader>
                  <p className={classes.divider}></p>
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card> */}
            </GridItem>
            <GridItem></GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

{
  /* <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div> */
}
