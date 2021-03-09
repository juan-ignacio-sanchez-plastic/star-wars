import React from 'react';

import './CharacterListItem.scss';

const CharacterListItem = ({ character }) => {
  return (
    <div className='CharacterListItem'>
      <div className='CharacterListItem__header'>
        <a href={`/character-details/${character.id}/${character.name}`} className='CharacterListItem__header__title'>
          <h2 className='CharacterListItem__header__title__name'>{character.name}</h2>
        </a>
      </div>
      <div className='CharacterListItem__body'>
        <div className='CharacterListItem__footer__fimls-count'>
          {character.films.length} {character.films.length === 1 ? 'film' : 'films'}
        </div>
        <div className='CharacterListItem__body__birth-year'>birth year: {character.birth_year}</div>
      </div>
    </div>
  )
}

export default CharacterListItem;
