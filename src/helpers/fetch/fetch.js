const baseURL = 'https://swapi.dev/api';

function getData (endpoint) {
  return fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .catch(err => {
      console.error(`Error fetching ${baseURL}${endpoint}`);
      console.error('Error: ', err);
    })
}

function getListOfCharacters (page) {
  return getData(`/people/?page=${page}`);
}

function getCharacter (id) {
  return getData(`/people/${id}`);
}

function getFilm (id) {
  return getData(`/films/${id}`);
}

function getCharacterImage (id) {
  const baseURL = 'https://akabab.github.io/starwars-api/api/id'; // As SWAPI (the required API) didn't have images I used this other API to get the images 

  return fetch(`${baseURL}/${id}.json`)
    .then(res => res.json())
    .then(res => res.image)
    .catch(err => {
      console.error(`Error fetching ${baseURL}${endpoint}`);
      console.error('Error: ', err);
    })
}

export { getData, getListOfCharacters, getCharacter, getFilm, getCharacterImage };
