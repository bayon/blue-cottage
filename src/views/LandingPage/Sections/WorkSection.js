// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//FORM AND REDUX part 1: in header
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //useSelector? 
import * as yup from "yup";
const formSchema = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().email().required(),
  message: yup.string().required().min(2),
});
//end  part 1
const useStyles = makeStyles(styles);

export default function WorkSection() {
//FORM AND REDUX  part 2: default export function
  const dispatch = useDispatch();
  const [inProgress,setInProgress] = useState(false) ;
  useEffect( () => {
    setInProgress(false)
  },[inProgress])
//end  part 2

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let's make a plan</h2>
          <h4 className={classes.description}>
            Call for a free estimate.
           </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
        <GridItem>


        {/* //FORM AND REDUX  part 3 JSX*/}
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log('values:',values);
            console.log('need an email action now...')
            // setInProgress(true)
            // dispatch(authAction.loginUser(values))
            //   .then(async (result) => {
            //     console.log('result:',result);
            //                 
                
            //   })
            //   .catch((err) => console.log(err));
          }}
        >
          {(props) => (
            <div  >
              
              <div>
              <input
                  style={styles.inputBox}
                  placeholder="Name"
                  onChange={props.handleChange("name")}
                  value={props.values.name}
                  onBlur={props.handleBlur("name")}
                  
                />
                <div>
                  {props.touched.name && props.errors.name}
                </div>
                <input
                  style={styles.inputBox}
                  placeholder="Email"
                  onChange={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                />
                <div  >
                  {props.touched.email && props.errors.email}
                </div>
                <input
                  style={styles.inputBox}
                  placeholder="Message"
                  onChange={props.handleChange("message")}
                  value={props.values.message}
                  onBlur={props.handleBlur("message")}
                  
                />
                <div>
                  {props.touched.message && props.errors.message}
                </div>

                <Button
                  style={styles.button}
                  onClick={props.handleSubmit}
                >
                  <div  >Send Message</div>
                </Button>

                
              </div>
            </div>
          )}
        </Formik>
        {/* //end  part 3*/}
        </GridItem>
      </GridContainer>
    </div>
  );
}
