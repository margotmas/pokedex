/* eslint-disable react/prop-types */
function PokemonCard(props) {

    const {pokemon} = props;
    console.log(props)
    
    return (
        <figure>
        {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc}/>) 
            :
            (<p>???</p>)}

            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}
  export default PokemonCard;