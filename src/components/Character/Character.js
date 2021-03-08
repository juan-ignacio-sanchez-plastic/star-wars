import React from 'react';

import './Character.sass';

const Character = ({ character }) => {

  return (
    <div className='Character'>
      <div className='Character__header'>
        <a href={`/character-details/${character.name}`}>
          <h2 className='Character__header__name'>{character.name}</h2>
        </a>
      </div>
      <div className='Character__body'>
        <div className='Character__footer__fimls-count'>
          {character.films.length} {character.films.length === 1 ? 'film' : 'films'}
        </div>
        <div className='Character__body__birth-year'>birth year: {character.birth_year}</div>
      </div>
    </div>
  )
}

export default Character;
