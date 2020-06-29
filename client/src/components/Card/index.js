import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Card(props) {
  return (
    <div class="card mb-4">
      <div class="card-header">{props.title}</div>
      <div class="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
