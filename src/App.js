import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import Pokemon from './Pokemon';

import './App.css';

const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 200) {
      id
      number
      name
      image
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='App'>
      <h1>Pokemon Wiki</h1>

      <div className='container'>
        {data &&
          data.pokemons &&
          data.pokemons.map((pokemon, index) => (
            <Pokemon key={`pokemon-${index}`} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
}

export default App;
