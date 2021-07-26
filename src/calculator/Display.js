import React from 'react';

function Display(props) {
  return (
    <div id={props.identity} className={props.category}>
      {props.content}
    </div>
  );
}

export default Display;
