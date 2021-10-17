import "./App.css";
import React, { useState, useEffect } from "react";
import { Scroll } from "./components/scroll";
import { CardList } from "./components/cardList";
import { getAllFruits, getFruitsByName } from "./connector/fruits";
import { Search } from "./components/search";

function App() {
  const [fruits, setFruits] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    if (searchField === "") {
      getAllFruits(setFruits);
    }
  }, [searchField]);

  useEffect(() => {
    console.log(`searchField: ${searchField}`);
  }, [searchField]);

  function searchFruits() {
    console.log("click search fruit");
    getFruitsByName(searchField, setFruits);
  }

  function onSearchChange(event: React.FormEvent<HTMLInputElement>) {
    setSearchField(event.currentTarget.value);
  }

  return (
    <div className="tc">
      <h1 className="f1">Fruit Catalog</h1>
      <Search onSearchChange={onSearchChange} searchFruits={searchFruits} />
      <Scroll>
        {fruits.length == 0 ? (
          <h2>No fruit name matches with your search, try again</h2>
        ) : (
          <CardList data={fruits} />
        )}
      </Scroll>
    </div>
  );
}

export default App;
