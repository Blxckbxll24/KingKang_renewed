import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard";

export default function Productos() {
  const productos = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-600">
          Catálogo de Productos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((item) => (
            <ProductCard key={item} item={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
