import { Pencil, Trash2 } from "lucide-react";

interface Role {
  id: number;
  name: string;
}

interface RoleTableProps {
  roles: Role[];
  onEdit: (role: Role) => void;
  onDelete: (id: number) => void;
}

export default function RoleTable({ roles, onEdit, onDelete }: RoleTableProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-blue-100 text-blue-800">
          <tr className="border-b">
            <th className="p-3">ID</th>
            <th className="p-3">Nombre del rol</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.length > 0 ? (
            roles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-50 even:bg-gray-50">
                <td className="p-3">{role.id}</td>
                <td className="p-3 capitalize">{role.name}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2 flex-wrap">
                    <button
                      onClick={() => onEdit(role)}
                      className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded p-2"
                      title="Editar"
                      aria-label={`Editar rol ${role.name}`}
                    >
                      <Pencil size={18} aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("¿Seguro que quieres eliminar este rol?")) {
                          onDelete(role.id);
                        }
                      }}
                      className="bg-red-100 hover:bg-red-200 text-red-600 rounded p-2"
                      title="Eliminar"
                      aria-label={`Eliminar rol ${role.name}`}
                    >
                      <Trash2 size={18} aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">
                No hay roles registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
