// pages/index.tsx
"use client";
import { useState } from "react";
import { FaFire, FaList, FaQuestionCircle, FaSmile } from "react-icons/fa";

const InfoDisplay = ({ champion }: any) => {
  if (!champion) return null; // Não exibe se não houver campeão

  // Simulando dados de exemplo baseados no campeão
  const data = {
    genero: "Homem",
    posicao: "Topo",
    especie: "Yordle",
    recurso: "Mana",
    alcance: "Longo Alcance",
    regiao: "Bandópolis",
    ano: "2009",
  };

  return (
    <div className="relative mt-8 z-10 flex justify-center flex-col items-center">
      <table className="table-auto border-separate border-spacing-2 text-white">
        <thead>
          <tr className="text-center">
            <th className="border-b-2 border-white">Campeão</th>
            <th className="border-b-2 border-white">Gênero</th>
            <th className="border-b-2 border-white">Posição(ões)</th>
            <th className="border-b-2 border-white">Espécie</th>
            <th className="border-b-2 border-white">Recurso</th>
            <th className="border-b-2 border-white">Tipo de alcance</th>
            <th className="border-b-2 border-white">Região(ões)</th>
            <th className="border-b-2 border-white">Ano de lançamento</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className=" w-24 h-24">
              {" "}
              <img
                src="https://media.tenor.com/Y7wZjkZx1ksAAAAj/monkey-thinking-meme-monkey-thinking-sticker.gif"
                alt="Champion"
                className="w-24 h-24"
              />
            </td>
            {Object.values(data).map((value: any, index: number) => (
              <td
                key={index}
                className={`${
                  value === Object.values(data)[index]
                    ? "bg-green-500"
                    : "bg-red-500"
                } w-24 h-24`}
              >
                {value}
              </td>
            ))}
            {/* <td className="bg-green-500 w-24 h-24">Homem</td>
            <td className="bg-green-500 w-24 h-24">Topo</td>
            <td className="bg-green-500 w-24 h-24">Yordle</td>
            <td className="bg-green-500 w-24 h-24">Mana</td>
            <td className="bg-green-500 w-24 h-24">Longo Alcance</td>
            <td className="bg-green-500 w-24 h-24">Bandópolis</td>
            <td className="bg-green-500 w-24 h-24">2009</td> */}
          </tr>
        </tbody>
      </table>

      <div className="mt-4 bg-black bg-opacity-70 p-4 rounded-lg border border-white shadow-md">
        <p className="text-yellow-400 text-lg">Indicadores de cor</p>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 w-6 h-6"></div> <span>Correto</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 w-6 h-6"></div> <span>Parcial</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 w-6 h-6"></div> <span>Incorreto</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 w-6 h-6"></div> <span>Mais alto</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 w-6 h-6"></div> <span>Mais baixo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [championName, setChampionName] = useState<any>("");
  const [championData, setChampionData] = useState(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChampionName(e.target.value);
  };
  const handleSubmit = () => {
    setChampionData(championName);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://www.dailynews.co.th/wp-content/uploads/2024/06/tft_cover.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <header className="relative z-10 flex justify-between items-center p-4">
        <div className="text-4xl font-bold">TftDle</div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center mt-16">
        <div className="flex space-x-4 text-3xl">
          <FaQuestionCircle />
          <FaFire />
          <FaSmile />
          <FaList />
        </div>

        <div className="mt-8 z-10">
          <p className="text-xl text-center">
            Adivinhe o campeão de Team Fight Tactics de hoje!
          </p>
          <input
            type="text"
            value={championName}
            onChange={handleInputChange}
            placeholder="Digite o nome do campeão..."
            className="w-[480px] p-2 mt-4 text-black rounded-md"
          />
        </div>

        <button
          className="mt-4 p-2 bg-yellow-500 rounded-md text-black"
          onClick={handleSubmit}
        >
          Verificar Campeão
        </button>
      </main>
      {championData && <InfoDisplay champion={championData} />}
      <footer className="relative z-10 flex justify-center mt-16">
        <p>
          O campeão de ontem foi{" "}
          <span className="text-green-500">Shyvanna</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
