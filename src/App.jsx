import './App.css'
import PokemonCard from './components/PokemonCard';
import {useState} from "react";

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
    const previousClick = () => {
      setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex);
    }
    const nextClick = () => {
      setPokemonIndex(pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex)
    }
    return (
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button onClick={previousClick}>Précédent</button>
      <button onClick={nextClick}>Suivant</button>
      </div>
    );
  }

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  
  
  export default App;
