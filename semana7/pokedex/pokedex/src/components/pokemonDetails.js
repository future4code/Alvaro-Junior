import React from 'react'
import styled from 'styled-components'

const PokemonContainer = styled.div`
    width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    margin: 0 auto;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.p`
    margin: 20px;
    font-size: 30px;
    font-weight: bold;
`

const DescritionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: lightskyblue;
    border-radius: 10px;
    padding: 30px 90px;
    align-self: center;
`

const AbilityContainer = styled.div`
    grid-row: 1 / 3;
    grid-column-start: 2;
`

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
`

const Image = styled.img`
    width: 300px;
    align-self: center;
    justify-self: center;
`

const TypesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
`
const GamesListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const Appearances = styled.div`
    grid-row-start: 3;
    grid-column: 1 / 3;
`

const Stats = styled.div`
    background-color: lightgray;
    border-radius: 10px;
    padding: 20px;
`

export default class Pokemon extends React.Component {
    render () {
        const abilities = this.props.pokemonDetails.abilities.map((ability) => {
            return <li key={ability.ability.name}>{ability.ability.name}</li>
        })

        const statistics = this.props.pokemonDetails.stats.map((statistic) => {
            return <div key={statistic.stat.name}>
                    <p>{statistic.stat.name}</p>
                    <p>{statistic.base_stat}</p>
                </div>
        })

        const gameAppearances = this.props.pokemonDetails.game_indices.map((appearence) => {
            return <p key={appearence.version.name}>pokemon {appearence.version.name}</p>
        })

        const types = this.props.pokemonDetails.types.map((type) => {
            // console.log(type.type.name)
            return <p key={type.type.name}>{type.type.name}</p>
        })

        return (
            <div>
                <TitleContainer>
                    <Title>{this.props.pokemonDetails.name.toUpperCase()}</Title> 
                    <Title>N° {this.props.pokemonDetails.id}</Title>
                </TitleContainer>
                <PokemonContainer>
                    <Image src={this.props.pokemonDetails.sprites.front_default}/>
                    <DescritionContainer>
                        <div>
                            <p>Altura:</p> 
                            <p>{this.props.pokemonDetails.height/10}m</p>
                        </div>
                        <AbilityContainer>
                            <p>Habilidades:</p>
                            <ul>
                                {abilities}
                            </ul>
                        </AbilityContainer>
                        <div>
                            <p>Peso:</p>
                            <p>{this.props.pokemonDetails.weight} kg</p>                   
                        </div>
                    </DescritionContainer>
                    <Stats>
                        <p>Estatísticas</p>
                        <StatsContainer>
                            {statistics}
                        </StatsContainer>
                    </Stats>
                    <div>
                        <p>Tipos</p>
                        <TypesContainer>
                            {types}
                        </TypesContainer>
                    </div>
                    <Appearances>
                        <p>Aparições em jogos</p>
                        <GamesListContainer>
                            {gameAppearances}
                        </GamesListContainer>
                    </Appearances>
                </PokemonContainer>
            </div>
        )
    }
}