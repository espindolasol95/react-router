import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Layout from './components/Layout'



function App() {
    return(
        <div>
         <Navbar />
        <div className="container mt-4">
        
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

         </Routes>
         </div>
        </div>
    
    )
  
}

export default App
