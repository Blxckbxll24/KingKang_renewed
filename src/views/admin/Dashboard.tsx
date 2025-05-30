import Sidebar from "../../components/layout/Sidebar";
import { Users, Package, ClipboardList } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const stats = [
    {
      title: "Usuarios",
      count: 124,
      icon: <Users className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Productos",
      count: 89,
      icon: <Package className="w-8 h-8 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Órdenes",
      count: 45,
      icon: <ClipboardList className="w-8 h-8 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ];

  const ordersData = [
    { mes: "Ene", ordenes: 10 },
    { mes: "Feb", ordenes: 20 },
    { mes: "Mar", ordenes: 15 },
    { mes: "Abr", ordenes: 30 },
    { mes: "May", ordenes: 25 },
    { mes: "Jun", ordenes: 35 },
  ];

  const logs = [
    "✅ Usuario Juan Pérez registrado",
    "🛒 Nueva orden creada: #1234",
    "✏️ Producto 'Camisa Roja' actualizado",
    "🔒 Admin inició sesión",
    "📦 Orden #1229 enviada",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Bienvenido al panel de administración</h2>

        {/* Contadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map(({ title, count, icon, bg }) => (
            <div
              key={title}
              className={`flex items-center justify-between p-5 rounded-xl shadow ${bg}`}
            >
              <div>
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                <p className="text-2xl font-bold text-gray-800">{count}</p>
              </div>
              {icon}
            </div>
          ))}
        </div>

        {/* Gráfica de órdenes */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-lg font-semibold mb-4">Órdenes por mes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ordersData}>
              <Line type="monotone" dataKey="ordenes" stroke="#ef4444" strokeWidth={3} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Logs */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Actividad reciente</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {logs.map((log, i) => (
              <li key={i}>{log}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
