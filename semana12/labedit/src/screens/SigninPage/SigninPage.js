import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import {signin} from '../../services/user'
import { FormContainer, SigninPageContainer } from './styles'

const SigninPage = () => {
  const history = useHistory()
  const {form, onChange} = useForm({email: "", password: "", username: ""})

  const handleInputChange = (event) => {
    const {value, name} = event.target
    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    signin(form, history)
  }

  return(<div>
    <SigninPageContainer onSubmit={handleSubmission}>
      <FormContainer>
        <TextField 
          label="Nome"
          variant="outlined"
          name="username"
          value={form.username}
          onChange={handleInputChange}
        />
        <TextField 
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <TextField 
          label="Senha"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Cadastrar
        </Button>
      </FormContainer>
    </SigninPageContainer>
  </div>)
}

export default SigninPage