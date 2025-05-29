export default function ContactoComponent() {
  return (
    <form className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-red-600 text-center">Contáctanos</h2>

      {/* Nombre */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1" htmlFor="nombre">
          Nombre 
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Correo */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1" htmlFor="correo">
          Correo electrónico
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="correo@ejemplo.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Teléfono */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1" htmlFor="telefono">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="(000) 000-0000"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Botón */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  );
}
