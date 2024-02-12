export interface PokeContextType {
    searchText: string;
    updateSearchText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pokeList: PokemonURL[];
    pokeFilter: PokemonURL | null;
}

export interface PokeContextProps {
    children: React.ReactNode;
}

export interface PokemonURL {
    id: number | null;
    name: string;
    url: string;
}

export interface PokemonInfo {
    id: number;
    name: string;
    abilities: PokeAbilitie[];
    sprites: PokeSprite | null
}

export interface PokeSprite {
    front_default: string;
}

export interface PokeAbilitie {
    name: string;
    url: string;
}