import { useSelector } from 'react-redux'
import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'

function App() {


  return (
   <>
   <NavigationBar></NavigationBar>
   <Outlet></Outlet>
   <Footer></Footer>
   </>
  )
}

export default App
