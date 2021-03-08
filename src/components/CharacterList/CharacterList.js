import React, { useState, useEffect } from 'react';

import { Character } from '../';

import { getData } from '../../helpers';

import './CharacterList.scss';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const data = await getData('/people');
      setCharacters(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className='CharacterList'>
      <div className='CharacterList__header'>
        <h1 className='CharacterList__header__title'>Star Wars Characters</h1>
      </div>
      <div className='CharacterList__body'>
        {
          characters.map((character, i) => <Character character={character} key={i} />)
        }
      </div>
    </div>
  )
}

export default CharacterList;
