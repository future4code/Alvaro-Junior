import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import RemoveIcon from '../imgs/remove-icon.svg'

const UserContainer = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
`

const RemoveButton = styled.button`
    border: none;
    background: none;
`

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "Álvaro-Joaquim-de-Faria-Barros-Júnior-Dumont"
      }
}

export default class RegistrationList extends React.Component {

    state = {
        users: [],
    }

    componentDidMount = () => {
        this.getAllUsers()
      }
    
      getAllUsers = () => {
        axios.get(baseUrl, axiosConfig).then ((res)=>{
          this.setState({users: res.data})
        }).catch((err =>{
          console.log(err.message)
        }))
      }

      deleteUser = (id) => {

        let deleteConfirmation = window.confirm("Tem certeza de que deseja remover este usuário?")
    
        if (deleteConfirmation) {
          axios.delete(`${baseUrl}/${id}`, axiosConfig).then (()=>{
            this.getAllUsers()
            alert("Usuário removido!")
          }).catch((err =>{
            console.log(err.message)
          }))
        }
      }

    render() {
        const renderedUsersList = this.state.users.map((user)=>{
            return (
                <UserContainer key={user.id}>
                    <p onClick={() => this.props.goToUserDetails(user.id)}>{user.name}</p>
                    <RemoveButton onClick={() => this.deleteUser(user.id)}><img src={RemoveIcon}/></RemoveButton>
                </UserContainer>   
                )
        })
        return(
            <div>
                <div>
                    <button onClick={this.props.goToRegistration}>Ir para página de registro</button>
                </div>
                <ListContainer>
                    <div>
                        {renderedUsersList}
                    </div>
                </ListContainer>
            </div>
        )
    }
}