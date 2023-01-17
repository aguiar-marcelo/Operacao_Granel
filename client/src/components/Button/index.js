import React from "react";
import style from "./SubmitButton.module.css"


const SubmitButton = ({ text, type, onClick }) => {
    return(
        <div className={style.form_control}>
            <button type={type}className={style.btn} onClick={onClick}>{text}</button>     
            
        </div>
    )
}


export default SubmitButton;