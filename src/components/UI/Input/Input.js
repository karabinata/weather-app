import React from "react";

import './Input.less';

const Input = (props) => {
  return <input 
    className={props.className} 
    value={props.value} 
    onChange={props.onChange} 
    onClick={props.onClick}
    onBlur={props.onBlur}
    ref={props.reference}
    onFocus={props.onFocus}
  />;
}

export default Input;