// src/pages/ProductosPorCategoria.tsx
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard"; 

type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;  
};

export default function ProductosPorCategoria() {
  const { categoria } = useParams<{ categoria: string }>();

const productos: Producto[] = [
  { id: 1, nombre: "Laptop", categoria: "electronica", descripcion: "Laptop potente para trabajo y juegos." },
  { id: 2, nombre: "Audífonos", categoria: "electronica", descripcion: "Audífonos con cancelación de ruido." },
  { id: 3, nombre: "Camiseta", categoria: "ropa", descripcion: "Camiseta 100% algodón." },
  { id: 4, nombre: "Jeans", categoria: "ropa", descripcion: "Jeans de mezclilla de corte recto." },
  { id: 5, nombre: "Silla", categoria: "hogar", descripcion: "Silla ergonómica para oficina." },
  { id: 6, nombre: "Mesa", categoria: "hogar", descripcion: "Mesa de comedor para 4 personas." },
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
