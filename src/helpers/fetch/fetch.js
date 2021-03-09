const baseURL = 'https://swapi.dev/api';

function getData (endpoint) {
  return fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .catch(err => {
      console.error(`Error fetching ${baseURL}${endpoint}`);
      console.error('Error: ', err);
    })
}

export { getData };
