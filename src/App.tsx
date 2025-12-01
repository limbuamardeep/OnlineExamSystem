
import './App.css'
import { Footer } from './components/footer/Footer'
import { DesktopNavbar} from './components/navbar/DesktopNavbar'
import { LandingPage } from './page/landing-page'

function App() {

  return (
    <>
      <DesktopNavbar/>
      <LandingPage/>
      <Footer/>
    </>
  )
}

export default App
