import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
    
  )
}


export default App
