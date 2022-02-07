import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";

function PokemonForm({ setFilteredSearch, filteredSearch }) {
const [name, setName] = useState('')
const [hp, setHp] = useState()
const [frontImage, setFrontImage] = useState('')
const [backImage, setBackImage] = useState('')

function handleFormSubmit(e) {
  e.preventDefault()
  const newObj ={
    name,
    hp,
    sprites: {
      front: frontImage,
      back: backImage
    }
  }
  fetch('http://localhost:3001/pokemon', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
  })
  const updatedPokemon = [...filteredSearch, newObj]
  setFilteredSearch(updatedPokemon)
 }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImage}
            onChange={(e) => setFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImage}
            onChange={(e) => setBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button onClick={handleFormSubmit}>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
