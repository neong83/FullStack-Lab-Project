import React, { FC } from "react";

const Scroll: FC = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {children}
    </div>
  );
};

export { Scroll };
