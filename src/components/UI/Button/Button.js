import React from "react";

import './Button.less';

const Button = (props) => {
  return <button 
      type={props.type}
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >{props.text}{props.htmlSym}</button>;
}

export default Button;