import { useEffect, useState, useRef } from "react";
import "./App.css";
import { debounce } from "lodash";
import { CharacterCard } from "./components/CharacterCard/CharacterCard";
import { getCharactersByQuery } from "./api/getCharactersByQuery";
import { getAllCharacters } from "./api/getAllCharacters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getAllCharacters();
      setCharacters(results);
    };
    fetchData();
  }, []);

  async function search(currentQuery) {
    console.log("Fetch api");
    try {
      const results = await getCharactersByQuery(currentQuery);
      results ? setCharacters(results) : setCharacters([]);
    } catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = (e) => {
    const currentQuery = e.target.value;
    debouncedSearch(currentQuery);
  };

  const debouncedSearch = useRef(
    debounce(async (currentQuery) => {
      await search(currentQuery);
    }, 800)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-5xl mt-24 flex flex-col gap-8">
      <h1 className="text-3xl md:text-5xl lg:text-[80px] xl:text-[96px] font-black">
        RICK AND MORTY API
      </h1>
      <input
        type="text"
        onChange={(e) => handleInputChange(e)}
        className="border border-[#DADADA] bg-nuetral-100 w-full rounded-xl placeholder:text-[#DADADA] text-[#3E3C3C] px-5 py-2"
        placeholder="Nombre del personaje"
      />
      <div className="md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 flex flex-col items-center w-full gap-4 mb-12 m-auto">
        {characters.length !== 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}

export default App;
