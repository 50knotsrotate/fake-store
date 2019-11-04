import "../../boostrap.css";
import "./Register.css";


import React, { Component } from "react";

export default class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div class="register-wrapper d-flex flex-column justify-content-center align-items-center bg-secondary">
        <div class="register-form bg-info p-4 text-light">
          <legend>Register</legend>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              type="email"
              placeholder="Enter email"
            />
            <small class="form-text ml-1" id="emailHelp">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              class="form-control"
              id="exampleInputPassword1"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              class="form-control"
              id="exampleInputPassword2"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
            <button class="btn btn-primary bg-info btn-lg w-100" type="button">
              Submit
            </button>
        </div>
      </div>
    );
  }
}
