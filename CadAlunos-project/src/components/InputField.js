import React from 'react'

export const InputField = ({ label, name, type, register, error }) => {
  return (
    <div>
        <label>{label}</label>
        <input 
            type={type}
            name={name}
            ref={register} 
        />
        {error && <span> style={{ color: 'red' }} </span>}
    </div>
  )
}
