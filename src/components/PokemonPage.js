import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [filteredSearch, setFilteredSearch] = useState([])
  const [search, setSearch] = useState('')
  const BASE_URL = 'http://localhost:3001/pokemon'

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setPokemon(data)
      setFilteredSearch(data)
    })
  }, [])

  function handleSearch(searchValue) {
    setSearch(searchValue.toLowerCase())
   
  }

  useEffect(() => {
    const filteredPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(search))
    setFilteredSearch(filteredPokemon)
  }, [search])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setFilteredSearch={setFilteredSearch} filteredSearch={filteredSearch} />
      <br />
      <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
      <br />
      <PokemonCollection pokemon={filteredSearch} />
    </Container>
  );
}

export default PokemonPage;
