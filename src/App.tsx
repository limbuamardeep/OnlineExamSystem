
import './App.css'
import { Footer } from './components/footer/Footer'
import { DesktopNavbar} from './components/navbar/DesktopNavbar'
import { LandingPage } from './page/LandingPage'
import { SignIn } from './page/Signin'
import { SignUpPage } from './page/SignUpPage'



function App() {

  return (
    <>
      <DesktopNavbar/>
      <LandingPage/>
      <SignIn/>
      <SignUpPage/>
      <Footer/>
    </>
  )
}

export default App
