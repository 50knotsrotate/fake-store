import "./App.css";
import AuthRouter from "./components/AuthRouter/AuthRouter";
import axios from "axios";
import routes from "./routes";
import { withRouter } from "react-router-dom";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/")
      .then(res => {
        this.props.history.push("/home");
      })
      .catch(err => {
        if (err) {
          this.props.history.push("/register");
        }
      });
  };
  render() {
    return <div>{routes}</div>;
  }
}

export default withRouter(App);
