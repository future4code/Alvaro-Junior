import React from 'react'
import Registration from './components/registration'
import RegistrationList from './components/registrationList'
import UserDetails from './components/userDetails'

export default class App extends React.Component {
  state = {
    action: "registration",
    id:""
  }

  goToList = () => {
    this.setState({action: "list"})
  }

  goToRegistration = () => {
    this.setState({action: "registration"})
  }

  goToUserDetails = (userId) => {
    this.setState({action: "details", id: userId})
  }

  render() {
    const renderScreen = () => {
      switch (this.state.action){
        case "registration":
          return <Registration goToList={this.goToList}/>
        case "list":
          return <RegistrationList 
                      goToRegistration={this.goToRegistration}
                      goToUserDetails={this.goToUserDetails}/>
        case "details":
          return <UserDetails 
                      id={this.state.id}
                      goToList={this.goToList}/>
      }
    }

    return (
      <div className="App">
        {renderScreen()}
      </div>
    );
  }
}