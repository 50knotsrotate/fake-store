import "../../boostrap.css";
import "./Register.css";

import { post } from "axios";

import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: null,
        password: null
      }
    };
  }

  submit = () => {
    const { username, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        errors: {
          ...this.state.errors,
          password: "Passwords must match"
        }
      });
    } else {
      this.setState({
        errors: {
          username: null,
          password: null
        }
      });
      post("/register", { username, password })
        .then(_res => {
          this.props.history.push("/home");
        })
        .catch(err => {
          var error = err.response.data;

          this.setState({
            errors: {
              ...this.state.errors,
              [error.type]: error.message
            }
          });
        });
    }
  };

  handleInput = e => {
    const { id, value } = e.target;
    this.setState({
      ...this.state,
      [id]: value
    });
  };
  render() {
    return (
      <div class="register-wrapper d-flex flex-column justify-content-center align-items-center bg-secondary">
        <div class="register-form bg-info p-4 text-light">
          <legend>Register</legend>
          <UsernameInput
            error={
              this.state.errors.username ? this.state.errors.username : false
            }
            onInput={e => this.handleInput(e)}
            value={this.state.username}
          />
          <PasswordInput
            error={
              this.state.errors.password ? this.state.errors.password : false
            }
            onInput={e => this.handleInput(e)}
            value={this.state.password}
          />
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              class="form-control"
              id="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={e => this.handleInput(e)}
              placeholder="Confirm Password"
            />
          </div>
          <button
            onClick={this.submit}
            class="btn btn-primary bg-info btn-lg w-100"
            type="button"
          >
            Submit
          </button>
          <legend>
            <p className="lead">
              Already have an account? <Link to="login">Login</Link>
            </p>
          </legend>
        </div>
      </div>
    );
  }
}
