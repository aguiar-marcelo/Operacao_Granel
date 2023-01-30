import React from "react";
import style from "./SubmitButton.module.css"


const SubmitButton = ({ text, type, onClick, onkeypress }) => {
    return(
        <div className={style.form_control}>
            <button type={type}className={style.btn} onkeypress={onkeypress}onClick={onClick}>{text}</button>     
            
        </div>
    )
}


export default SubmitButton;