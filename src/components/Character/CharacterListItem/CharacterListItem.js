import React from 'react';

import './CharacterListItem.scss';

const AUDIO_LIGHTSABER = new Audio('http://www.sonidosmp3gratis.com/sounds/002873509_prev.mp3');

const CharacterListItem = ({ character }) => {
  const onMouseEnterHandler = () => {
    AUDIO_LIGHTSABER.volume = 1;
    AUDIO_LIGHTSABER.currentTime = 0;
    AUDIO_LIGHTSABER.play();
  }

  return (
    <div className='CharacterListItem' onMouseEnter={onMouseEnterHandler}>
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
