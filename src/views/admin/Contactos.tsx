import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import ContactTable from "../../components/admin/contacts/ContactTable";

interface ContactMessage {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
  fecha: string;
}

export default function Contactos() {
  const [mensajes, setMensajes] = useState<ContactMessage[]>([
    {
      id: 1,
      nombre: "Juan Pérez",
      correo: "juan@example.com",
      telefono: "9991234567",
      mensaje: "Hola, tengo una duda sobre un producto.",
      fecha: "2025-06-01",
    },
    {
      id: 2,
      nombre: "Ana López",
      correo: "ana@example.com",
      telefono: "9987654321",
      mensaje: "¿Cómo puedo hacer una devolución?",
      fecha: "2025-06-02",
    },
  ]);

  const handleDelete = (id: number) => {
    setMensajes(mensajes.filter((msg) => msg.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 pt-16 px-8 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-6">Mensajes de Contacto</h2>
        <ContactTable mensajes={mensajes} onDelete={handleDelete} />
      </main>
    </div>
  );
}
