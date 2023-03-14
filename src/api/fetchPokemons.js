import axios from "axios"
const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(baseURL + `pokemon?limit=${limit}&offset=${offset}`)
        return data;
    }catch(error) {
        console.log(error);
    }

}


export const fetchPokemonS = async(from, till) => {
    let list = [];
    for(let i = from; i < till; i++)  {
        const data = await axios.get(baseURL + 'pokemon/' + i)
        list.push(data.data)
    }
}

export const getPokemon = async(id) => {
    try {
        const { data } = await axios.get(baseURL + `pokemon/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}