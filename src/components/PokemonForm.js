import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      stats: [{name: '', value: ''}],
      sprites: {front: '',
                back: ''},
    }
  }

  handleInput = (event) => {
    switch (event.target.name) {
      case 'name':
      this.setState({[event.target.name]: event.target.value});
        break;
      case 'hp':
      this.setState({stats: [{name: event.target.name, value: event.target.value}]})
        break;
      case 'front':
      this.setState({sprites: {...this.state.sprites, front: event.target.value}}) 
        break;
      case 'back':
      this.setState({sprites: {...this.state.sprites, back: event.target.value}}) 
        break;
    };
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={event => this.props.handleSubmit(event, this.state)}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleInput} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleInput} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleInput} fluid label="Front Image URL" placeholder="url" name="front" />
            <Form.Input onChange={this.handleInput} fluid label="Back Image URL" placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
