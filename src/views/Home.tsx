import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow space-y-24">

        {/* Sección Hero */}
        <section
          className="relative bg-[url('/HeroCat.jpg')] bg-cover bg-center text-white px-6 mt-12 max-w-7xl mx-auto rounded-3xl shadow-xl text-center min-h-[400px] flex items-center overflow-hidden"
        >
          {/* Capa con blur y opacidad */}
          <div className="absolute inset-0 bg-black/15 backdrop-blur-xxs rounded-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto p-6">
            <h1 className="text-5xl font-extrabold mb-4">
              Bienvenido a <span className="text-white">KingKang</span>
            </h1>
            <p className="text-xl">
              Tu tienda confiable para productos innovadores, funcionales y con estilo.
            </p>
          </div>
        </section>

        {/* Sección Productos Destacados */}
        <section className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Imagen {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Producto {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Breve descripción del producto {item}. Ideal para quienes buscan calidad y diseño.
                  </p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Testimonios */}
        <section className="bg-gray-100 py-20 px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Lo que dicen nuestros clientes
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <blockquote className="bg-white rounded-xl p-6 shadow text-center">
              <p className="italic text-gray-700">
                "¡Excelente servicio y productos de alta calidad! Totalmente recomendado."
              </p>
              <footer className="mt-4 text-sm text-gray-500">– Ana G.</footer>
            </blockquote>
            <blockquote className="bg-white rounded-xl p-6 shadow text-center">
              <p className="italic text-gray-700">
                "Una experiencia de compra fácil y rápida. ¡Volveré sin duda!"
              </p>
              <footer className="mt-4 text-sm text-gray-500">– Carlos M.</footer>
            </blockquote>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
