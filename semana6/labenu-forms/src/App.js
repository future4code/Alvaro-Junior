import React from 'react'
import styled from 'styled-components'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const Botao = styled.button`
  margin: 30px 0;
`

class App extends React.Component {
  state = {
    etapa: 1
  }
  
  onClickBotao = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  renderizarPagina = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3: 
        return <Etapa3 />
      case 4:
        return <Etapa4 />
    }
  }

  render(){
    const paginaRenderizada = () => {
      if (this.state.etapa !== 4){
        return <Botao onClick={this.onClickBotao}>Próxima Etapa</Botao>
      }
    }

    return (
      <AppContainer>
        {this.renderizarPagina()}
        {paginaRenderizada()}
      </AppContainer>  
    );
  }
}

export default App;
