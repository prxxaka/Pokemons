import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
import classes from './Pokemon.module.css'
const PokemonInfo = () => {
    const [ pokemon, setPokemon ] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPokemon(id).then((data => setPokemon(data)));
    }, [ id ])
    console.log(pokemon);
    return (
        <div>
            <div className={classes.info}>
                <h1>{pokemon?.name}</h1>
                <img src={pokemon?.sprites.other.dream_world.front_default}  alt='fd' />
            </div>
            <div className={classes.text}>
                <h4>Height - {pokemon?.height}sm</h4>
                <h4>Weight - {pokemon?.weight}grams</h4>
                <h4>Base experience - {pokemon?.base_experience}</h4>
                <h4>Attack - {pokemon?.stats[1].base_stat}</h4>
                <h4>HP - {pokemon?.stats[0].base_stat}</h4>
                <h4>Defence - {pokemon?.stats[2].base_stat}</h4>
                <h4>Special attack - {pokemon?.stats[3].base_stat}</h4>
                <h4>Speed - {pokemon?.stats[5].base_stat}</h4>
            </div>
        </div>
    )
}

export default PokemonInfo


/// rafce;