import React from 'react'
import './button.css'

const Button = (props) => (
    <button
        className={props.className}
        type="button"
        {...props}
    >
        {props.children}
    </button>
)

export default Button


