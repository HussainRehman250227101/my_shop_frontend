import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container} from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Container>
      <Outlet />
      </Container>
      <Footer/>
    </>
  )
}

export default App
