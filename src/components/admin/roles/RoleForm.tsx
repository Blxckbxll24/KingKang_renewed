import React, { useState, useEffect } from "react";

interface Role {
  id?: number;
  name: string;
}

interface RoleFormProps {
  role?: Role;
  onSubmit: (role: Role) => void;
  onCancel: () => void;
}

export default function RoleForm({ role, onSubmit, onCancel }: RoleFormProps) {
  const [name, setName] = useState(role?.name || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setName(role?.name || "");
  }, [role]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("El nombre es obligatorio");
      return;
    }
    setError("");
    onSubmit({ id: role?.id, name: name.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6 max-w-md">
      <h3 className="text-xl font-semibold mb-4">{role ? "Editar rol" : "Agregar rol"}</h3>

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Nombre del rol
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Guardar
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
