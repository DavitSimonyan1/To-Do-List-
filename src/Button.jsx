import { memo } from "react";

function Button({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      Add
    </button>
  );
}

export default memo(Button);
