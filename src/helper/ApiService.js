const URL = 'https://economia.awesomeapi.com.br/json/all';

export default function apiServise() {
  return fetch(URL)
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
}
