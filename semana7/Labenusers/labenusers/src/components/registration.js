import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SearchIcon from '../imgs/search-icon.svg'

const RegistrationContainer = styled.div`
    border: solid 1px black;
    width: 250px;
    padding: 30px;
`

const InputLabel = styled.p`
    margin: 0;
`

const RegistrationInputs = styled.input`
    margin-bottom: 20px;
`

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`

const RegistrationButton = styled.button`
    background-color: #2D3058;
    color: white;
    border: none;
    padding: 10px 20px;
`

const SearchButton = styled.button`
    padding: 2.5px 0;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "Álvaro-Joaquim-de-Faria-Barros-Júnior-Dumont"
    }
}

export default class Registration extends React.Component {
    state = {
        userName: "",
        userEmail: "",
        searchName: ""
    }

    createUser = () => {
        const body = {
          name: this.state.userName,
          email: this.state.userEmail
        }
    
        axios.post(baseUrl, body, axiosConfig).then (()=>{
          this.setState({userName: "", userEmail: ""})
          alert("Usuário criado")
        }).catch((err)=>{
          console.log(err.message)
        })
    }

    onChangeUserNameValue = (event) => {
        this.setState({userName: event.target.value})
    }

    onChangeUserEmailValue = (event) => {
        this.setState({userEmail: event.target.value})
    }

    onChangeSearchNameValue = (event) => {
        this.setState({searchName: event.target.value})
    }

    render() {
        return(
            <div>
                <div>
                    <button onClick={this.props.goToList}>Ir para página de lista de usuários</button>
                    <SearchContainer>
                        <input
                            value={this.state.searchName}
                            placeholder="Pesquisar"
                            onChange={this.onChangeSearchNameValue}/>
                        <SearchButton><img src={SearchIcon}/></SearchButton>
                    </SearchContainer>
                </div>
                <MainContainer>
                    <RegistrationContainer>
                        <InputLabel>Nome:</InputLabel>
                        <RegistrationInputs 
                        value={this.state.userName}
                        onChange={this.onChangeUserNameValue}/>
                        <InputLabel>E-mail</InputLabel>
                        <RegistrationInputs 
                        value={this.state.userEmail}
                        onChange={this.onChangeUserEmailValue}/>
                        <ButtonContainer>
                            <RegistrationButton onClick={this.createUser}>Salvar</RegistrationButton>
                        </ButtonContainer>
                    </RegistrationContainer>
                </MainContainer>
            </div>
        )
    }
}