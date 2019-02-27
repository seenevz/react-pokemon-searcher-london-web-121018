import React, {useState} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PokemonCard = (props) => {
  
    const pkmn = props.pokemon;
    const [click, setClick] = useState(false);

    return (
      <Card onClick={() => setClick(!click)}>
            <Image alt="oh no!" src={click ? pkmn.sprites.back : pkmn.sprites.front} />
            <Card.Content>
            <Card.Header>{pkmn.name}</Card.Header>
            </Card.Content>
          <Card.Content extra>
            <span>
              <Icon name="heartbeat red" />
               {pkmn.stats.find(stat => stat.name === 'hp').value}
            </span>
            </Card.Content>
      </Card>
    );
};

export default PokemonCard
