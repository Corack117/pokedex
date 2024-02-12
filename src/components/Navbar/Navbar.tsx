import './Navbar.scss'
import { FiSearch } from "react-icons/fi";
import pokedexLogo from '/src/assets/pokedex.webp'
import { useContext } from 'react';
import { PokeContext } from '../../context/PokeProvider/PokeContext';
import { PokeContextType } from '../../context/PokeProvider/interfaces';

export const Navbar: React.FC = () => {

    const { updateSearchText }: PokeContextType = useContext(PokeContext);


    return (
        <div className="nav">
            <img src={pokedexLogo} alt="Pokedex Logo" className='logo' />
            <div className="wrapper">
                <FiSearch className='searchIcon' />
                <input type="text" className='search' placeholder='Busca tu pokemón' onChange={updateSearchText} />
            </div>
            <div></div>
        </div>
    )
}

export default Navbar