import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Productos() {
  const categorias = [
    {
      nombre: "Electrónica",
      imagen: "/images/electronica.jpg", // asegúrate de tener esta imagen
      ruta: "/productos/electronica",
    },
    {
      nombre: "Ropa",
      imagen: "/images/ropa.jpg",
      ruta: "/productos/ropa",
    },
    {
      nombre: "Hogar",
      imagen: "/images/hogar.jpg",
      ruta: "/productos/hogar",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-600">
          Categorías 
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {categorias.map((cat, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg  overflow-hidden flex flex-col transition-transform hover:scale-105 duration-300"
      style={{ height: "300px", width: "300px" }} // ← tamaño fijo del cuadro
    >
      <img
        src={cat.imagen}
        alt={cat.nombre}
        className="h-56 w-full object-cover" // ← imagen más alta
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
          {cat.nombre}
        </h2>
        <Link
          to={cat.ruta}
          className="mt-auto inline-block text-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Ver más
        </Link>
      </div>
    </div>
  ))}
</div>

      </main>

      <Footer />
    </div>
  );
}
