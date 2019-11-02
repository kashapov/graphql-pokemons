import React from 'react';

import './Pokemon.css';

function Pokemon(props) {
  const { pokemon } = props;

  const evolutions =
    pokemon.evolutions && pokemon.evolutions.length !== 0 ? (
      <div>
        <span>Evolutions:</span>
        {pokemon.evolutions.map((e, indx) => {
          return (
            <p className='card__p' key={`evolution-${indx}`}>
              {e.name}
            </p>
          );
        })}
      </div>
    ) : (
      <div>
        <span>Final Evolution</span>
      </div>
    );

  return (
    <div className='card'>
      <img className='card__image' src={pokemon.image} alt={pokemon.name} />
      <div>
        <h3 className='card__h3'>{pokemon.name}</h3>
        <div>{evolutions}</div>
      </div>
    </div>
  );
}

export default Pokemon;
