import React, {InputHTMLAttributes} from 'react'
import './style.css'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return(
        <div >
            <div className="botoes">
            <button type="submit" id={props.name}>{props.name}</button>
            {/* <div className="form">
        <label htmlFor={name}>{label}</label><br/>
        <input type="text" id={name}{...rest}></input>
            </div> */}
            </div>
        </div>
    );
}

export default Button