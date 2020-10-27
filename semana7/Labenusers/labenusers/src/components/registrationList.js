import React from 'react'
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

export default class RegistrationList extends React.Component {
    render() {
        const renderedUsersList = this.props.users.map((user)=>{
            return (
                <UserContainer>
                    <p key={user.id}>{user.name}</p>
                    <RemoveButton onClick={() => this.props.deleteUser(user.id)}><img src={RemoveIcon}/></RemoveButton>
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