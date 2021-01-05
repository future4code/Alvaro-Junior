import React, {useEffect, useState} from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokemon, setpokemon] = useState({})

  const getPokemon = (pokeName) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(res => {
      console.log(res.data)
      setpokemon(res.data)
    })
  }

  useEffect(() => {
    getPokemon(props.pokemon)
  }, [props.pokemon])

  return(
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      )}
    </div>
  )
}