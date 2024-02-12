import './App.css'

import Navbar from '../Navbar/Navbar.tsx'
import Grid from '../ResultGrid/Grid.tsx'
import PokeContextProvider from '../../context/PokeProvider/PokeContext.tsx'

function App() {

  return (
    <div className="root-container">
      <PokeContextProvider>
        <Navbar />
        <Grid />
      </PokeContextProvider>
    </div>
  )
}

export default App
