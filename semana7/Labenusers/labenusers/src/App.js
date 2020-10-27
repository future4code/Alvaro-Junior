import React from 'react'
import axios from 'axios'
import Registration from './components/registration'
import RegistrationList from './components/registrationList'

export default class App extends React.Component {
  state = {
    users: [],
    userName: "",
    userEmail: "",
    action: "registration"
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "Álvaro-Joaquim-de-Faria-Barros-Júnior-Dumont"
      }
    }).then ((res)=>{
      this.setState({users: res.data})
    }).catch((err =>{
      console.log(err.message)
    }))
  }

  createUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "Álvaro-Joaquim-de-Faria-Barros-Júnior-Dumont"
      }
    }).then ((res)=>{
      this.setState({userName: "", userEmail: ""})
      this.getAllUsers()
      alert("Usuário criado")
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  deleteUser = (id) => {

    let deleteConfirmation = window.confirm("Tem certeza de que deseja remover este usuário?")

    if (deleteConfirmation) {
      axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"+id, {
        headers: {
          Authorization: "Álvaro-Joaquim-de-Faria-Barros-Júnior-Dumont"
        }
      }).then ((res)=>{
        this.getAllUsers()
        alert("Usuário removido!")
      }).catch((err =>{
        console.log(err.message)
      }))
    }
  }

  goToList = () => {
    this.setState({action: "list"})
  }

  goToRegistration = () => {
    this.setState({action: "registration"})
  }

  onChangeUserNameValue = (event) => {
    this.setState({userName: event.target.value})
  }

  onChangeUserEmailValue = (event) => {
    this.setState({userEmail: event.target.value})
  }

  render() {
    const renderScreen = () => {
      switch (this.state.action){
        case "registration":
          return <Registration 
                    goToList={this.goToList}
                    userName={this.state.userName}
                    onChangeUserNameValue={this.onChangeUserNameValue}
                    userEmail={this.state.userEmail}
                    onChangeUserEmailValue={this.onChangeUserEmailValue}
                    createUser={this.createUser}/>
        case "list":
          return <RegistrationList 
                    goToRegistration={this.goToRegistration}
                    users={this.state.users}
                    deleteUser={this.deleteUser}/>
      }
    }

    return (
      <div className="App">
        {renderScreen()}
      </div>
    );
  }
}