import React from "react";

const SubmitButton = ({
  onClickEvent,
  name,
}: {
  onClickEvent: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
}) => {
  return (
    <div className="pa1 dib">
      <button
        className="pa3 br3 b--green bg-washed-blue"
        onClick={onClickEvent}
      >
        <span>{name}</span>
      </button>
    </div>
  );
};

export { SubmitButton };
