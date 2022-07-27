import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/survey/:questionNumber' element={<Survey />} />
          <Route path='/results' element={<Results />} />
          <Route path='/freelances' element={<Freelances />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;

