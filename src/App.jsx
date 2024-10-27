import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <h1 className='text-7xl bg-orange-400 '>Vite + React</h1> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      {/* <DaisyNav></DaisyNav> */}
    </>
  )
}

export default App
