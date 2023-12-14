function NavBar ({pokemonList, onPokemonClick}) {

  const handlePokemonClick = (index) => {
    onPokemonClick(index);
    const clickedPokemon = pokemonList[index].name;
    if (clickedPokemon === "pikachu") {
      alert("pika pikatchu !!!")}
  }
    
return (
      <div>
    {pokemonList.map((pokemon, index) => 
      <button key={index} onClick={() => handlePokemonClick(index)}>{pokemon.name}</button>
    )}
      </div>
    );
  }

  export default NavBar;