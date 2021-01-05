import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import { goToSigninPage } from '../../routes/coordinator'
import { login } from '../../services/user'
import { FormContainer, LoginPageContainer } from './styles'

const LoginPage = () => {
  const history = useHistory()
  const {form, onChange} = useForm({email: "", password: ""})

  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    login(form, history)
  }

  return(<div>
    <LoginPageContainer>
      <FormContainer onSubmit={handleSubmission}>
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
          Login
        </Button>
      </FormContainer>
      <Button
        color="primary"
        onClick={() => goToSigninPage(history)}
      >
        Cadastre-se
      </Button>
    </LoginPageContainer>
  </div>)
}

export default LoginPage