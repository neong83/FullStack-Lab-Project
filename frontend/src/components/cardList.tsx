import React from "react";
import { Card } from "./card";
import { Fruit } from "../../../backend/src/models/fruit/model";

const CardList = ({ data }: { data: Fruit[] }) => {
  const cardComponent = data.map((fruit: Fruit, i: number) => {
    return (
      <Card
        key={i}
        id={fruit.id}
        name={fruit.name}
        weight={fruit.weight}
        season={fruit.season}
        image={fruit.image}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export { CardList };
