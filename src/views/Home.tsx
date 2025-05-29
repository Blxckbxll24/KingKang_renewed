import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard"; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow space-y-24">

        {/* Sección Hero */}
        <section
          className="relative bg-[url('/HeroCat.jpg')] bg-cover bg-center text-white px-6 mt-12 max-w-7xl mx-auto rounded-3xl shadow-xl text-center min-h-[400px] flex items-center overflow-hidden"
        >
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
              <ProductCard key={item} item={item} />
            ))}
          </div>
        </section>

        {/* Sección Mapa */}
        <section className="max-w-6xl mx-auto px-4 pb-24">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            Visítanos
          </h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.475983844649!2d-86.86646762468514!3d21.133447780542177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b8530a628fd%3A0xa455677be2233dcb!2sLOTUS%20NIGHT%20CLUB!5e0!3m2!1ses!2smx!4v1748497225134!5m2!1ses!2smx"
              width="100%"
              height="300"
              style={{ border: 0 }}              
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
