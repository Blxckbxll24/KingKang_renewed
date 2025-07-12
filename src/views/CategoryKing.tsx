import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useCategoriesStore } from "../store/categoryStore";

export default function CategoryKing() {
  const { categories, loading, loadCategories } = useCategoriesStore();

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl">Cargando categorías...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-600">
          Categorías
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const ruta = `/productos/${cat.name.toLowerCase()}`;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105 duration-300"
                style={{ height: "300px", width: "300px" }}
              >
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
                    {cat.name}
                  </h2>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  <Link
                    to={ruta}
                    className="mt-auto inline-block text-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
