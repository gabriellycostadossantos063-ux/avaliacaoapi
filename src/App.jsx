import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import pag1 from './pages/pag1'
import pag2 from './pages/pag2'
import pag3 from './pages/pag3'




function App() {
 
  return (

    <>  
      <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/pag1" element={<Pag1 />} />
       <Route path="/pag2" element={<Pag2 />} />
       <Route path="/pag3" element={<Pag3 />} />
     </Routes>
      <Footer />
 </>
)
 
}
 
export default App