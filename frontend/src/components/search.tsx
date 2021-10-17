import React from "react";
import { SearchBox } from "./searchBox";
import { SubmitButton } from "./submitButton";

const Search = ({
  onSearchChange,
  searchFruits,
}: {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  searchFruits: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <SearchBox onSearchChange={onSearchChange} />
      <SubmitButton onClickEvent={searchFruits} name={"Search"} />
    </div>
  );
};

export { Search };
