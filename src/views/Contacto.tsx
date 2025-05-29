import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactoComponent from "../components/forms/ContactoComponent";

export default function Contacto() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Header />

      <main className="flex-grow py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <section className="flex flex-col md:flex-row gap-12">
            
            {/* Izquierda: info contacto + redes */}
            <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8 text-gray-700 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center md:text-left">
                Otras formas de contactarnos
              </h2>

              <div className="space-y-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                  <p className="text-red-600 font-semibold">+52 998 026 6547</p>
                  <p className="text-sm">Lunes a viernes, 9am - 6pm</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Correo electrónico</h3>
                  <p className="text-red-600 font-semibold">contacto@kingkang.com</p>
                  <p className="text-sm">Respuesta en menos de 24 horas</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Dirección</h3>
                  <p>Av. Principal 1234</p>
                  <p>Cancún, Quintana Roo</p>
                  <p>México</p>
                </div>
              </div>

              <div className="flex space-x-8 justify-center md:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-red-600 hover:text-red-800 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.13 22 16.99 22 12z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-red-600 hover:text-red-800 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.97-2.48 9.04 9.04 0 01-2.88 1.1 4.52 4.52 0 00-7.69 4.12A12.79 12.79 0 013 4.79 4.48 4.48 0 004.81 10 4.48 4.48 0 012 9.75v.05a4.52 4.52 0 003.62 4.43 4.53 4.53 0 01-2.04.08 4.52 4.52 0 004.22 3.13A9.06 9.06 0 013 19.54 12.77 12.77 0 008.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.36-.02-.54A8.35 8.35 0 0023 3z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-red-600 hover:text-red-800 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Derecha: formulario */}
            <div className="md:w-1/2">
              <ContactoComponent />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
