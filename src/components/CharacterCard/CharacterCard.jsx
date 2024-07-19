import { DescriptionLine } from "../DescriptionLine/DescriptionLine";

const statusMap = {
  Alive: "Vivo 🟢",
  Dead: "Muerto 🔴",
  unknown: "Desconocido ⚪",
};

export const CharacterCard = ({ character }) => {
  return (
    <div className="h-64 w-56 bg-white gap-4 mb-2 rounded-xl p-1.5 shadow-sm">
      <div className="rounded-xl h-40 overflow-hidden">
        <img
          src={character.image}
          className="rounded-xl object-center object-contain"
        />
      </div>
      <DescriptionLine label={"Nombre"} value={character.name} />
      <DescriptionLine label={"Estado"} value={statusMap[character.status]} />
      <DescriptionLine label={"Localización"} value={character.location.name} />
    </div>
  );
};
