import React from "react";
import { Link } from "react-router-dom";

function Button() {
  const view = () => {
    document.getElementById("box").style.opacity = 1;
  };

  return (
    <Link to="/">
      <button onClick={view} className="pick">
        Pick a color
      </button>
    </Link>
  );
}
export default Button;
