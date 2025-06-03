import { Trash2, CheckCircle } from "lucide-react";

export default function OrderTable({
  orders,
  onDelete,
  onComplete,
}: {
  orders: {
    id: number;
    cliente: string;
    correo: string;
    total: number;
    direccion: string;
    fecha: string;
    completada: boolean;
  }[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-green-100 text-green-900">
          <tr>
            <th className="p-3">Cliente</th>
            <th className="p-3">Correo</th>
            <th className="p-3">Dirección</th>
            <th className="p-3">Total</th>
            <th className="p-3">Fecha</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.cliente}</td>
                <td className="p-3">{order.correo}</td>
                <td className="p-3">{order.direccion}</td>
                <td className="p-3">${order.total.toFixed(2)}</td>
                <td className="p-3">{order.fecha}</td>
                <td className="p-3 text-center flex justify-center gap-2">
                  {!order.completada && (
                    <button
                      onClick={() => onComplete(order.id)}
                      className="bg-green-100 hover:bg-green-200 text-green-700 rounded p-2"
                      title="Marcar como completada"
                    >
                      <CheckCircle size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (confirm("¿Eliminar esta orden?")) onDelete(order.id);
                    }}
                    className="bg-red-100 hover:bg-red-200 text-red-600 rounded p-2"
                    title="Eliminar"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-4 text-center text-gray-500">
                No hay órdenes registradas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
