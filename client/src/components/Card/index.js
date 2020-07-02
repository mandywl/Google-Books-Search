import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Card(props) {
  return (
    <div className="card mb-4">
      <div className="card-header">{props.title}</div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
