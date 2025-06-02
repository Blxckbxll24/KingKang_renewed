import { Pencil, Trash2 } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserTable({ users, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-blue-100 text-blue-800">
          <tr className="border-b">
            <th className="p-3">Nombre</th>
            <th className="p-3">Correo electrónico</th>
            <th className="p-3">Rol</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 even:bg-gray-50">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2 flex-wrap">
                    <button
                      onClick={() => onEdit(user)}
                      className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded p-2"
                      title="Editar"
                      aria-label={`Editar usuario ${user.name}`}
                    >
                      <Pencil size={18} aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => onDelete(user.id)}
                      className="bg-red-100 hover:bg-red-200 text-red-600 rounded p-2"
                      title="Eliminar"
                      aria-label={`Eliminar usuario ${user.name}`}
                    >
                      <Trash2 size={18} aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500">
                No hay usuarios registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
