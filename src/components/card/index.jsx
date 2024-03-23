import { React } from "react";
import "./style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.robot.id}/?set=set2&size=180x180`}
      alt="robo"
    />
    <h2>{props.robot.name}</h2>
    <p>{props.robot.email}</p>
    <p>{props.robot.phone}</p>
  </div>
);
