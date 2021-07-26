import React from 'react';

function Button(props) {
  return (
    <button
      id={props.identity}
      className={props.category}
      onClick={props.clicked}>
      {props.value}
    </button>
  );
}

export default Button;
