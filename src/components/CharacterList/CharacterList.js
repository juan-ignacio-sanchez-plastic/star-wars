import React, { useState, useEffect } from 'react';

import { CharacterListItem, Loading, Button } from '../';

import { getData } from '../../helpers';

import './CharacterList.scss';

const CharacterList = () => {
  const [page, setPage] = useState(1)
  const [nextPageExist, setNextPageExist] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlerLoadMore = () => {
    if (nextPageExist) setPage(page + 1);
  }

  useEffect(() => {
    async function fetchData () {
      const data = await getData(`/people/?page=${page}`);
      setCharacters(data.results);
      setIsLoaded(true);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!nextPageExist) return;
    async function fetchData () {
      const data = await getData(`/people/?page=${page}`);
      if (!data.next) setNextPageExist(false);
      setCharacters([...characters, ...data.results]);
    }
    fetchData();
  }, [page]);

  return (
    <div className='CharacterList'>
      {
        isLoaded
          ? <>
            <div className='CharacterList__header'>
              <h1 className='CharacterList__header__title'>Star Wars Characters</h1>
            </div>
            <div className='CharacterList__body'>
              {
                characters.map((character, i) => {
                  character.id = i + 1;
                  return <CharacterListItem character={character} key={character.id} />
                })
              }
            </div>
            <div className='CharacterList__footer'>
              <Button
                label='Load more'
                onClick={handlerLoadMore}
              />
            </div>
          </>
          : <Loading />
      }
    </div>
  )
}

export default CharacterList;
