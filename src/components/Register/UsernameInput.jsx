import React from "react";
import "../../boostrap.css";

export default function UsernameInput(props) {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input
        className={`form-control ${props.error && "is-invalid"}`}
        id="username"
        aria-describedby="emailHelp"
        type="text"
        placeholder="Username"
        value={props.value}
        onChange={props.onInput}
      />
      {props.error && <div class="invalid-feedback ml-1">{props.error}</div>}
    </div>
  );
}
