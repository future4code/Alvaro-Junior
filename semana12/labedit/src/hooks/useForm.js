import { useState } from "react"

export const useForm = (initialValues) => {
  const [form, setform] = useState(initialValues)

  const onChange = (value, name) => {
    setform({...form, [name]: value})
  }

  return {form, onChange}
}