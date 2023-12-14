import './App.css'
import PokemonCard from './components/PokemonCard';
import {useState} from "react";
import NavBar from './components/NavBar'
import {useEffect} from 'react';

  function App() {
    
    const [pokemonIndex, setPokemonIndex] = useState(0);
    const changedPokemonClick = (index) => {
      setPokemonIndex(index);
    }
    useEffect(() =>{
      alert("Hello Pokemon trainer :)")
    },
    []
    );
    
    return (
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <NavBar pokemonList={pokemonList}
                onPokemonClick={changedPokemonClick}/>
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
