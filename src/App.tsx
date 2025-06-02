import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imports cliente
import Nosotros from './views/Nosotros'; 
import Home from './views/Home';
import Contacto from './views/Contacto';
import Login from './views/auth/Login';
import Registro from './views/auth/Registro';
import Carrito from './views/Carrito';
import Productos from './views/Productos';

//Imports admin
import Dashboard from './views/admin/Dashboard';
import Users from './views/admin/Users';
import Roles from './views/admin/Roles';
import Categories from './views/admin/Categories';


function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas de cliente */}
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productos" element={<Productos />} />

        {/* Rutas de admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/categorias" element={<Categories />} />

      </Routes>
    </Router>
  );
}

export default App;
