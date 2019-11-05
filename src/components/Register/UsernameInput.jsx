import React from "react";
import "../../boostrap.css";

export default function UsernameInput(props) {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input
        class="form-control"
        id="username"
        aria-describedby="emailHelp"
        type="text"
        placeholder="Username"
        value={props.value}
        onChange={props.onInput}
      />
    </div>
  );
}
