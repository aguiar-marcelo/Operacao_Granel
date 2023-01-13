import React from "react";
import style from "./Select.module.css"

const Select = ({ text, name, options, handleOnChange, value }) => {
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>   
            <select name={name} id={name}>               
            <option>Selecione uma opção</option>         
            {/* {options.map((option) => (                
                <option value={option.id} key={option.id}>{option.name}</option>
            ))} */}
            

            </select>         
            
        </div>
    )
}


export default Select;