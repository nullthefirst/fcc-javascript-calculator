import React from 'react';

function Display(props) {
  return (
    <textarea
      rows="5"
      id={props.identity}
      className={props.category}
      value={props.content}
    />
  );
}

export default Display;
