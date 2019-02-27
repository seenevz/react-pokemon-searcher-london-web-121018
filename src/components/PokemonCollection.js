import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  state = {
    sortType: null
  };

  render() {
    const renderPokemons = () => {
      
      return this.props.pokemons.map(pkmn => < PokemonCard key={pkmn.id} pokemon={pkmn}/>)

    };
    
    return (
      <Card.Group itemsPerRow={6}>
        {renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
