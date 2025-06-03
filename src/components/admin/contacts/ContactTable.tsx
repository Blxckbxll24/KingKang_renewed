interface ContactMessage {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
  fecha: string;
}

interface Props {
  mensajes: ContactMessage[];
  onDelete: (id: number) => void;
}

export default function ContactoTable({ mensajes, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-blue-100 text-blue-900">
          <tr>
            <th className="p-3">Nombre</th>
            <th className="p-3">Correo</th>
            <th className="p-3">Teléfono</th>
            <th className="p-3">Mensaje</th>
            <th className="p-3">Fecha</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mensajes.length > 0 ? (
            mensajes.map((msg) => (
              <tr key={msg.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{msg.nombre}</td>
                <td className="p-3">{msg.correo}</td>
                <td className="p-3">{msg.telefono}</td>
                <td className="p-3">{msg.mensaje}</td>
                <td className="p-3">{msg.fecha}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => {
                      if (confirm("¿Eliminar este mensaje?")) onDelete(msg.id);
                    }}
                    className="bg-red-100 hover:bg-red-200 text-red-600 rounded px-3 py-1"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-4 text-center text-gray-500">
                No hay mensajes recibidos.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
