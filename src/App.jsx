import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://rickandmortyapi.com/api/character";
//cfonseca@grupocentrico.com

const statusMap = {
  Alive: "Vivo 🟢",
  Dead: "Muerto 🔴",
  unknown: "Desconocido ⚪",
};

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("Fetch api");
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleInputChange = (e) => {
    const currentQuery = e.target.value;
    fetch(`${API_URL}/?name=${currentQuery}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  };

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-5xl mt-24 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl lg:text-[80px] xl:text-[96px] font-black">
        RICK AND MORTY API
      </h1>
      <input
        type="text"
        onChange={(e) => handleInputChange(e)}
        className="border border-[#DADADA] bg-[#f5f5f5] w-full rounded-xl text-[#DADADA] px-5 py-2"
        placeholder="Nombre del personaje"
      />
      <div className="md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 flex flex-col items-center w-full gap-4 my-12 m-auto">
        {characters.map((character) => (
          <div
            key={character.id}
            className="h-64 w-56 bg-white gap-4 mb-2 rounded-xl p-1.5 shadow-sm"
          >
            <div className="rounded-xl h-40 overflow-hidden">
              <img
                src={character.image}
                className="rounded-xl object-center object-contain"
              />
            </div>
            <div className="flex gap-2 mt-2">
              <p className="font-light text-sm text-[#ABABAB]">Nombre:</p>
              <p className="font-semibold text-sm text-[#3E3C3C] text-nowrap text-ellipsis overflow-hidden">
                {character.name}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <p className="font-light text-sm text-[#ABABAB]">Estado:</p>
              <p className="font-semibold text-sm text-[#3E3C3C] text-nowrap text-ellipsis overflow-hidden">
                {statusMap[character.status]}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <p className="font-light text-sm text-[#ABABAB]">Localización:</p>
              <p className="font-semibold text-sm text-[#3E3C3C] text-nowrap text-ellipsis overflow-hidden">
                {character.location.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
