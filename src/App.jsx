import Header from './components/Header'
import Footer from './components/Footer'
import { Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'



import './App.css'

function App() {


  return (
    <>
      <Header/>
      <Container>
      <HomeScreen/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
