// components/admin/users/UserTable.tsx
import { Pencil, Trash2 } from "lucide-react";
import type { User } from "../../../types/users";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserTable({ users, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full min-w-[700px] border-collapse text-left">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="p-3">Usuario</th>
            <th className="p-3">Correo</th>
            <th className="p-3">Rol</th>
            <th className="p-3 text-center">Activo</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map(user => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 even:bg-gray-50"
              >
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.email || "-"}</td>
                <td className="p-3 capitalize">{user.role?.name}</td>
                <td className="p-3 text-center">{user.isActive ? "Sí" : "No"}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2 flex-wrap">
                    <button
                      onClick={() => onEdit(user)}
                      className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded p-2"
                      title="Editar"
                      aria-label={`Editar usuario ${user.username}`}
                    >
                      <Pencil size={18} aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("¿Seguro que quieres eliminar este usuario?")) {
                          onDelete(user.id);
                        }
                      }}
                      className="bg-red-100 hover:bg-red-200 text-red-600 rounded p-2"
                      title="Eliminar"
                      aria-label={`Eliminar usuario ${user.username}`}
                    >
                      <Trash2 size={18} aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-4 text-center text-gray-500">
                No hay usuarios registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
