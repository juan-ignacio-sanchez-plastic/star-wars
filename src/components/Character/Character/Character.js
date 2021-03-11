import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';

import { getCharacter, getFilm, getCharacterImage } from '../../../helpers';
import { Loading } from '../../';

import './Character.scss';

const Character = () => {
  const { characterID } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData () {
      const characterData = await getCharacter(characterID);
      const characterImg = await getCharacterImage(characterID);
      const filmsData = await Promise.all(
        characterData.films.map(filmURL => {
          const filmID = filmURL.slice(-2, -1);
          return getFilm(filmID);
        })
      )
      characterData.films = filmsData;
      characterData.image = characterImg;
      setCharacter(characterData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    character ? setIsLoaded(true) : setIsLoaded(false);
  }, [character]);

  return (
    <div className='Character'>
      {
        isLoaded ?
          <>
            <div className='Character__header'>
              <a href='/'>🡰 <span className='Character__header__title'>back to main list</span></a>
            </div>
            <div className='Character__body'>
              <img className='Character__body__picture' src={character.image} alt='character picture' />
              <div className='Character__body__container'>
                <h1 className='Character__body__title'>{character.name}</h1>
                <div className='Character__body__features'>
                  <ul>
                    <li>Height: {character.height} cm</li>
                    <li>Gender: {character.gender}</li>
                    <li>Mass: {character.mass} kg</li>
                    <li>Hair color: {character.hair_color}</li>
                    <li>Eye color: {character.eye_color}</li>
                    <li>Skin color: {character.skin_color}</li>
                    <li>Birth year: {character.birth_year}</li>
                  </ul>
                </div>
                <h2 className='Character__body__filmsCount'>
                  {character.films.length} {character.films.length === 1 ? 'Film' : 'Films'}
                </h2>
                <div className='Character__body__filmsList'>
                  <ul>
                    {
                      character.films.map((film, i) => <li key={i}>
                        <span className='Character__body__filmsList__filmName'>{film.title}:</span>  {moment(film.release_date, 'YYYY').fromNow()}
                      </li>)
                    }
                  </ul>
                </div>
              </div>
            </div>
          </>
          : <Loading />
      }
    </div>
  )
}

export default Character;
