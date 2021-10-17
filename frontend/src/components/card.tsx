import React from "react";
import { Fruit } from "../../../backend/src/models/fruit/model";

const Card = (props: Fruit) => {
  return (
    <div
      id={props.id}
      className="tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5 card"
    >
      <div className="imageContainer">
        <img
          className="br2"
          alt={props.name}
          src={`http://localhost:8080${props.image}`}
        />
      </div>

      <div>
        <h2 style={{ marginTop: "24px" }}>{props.name}</h2>
        <p>{props.weight}</p>
        <p>
          <i>{props.season.replace("-", " ")}</i>
        </p>
      </div>
    </div>
  );
};

export { Card };
