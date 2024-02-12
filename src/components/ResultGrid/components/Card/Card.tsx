import { useEffect, useState } from 'react'
import { PokemonInfo, PokemonURL } from '../../../../context/PokeProvider/interfaces'
import APIREQUEST from '../../../../shared/api-request'
import './Card.scss'

const Card: React.FC<PokemonURL> = (pokemon) => {

    const [pokeInfo, setPokeInfo] = useState<PokemonInfo>({} as PokemonInfo)

    const getPokemonData = () => {
        new APIREQUEST().getPokemon(pokemon.name)
        .then(response => {
            if (!response.ok)
                throw new Error('Error al obtener datos')

            return response.json()
        }).then(data => {
            setPokeInfo(data)
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(getPokemonData, []);

    return (
        <div className="card">
            <h1>{pokeInfo.name}</h1>
            <img src={pokeInfo.sprites?.front_default} alt="Imagen pokemon" />
        </div>
    )
}

export default Card