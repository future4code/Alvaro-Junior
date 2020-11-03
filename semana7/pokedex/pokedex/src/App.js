import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Pokemon from './components/pokemonDetails'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`
const baseUrl = "https://pokeapi.co/api/v2"

export default class App extends React.Component {
  state = {
    pokemonTypesList: [],
    pokemonList: [],
    pokemonDetails: null
  }

  componentDidMount () {
    this.getTypes()
  }

  getTypes = () => {
    axios.get(`${baseUrl}/type`).then ((res) =>{
      this.setState({pokemonTypesList: res.data.results})
    })
  }

  onChangeTypesSelect = (event) => {
    axios.get(`${baseUrl}/type/${event.target.value}`). then((res) => {
      this.setState({pokemonList: res.data.pokemon})
    })
  }

  onChangePokemonSelect = (event) => {
    axios.get(`${baseUrl}/pokemon/${event.target.value}`). then ((res) =>{
      console.log(res.data)
      this.setState({pokemonDetails: res.data})
    })
  }

  render () {  
    const PokemonTypesList = this.state.pokemonTypesList.map((type) => {
      return <option key={type.name}>{type.name}</option>
    })
    
    const PokemonList = this.state.pokemonList.map((pokemon) =>{
    return <option key={pokemon.pokemon.name}>{pokemon.pokemon.name}</option>
    })


    return (
      <div>
        <AppContainer>
          <select onChange={this.onChangeTypesSelect}>
            <option>Selecione um tipo</option>
            {PokemonTypesList}
          </select>
          <select onChange={this.onChangePokemonSelect}>
            <option>Selecione um pokemon</option>
            {PokemonList}
          </select>
        </AppContainer>
        {this.state.pokemonDetails && (<Pokemon pokemonDetails={this.state.pokemonDetails}/>)}
      </div>
    )
  }
}
