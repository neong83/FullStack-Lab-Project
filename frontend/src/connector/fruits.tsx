import React from "react";

type StateSetter = React.Dispatch<React.SetStateAction<never[]>>;

function getAllFruits(setter: StateSetter) {
  fetchFromDB(setter);
}

function getFruitsByName(name: string, setter: StateSetter) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name }),
  };

  fetchFromDB(setter, requestOptions);
}

function fetchFromDB(
  setter: StateSetter,
  requestOptions?: { [key: string]: any }
) {
  fetch("http://localhost:8080/api/v1/fruits", requestOptions || {})
    .then((response) => response.json())
    .then((data) => {
      setter(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getAllFruits, getFruitsByName };
