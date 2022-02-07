import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      
      {pokemon.map(poke => (
        <PokemonCard name={poke.name} 
        hp={poke.hp} 
        front={poke.sprites.front}
        back={poke.sprites.back}
        key={poke.id}
         />
      ))}
      
    </Card.Group>
  );
}

export default PokemonCollection;
