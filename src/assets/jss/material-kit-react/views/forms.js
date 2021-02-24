import { container } from "assets/jss/material-kit-react.js";

const formStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "200px"
  },
  inputBox: {
    marginTop: "15px",
    border: "none",
    outline: "none",
    borderBottom: "1px solid #ddd",
    padding: "10px",
    width: "100%"
  }
};

export default formStyle;
