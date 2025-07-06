import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imports cliente
import Nosotros from './views/Nosotros'; 
import Home from './views/Home';
import Contacto from './views/Contacto';
import Login from './views/auth/Login';
import Registro from './views/auth/Registro';
import Carrito from './views/Carrito';
import Productos from './views/Productos';
import ProductosPorCategoria from './views/ProductosPorCategoria'; // 👈 Nuevo import

//Imports admin
import Dashboard from './views/admin/Dashboard';
import Users from './views/admin/Users';
import Roles from './views/admin/Roles';
import Categories from './views/admin/Categories';
import Products from './views/admin/Products';
import Contactos from './views/admin/Contactos';
import Orders from './views/admin/Orders';

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
        <Route path="/productos/:categoria" element={<ProductosPorCategoria />} /> {/* 👈 Nueva ruta */}

        {/* Rutas de admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mensajes" element={<Contactos />} />
        <Route path="/ordenes" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
