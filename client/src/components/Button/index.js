import React from "react";
import style from "./SubmitButton.module.css"


const SubmitButton = ({ text, type }) => {
    return(
        <div className={style.form_control}>
            <button type={type}className={style.btn}>{text}</button>     
            
        </div>
    )
}


export default SubmitButton;