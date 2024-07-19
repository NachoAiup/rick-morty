const API_URL = "https://rickandmortyapi.com/api/character";

export async function getCharactersByQuery(currentQuery) {
  const response = await fetch(`${API_URL}/?name=${currentQuery}`);
  const body = await response.json();
  return body.results;
}
