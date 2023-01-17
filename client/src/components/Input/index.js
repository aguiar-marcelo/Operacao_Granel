import React from "react";
import style from "./Input.module.css"


const Input = ({ type, text, name, placeholder, onChange, value, autofocus }) => {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                autofocus
            />
        </div>
    )
}


export default Input;