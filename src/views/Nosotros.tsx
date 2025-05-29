import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow bg-white py-20 px-4 md:px-10 lg:px-20 space-y-24">
        <div className="max-w-7xl mx-auto">
          {/* Título principal */}
          <h2 className="text-5xl font-extrabold text-red-600 mb-16 text-center transition-all duration-700 ease-in-out">
            Conócenos
          </h2>

          {/* Sección: Quiénes somos */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <img
              src="/EquipoKK.png"
              alt="Equipo de KingKang trabajando"
              className="rounded-3xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />

            <div className="transition-opacity duration-1000 ease-in opacity-100">
              <h3 className="text-3xl font-semibold text-red-500 mb-6">¿Quiénes somos?</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                En <strong>KingKang</strong>, nos impulsa la pasión por transformar ideas en soluciones prácticas y funcionales para el día a día.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Creamos productos que combinan calidad, diseño y accesibilidad para mejorar la vida de las personas.
              </p>
            </div>
          </div>

          {/* Sección: Misión, Visión, Valores */}
          <div className="grid md:grid-cols-3 gap-10 text-center mt-24">
            {[
              {
                titulo: "Misión",
                texto:
                  "Brindar soluciones creativas e innovadoras que mejoren la calidad de vida de nuestros clientes.",
              },
              {
                titulo: "Visión",
                texto:
                  "Ser una marca referente a nivel nacional e internacional por nuestra calidad y compromiso social.",
              },
              {
                titulo: "Valores",
                texto: (
                  <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
                    <li>Innovación constante</li>
                    <li>Ética y transparencia</li>
                    <li>Calidad garantizada</li>
                    <li>Empatía y respeto</li>
                    <li>Trabajo colaborativo</li>
                    <li>Orientación al cliente</li>
                  </ul>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-red-100 via-white to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-1"
              >
                <h4 className="text-2xl font-bold text-red-600 mb-4">{card.titulo}</h4>
                <div className="text-gray-700 leading-relaxed text-base">{card.texto}</div>
              </div>
            ))}
          </div>

          {/* Sección: Historia */}
          <div className="mt-28 text-center">
            <h3 className="text-4xl font-bold text-red-600 mb-8 transition-opacity duration-700">
              Nuestra Historia
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-14">
              Desde una simple idea hasta una empresa consolidada, en KingKang siempre hemos mantenido nuestros valores y visión. Gracias al esfuerzo constante, hoy somos un referente emergente en diseño funcional.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { año: "2020", texto: "Nace la idea de KingKang en un taller universitario." },
                { año: "2021", texto: "Lanzamos nuestra primera línea de productos." },
                { año: "2023", texto: "Ampliamos operaciones y duplicamos nuestro equipo." },
                { año: "2025", texto: "Iniciamos expansión internacional con el nuevo ecommerce." },
              ].map((evento, i) => (
                <div
                  key={i}
                  className="bg-white border border-red-100 hover:border-red-300 shadow-md hover:shadow-lg transition rounded-xl p-6 w-64 text-left hover:scale-105 transform duration-300"
                >
                  <h5 className="text-xl font-bold text-red-500 mb-2">{evento.año}</h5>
                  <p className="text-sm text-gray-600">{evento.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
