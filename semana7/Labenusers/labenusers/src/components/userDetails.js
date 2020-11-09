import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const UserContainer = styled.div`
    border: solid 1px black;
    width: 350px;
    padding: 10px 30px;
`

const DetailsContainer = styled.div`
    margin: 20px 0;
`

const DetailsSpan = styled.span`
    margin: 0 5px;
`

const ButtonContainer = styled.div`
    margin: 50px;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    background-color: #2D3058;
    color: white;
    border: none;
    margin: 0 5px;
    padding: 10px 20px;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "Álvaro-Joaquim-de-Faria-Barros-Júnior-Dumont"
      }
}

export default class UserDetails extends React.Component {
    state = {
        details: []
    }

    componentDidMount = () => {
        this.getUserById(this.props.id)
    }

    getUserById = (id) => {
        axios.get(`${baseUrl}/${id}`, axiosConfig).then ((res)=>{
            this.setState({details: res.data})
        }).catch((err =>{
            console.log(err.message)
        }))
    }

    deleteUser = (id) => {

        let deleteConfirmation = window.confirm("Tem certeza de que deseja remover este usuário?")
    
        if (deleteConfirmation) {
          axios.delete(`${baseUrl}/${id}`, axiosConfig).then (()=>{
            alert("Usuário removido!")
            this.props.goToList()
          }).catch((err =>{
            console.log(err.message)
          }))
        }
    }
    
    editUser = (id) => {
        let newName = window.prompt("Digite o novo nome do usuário")
        let newEmail = window.prompt("Digite o novo E-mail do usuário")

            const body = {
                name: newName,
                email: newEmail
            }
    
            axios.put(`${baseUrl}/${id}`, body, axiosConfig).then(()=>{
                alert("Usuário editado!")
                this.props.goToList()
            }).catch ((err) => {
                console.log(err.message)
            })
    }

    render() {    

        return (<div>
            <button onClick={this.props.goToList}>Voltar a página de lista de usuários</button>
            <MainContainer>
                <div>
                    <UserContainer>
                        <DetailsContainer>
                            <DetailsSpan>Nome:</DetailsSpan>
                            <DetailsSpan>{this.state.details.name}</DetailsSpan>
                        </DetailsContainer>
                        <DetailsContainer>
                            <DetailsSpan>E-mail:</DetailsSpan>
                            <DetailsSpan>{this.state.details.email}</DetailsSpan>
                        </DetailsContainer>
                    </UserContainer>
                    <ButtonContainer>
                        <Button onClick={() => this.deleteUser(this.props.id)}>Remover Usuário</Button>
                        <Button onClick={() => this.editUser(this.props.id)}>Editar Usuário</Button>
                    </ButtonContainer>
                </div>
            </MainContainer>
        </div>
        )
    }
}