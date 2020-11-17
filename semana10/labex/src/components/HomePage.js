import React from 'react'
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  return (
    <div className="App">
      <p>Home</p>
      <button>Inscrição</button>
      <button onClick={goToLoginPage}>Login</button>
    </div>
  );
}

export default HomePage;