import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import OrderTable from "../../components/admin/orders/OrderTable";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      cliente: "Carlos Mendoza",
      correo: "carlos@example.com",
      total: 1200,
      direccion: "Av. Reforma 123, CDMX",
      fecha: "2025-06-02",
      completada: false,
    },
    {
      id: 2,
      cliente: "María López",
      correo: "maria@example.com",
      total: 2850,
      direccion: "Calle 45 Sur #789, Mérida",
      fecha: "2025-06-01",
      completada: false,
    },
  ]);

  const handleDelete = (id: number) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  const handleComplete = (id: number) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, completada: true } : o
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 pt-16 px-8 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-6">Gestión de Órdenes</h2>
        <OrderTable
          orders={orders}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
}
