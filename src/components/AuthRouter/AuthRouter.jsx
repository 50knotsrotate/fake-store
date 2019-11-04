import React, { Component } from "react";
import Axios from "axios";

export default class AuthRouter extends Component {
  componentDidMount = () => {
    Axios.get("http://localhost:4000/")
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
    return <div></div>;
  }
}