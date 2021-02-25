import React from 'react';

export function Input(props){
    const {label, className, ...inputProps} = props
    return (
        <div className = {className}>
            <label>
                {label}
            </label>
            <input {...inputProps}></input>
        </div>
    )
}