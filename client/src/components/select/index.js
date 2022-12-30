import React from "react";
import style from "./Select.Module.css"


const Select = ({ text, name, options, handleOnChange, value }) => {
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>   
            <select name={name} id={name}>                 
            {/*                         CONECTAR OPTIONS COM A API DO PROJETO, SE NAO O SELECT NAO VAI FUNCIONAR
            {options.map((option) => (
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            ))}
            */}

            </select>         
            
        </div>
    )
}


export default Select;