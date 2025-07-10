import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard";
import { useProductsStore } from "../store/productsStore";
import { useCategoriesStore } from "../store/categoryStore";

export default function ProductosPorCategoria() {
  const { categoria } = useParams<{ categoria: string }>();

  const {
    products,
    loading: loadingProducts,
    loadProducts,
  } = useProductsStore();

  const {
    categories,
    loading: loadingCategories,
    loadCategories,
  } = useCategoriesStore();

  useEffect(() => {
    if (products.length === 0) loadProducts();
    if (categories.length === 0) loadCategories();
  }, [loadProducts, loadCategories, products.length, categories.length]);

  const categoriaSeleccionada = categories.find(
    (cat) => cat.name.toLowerCase() === categoria?.toLowerCase()
  );

  const productosFiltrados = products.filter(
    (prod) => prod.categoryId === categoriaSeleccionada?.id
  );

  const loading = loadingProducts || loadingCategories;

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
          <p className="text-center text-gray-500">No hay productos en esta categoría.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
