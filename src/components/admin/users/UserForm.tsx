// components/admin/users/UserForm.tsx
import { useState, useEffect } from "react";
import type { User } from "../../../types/users";
import type { Role } from "../../../types/roles";

interface Props {
  initialData?: User;
  roles: Role[]; // lista de roles para el select
  onSubmit: (data: Omit<User, "id" | "role"> & { roleId: number }) => void;
  onCancel: () => void;
}

export default function UserForm({ initialData, roles, onSubmit, onCancel }: Props) {
  const [username, setUsername] = useState(initialData?.username || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [isActive, setIsActive] = useState(initialData?.isActive ?? true);
  const [roleId, setRoleId] = useState(initialData?.roleId || (roles[0]?.id ?? 0));
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUsername(initialData?.username || "");
    setEmail(initialData?.email || "");
    setIsActive(initialData?.isActive ?? true);
    setRoleId(initialData?.roleId || (roles[0]?.id ?? 0));
    setPassword("");
  }, [initialData, roles]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return alert("El nombre de usuario es obligatorio");
    if (!roleId) return alert("Selecciona un rol");
    // Si creas o editas, puedes enviar password sólo si hay valor
    onSubmit({ username: username.trim(), email: email.trim(), isActive, roleId, ...(password ? { password } : {}) });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto space-y-4">
      <h3 className="text-xl font-semibold">{initialData ? "Editar Usuario" : "Agregar Usuario"}</h3>

      <div>
        <label className="block mb-1 font-medium">Nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Contraseña {initialData ? "(dejar vacío para no cambiar)" : ""}</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Rol</label>
        <select
          value={roleId}
          onChange={e => setRoleId(Number(e.target.value))}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          {roles.map(role => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isActive}
          onChange={e => setIsActive(e.target.checked)}
          id="isActive"
        />
        <label htmlFor="isActive" className="select-none">Activo</label>
      </div>

      <div className="flex gap-4 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
