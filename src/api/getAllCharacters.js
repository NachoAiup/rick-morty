const API_URL = "https://rickandmortyapi.com/api/character";

export async function getAllCharacters() {
  const response = await fetch(`${API_URL}`);
  const body = await response.json();
  return body.results;
}
