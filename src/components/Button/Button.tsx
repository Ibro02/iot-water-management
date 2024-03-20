import React from "react";
import './Button.model.css'


interface IButton 
{
    children: any,
    backgroundColor?: string,
    color?: string,
    type?: number | string,
    disabled?:boolean,
    onClick: any
}



function Button({children,backgroundColor, color, type,disabled,onClick}:IButton) {
    const style:  React.CSSProperties = 
    {
        backgroundColor: backgroundColor??'red',
        color: color,
        borderRadius: 100,
        height: type==2?100:'',
      
    }
  return <div className="button">
    <button style={style} onClick={onClick}>{children}</button>
  </div>;
}

export default Button;
