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

export { getData, getListOfCharacters, getCharacter, getFilm };
