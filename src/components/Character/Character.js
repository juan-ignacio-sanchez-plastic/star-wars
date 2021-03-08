import React from 'react';

import './Character.scss';

const Character = ({ character }) => {

  return (
    <div className='Character'>
      <div className='Character__header'>
        <a href={`/character-details/${character.name}`} className='Character__header__title'>
          <h2 className='Character__header__title__name'>{character.name}</h2>
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
