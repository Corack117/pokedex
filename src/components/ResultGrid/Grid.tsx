import './Grid.scss'
import Card from './components/Card/Card.tsx'
import { useContext } from 'react';
import { PokeContext } from '../../context/PokeProvider/PokeContext.tsx';
import { PokeContextType, PokemonURL } from '../../context/PokeProvider/interfaces.ts';

const Grid: React.FC = () => {

    const { pokeList, pokeFilter }: PokeContextType = useContext(PokeContext);

    const gridData = (): PokemonURL[] => {
        if (pokeFilter) {
            return [pokeFilter]
        }
        return pokeList
    }

    return (
        <div className="container">
            {gridData().map((pokemon: PokemonURL) => (
                <Card key={pokemon.id} {...pokemon}/>
            ))}
        </div>
    )
}

export default Grid