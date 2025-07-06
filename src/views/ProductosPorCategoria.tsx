// src/pages/ProductosPorCategoria.tsx
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard"; 

type Producto = {
  id: number;
  nombre: string;
  categoria: string;
};

export default function ProductosPorCategoria() {
  const { categoria } = useParams<{ categoria: string }>();

  const productos: Producto[] = [
    { id: 1, nombre: "Laptop", categoria: "electronica" },
    { id: 2, nombre: "Audífonos", categoria: "electronica" },
    { id: 3, nombre: "Camiseta", categoria: "ropa" },
    { id: 4, nombre: "Jeans", categoria: "ropa" },
    { id: 5, nombre: "Silla", categoria: "hogar" },
    { id: 6, nombre: "Mesa", categoria: "hogar" },
  ];

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoria?.toLowerCase()
  );

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-600 capitalize">
          Productos de {categoria}
        </h1>

        {productosFiltrados.length === 0 ? (
          <p className="text-center text-gray-500">
            No hay productos en esta categoría.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 " >
            {productosFiltrados.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
