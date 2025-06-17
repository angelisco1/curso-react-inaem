import { useEffect, useState } from "react"
import Validations from '../utils/validations'

export const useInputField = (initialValue, validations = {}) => {
  const [value, setValue] = useState(initialValue)
  const [errores, setErrores] = useState([])

  useEffect(() => {
    const listaErrores = []

    Object.entries(validations).forEach(validationEntry => {
      console.log({validationEntry})
      const [validationName, validationOptions] = validationEntry
      const fnValidation = Validations[validationName]
      const error = fnValidation(value, validationOptions)
      if (error) {
        listaErrores.push(error)
      }
    })

    setErrores(listaErrores)
  }, [value])

  return [
    value,
    setValue,
    errores
  ]
}