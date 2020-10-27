import React from 'react'
import styled from 'styled-components'

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

const RegistrationButton = styled.button`
    background-color: #2D3058;
    color: white;
    border: none;
    padding: 10px 20px;
`

export default class Registration extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <button onClick={this.props.goToList}>Ir para página de lista</button>
                </div>
                <MainContainer>
                    <RegistrationContainer>
                        <InputLabel>Nome:</InputLabel>
                        <RegistrationInputs 
                        value={this.props.userName}
                        onChange={this.props.onChangeUserNameValue}/>
                        <InputLabel>E-mail</InputLabel>
                        <RegistrationInputs 
                        value={this.props.userEmail}
                        onChange={this.props.onChangeUserEmailValue}/>
                        <ButtonContainer>
                            <RegistrationButton onClick={this.props.createUser}>Salvar</RegistrationButton>
                        </ButtonContainer>
                    </RegistrationContainer>
                </MainContainer>
            </div>
        )
    }
}