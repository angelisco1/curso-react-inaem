import { useEffect, useRef, useState } from 'react'
import { useInputField } from '../../hooks/useInputField'

export const InputField = ({ label, type, value, handleInput, errors }) => {

  const fieldId = label.toLowerCase()

  return (
    <div>
      <label htmlFor={fieldId}>{label}</label>
      <input type={type} id={fieldId} name={fieldId} value={value} onInput={handleInput} />
      {errors.length > 0 && <ul>
          {errors.map((error, i)=> <li key={i}>{error}</li>)}
        </ul>}
    </div>
  )
}

export default InputField