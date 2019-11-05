import React from "react";
import "../../boostrap.css";

export default function PasswordInput(props) {
  return (
    <div class="form-group">
      <label for="password">Password</label>
      <input
        className={`form-control ${props.error && "is-invalid"}`}
        id="password"
        aria-describedby="emailHelp"
        type="password"
        placeholder="Password"
        value={props.value}
        onChange={props.onInput}
      />
      {props.error && <div class="invalid-feedback ml-1">{props.error}</div>}
    </div>
  );
}
