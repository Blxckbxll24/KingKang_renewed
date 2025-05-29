import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nosotros from './views/Nosotros'; 
import Home from './views/Home';
import Contacto from './views/Contacto';
import Login from './views/auth/Login';
import Registro from './views/auth/Registro';
import Carrito from './views/Carrito';
import Productos from './views/Productos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;
