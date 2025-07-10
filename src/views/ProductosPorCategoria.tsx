// src/pages/ProductosPorCategoria.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard";
import { fetchProducts } from "../services/productsService";
import type { Products } from "../types/products";

export default function ProductosPorCategoria() {
  const { categoria } = useParams<{ categoria: string }>();
  const [productos, setProductos] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProductos(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  const categoriasMap: Record<number, string> = {
    1: "electronica",
    2: "ropa",
    3: "hogar",
    4: "mascotas",
  };

  const productosFiltrados = productos.filter(
    (producto) =>
      categoriasMap[producto.categoryId.id]?.toLowerCase() ===
      categoria?.toLowerCase()
  );

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-600 capitalize">
          Productos de {categoria}
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Cargando productos...</p>
        ) : productosFiltrados.length === 0 ? (
          <p className="text-center text-gray-500">
            No hay productos en esta categoría.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {productosFiltrados.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
