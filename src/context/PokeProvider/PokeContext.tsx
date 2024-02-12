import { MutableRefObject, createContext, useEffect, useRef, useState } from 'react'
import { PokeContextProps, PokeContextType, PokemonURL } from './interfaces.ts'
import APIREQUEST from '../../shared/api-request.ts'

export const PokeContext = createContext<PokeContextType>({} as PokeContextType)

const PokeContextProvider: React.FC<PokeContextProps> = (props) => {

    const [searchText, setSearchText] = useState<string>('')
    const [pokeList, setPokeList] = useState<PokemonURL[]>([])
    const [pokeFilter, setPokeFilter] = useState<PokemonURL | null>(null)
    const countDown: MutableRefObject<number> = useRef(0);

    const updateData = () => {
        if (searchText.length == 0 && pokeList.length === 0) {
            new APIREQUEST().getAll()
            .then(response => {
                if (!response.ok)
                    throw new Error('Error al obtener datos')

                return response.json()
            }).then(data => {
                const newPokemonList: PokemonURL[] = [...pokeList]
                data.results.forEach((pokemon: PokemonURL) => {
                    pokemon.id = newPokemonList.length;
                    newPokemonList.push(pokemon)
                });
                setPokeList([...newPokemonList])
            })
        } else {
            setPokeFilter(null)
            clearTimeout(countDown.current)
            countDown.current = setTimeout(() => {
                new APIREQUEST().getPokemon(searchText)
                .then(response => {
                    if (!response.ok)
                        throw new Error('Error al obtener datos')
    
                    return response.json()
                }).then(data => {
                    const pokemonURL: PokemonURL = {
                        id: data.id,
                        name: data.name,
                        url: `https://pokeapi.co/api/v2/pokemon/${data.id}`
                    }
                    setPokeFilter(pokemonURL)
                })
            }, 1000);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(updateData, [searchText])

    const updateSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const search: string = e.target.value.trim()
        if (search.length > 2)
            setSearchText(search)
    }

    return(
        <PokeContext.Provider value={{
            searchText, updateSearchText, pokeList, pokeFilter
        }}>
            { props.children }
        </PokeContext.Provider>
    )
}

export default PokeContextProvider