import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

  export default PokemonCard;