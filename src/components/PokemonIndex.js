import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemons: [],
      pokemonSearch: null,
    };
  };

  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
      .then(resp=> resp.json())
      .then(pokemons => this.setState({pokemons}))
  };

  setSearchState = (e, value) => {
      
      this.setState({pokemonSearch: value.value})
  };

  filterPokemons = () => {
    return this.state.pokemonSearch
      ? this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.pokemonSearch))
      : this.state.pokemons
  };

  handleSubmit = (e, pokemon) => {
    e.preventDefault();
    
    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pokemon)
    }).then(resp => resp.json())
      .then(data => this.setState({pokemons: [...this.state.pokemons, data]}))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.setSearchState, 500)}  
                showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={this.filterPokemons()}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
