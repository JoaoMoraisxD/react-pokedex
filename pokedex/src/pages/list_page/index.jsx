import { useEffect, useState } from "react"
import { Container } from "./styles"
import axios from "axios";
import Pokebox from "../../components/poke_box";
import Pokemon from "../../components/models";


const ListPage = () => {

    const [pokemons, setPokemons] = useState(0);
    console.log(pokemons);

    useEffect(() => {

        const buscaPokemon = async () => {

            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
            let pokeDetail = [];

            for(let i = 0; i < response.data.results.length; i++){
                let midle = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`);
                pokeDetail.push(midle.data);
            }
            setPokemons(pokeDetail);
        }
    
        buscaPokemon();
    },[])
    
    const myPokemon = new Pokemon(
        pokemons[0]?.order || pokemons[0]?.id,
        pokemons[0]?.name || '',
        '',
        pokemons[0]?.types ? pokemons[0].types.map((typeSlot) => typeSlot.type.name) : [],
        pokemons[0]?.sprites?.other?.dream_world?.front_default || 
        pokemons[0]?.sprites?.other?.['official-artwork']?.front_default || 
        pokemons[0]?.sprites?.front_default || '',
        pokemons[0]?.stats ? pokemons[0].stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`) : [], // Convertendo cada objeto em string
        pokemons[0]?.base_experience || 0,
        '',
        pokemons[0]?.abilities ? pokemons[0].abilities.map((ability) => ability.ability.name) : []
    );

    return(<>
        
        <Container>
            <Pokebox pokemon={myPokemon}/>
        </Container>

    </>)
}

export {ListPage}