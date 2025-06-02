import { useState, useEffect } from "react";
import { XCircle } from "lucide-react";

interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
}

interface Props {
  user?: User;
  onSubmit: (user: User) => void;
  onCancel: () => void;
}

export default function UserForm({ user, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<User>({
    name: "",
    email: "",
    role: "admin",
  });

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.role) {
      onSubmit(form);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">
          {user ? "Editar usuario" : "Nuevo usuario"}
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-red-600"
          title="Cancelar"
        >
          <XCircle size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correo</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rol</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            required
          >
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
            <option value="viewer">Visualizador</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
