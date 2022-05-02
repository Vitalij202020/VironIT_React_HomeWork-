import React from 'react';
import './Button.css'

const Button = ({children, style, onClick}) => {
    return (
        <button className={`button ${style}`} onClick={(e) => onClick(e)}>{children}</button>
    );
};

export default Button;