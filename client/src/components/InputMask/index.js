import InputMask from 'react-input-mask'
import style from './InputMask.module.css'

const MaskedInput = ({ value, onChange, name, mask, text, placeholder}) => {

    const onlyNumbers = (str) => str.replace(/[^0-9]/g , '')


    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: onlyNumbers(event.target.value)

            }
        })
    }


    return (
        <div className={style.form_control}>
            <label >{text}:</label>
           <InputMask
            name={name}
            mask={mask}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
        /> 
        </div>
        
    )

}

export default MaskedInput;