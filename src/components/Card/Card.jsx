import React from "react";
import "./Card.css";



export default function Card(props) {
  return (
    <div class=" p-4 text-muted">
      <img className="card-img" src={props.img} />
      <h3 class="card-subtitle text-primary">{props.title}</h3>
      <h5 class="card-text">{props.text}</h5>
    </div>
  );
}
