import React from "react";

const SearchBox = ({
  onSearchChange,
}: {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="pa2 dib">
      <input
        className="pa3 ba b--green bg-washed-blue"
        type="search"
        placeholder="search fruits"
        onChange={onSearchChange}
      />
    </div>
  );
};

export { SearchBox };
