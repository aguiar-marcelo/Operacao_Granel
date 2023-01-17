import React from "react";
import style from "./SubmitButton.module.css"


const SubmitButton = ({ text, type, func }) => {
    return(
        <div className={style.form_control}>
            <button type={type}className={style.btn} onClick={func}>{text}</button>                 
        </div>
    )
}


export default SubmitButton;