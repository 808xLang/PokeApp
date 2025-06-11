import React, { useState } from "react";
import Axios from "axios";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState("");

  const lookUpPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data);
        setError("");
      })
      .catch((err) => {
        setPokemon(null);
        setError("Pokemon not found");
      });
  };

  return (
    <>
      <h1>Bra Lang is still him</h1>
      <h2>Just type in a pokemon on something. And spell it right!!</h2>
      <input
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
      />
      <button onClick={lookUpPokemon}>Search Pokemon</button>
      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}

      <h2></h2>
    </>
  );
};

export default PokemonSearch;