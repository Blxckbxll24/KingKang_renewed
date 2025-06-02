import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import RoleForm from "../../components/admin/roles/RoleForm";
import RoleTable from "../../components/admin/roles/RoleTable";
import { PlusCircle } from "lucide-react";

interface Role {
  id: number;
  name: string;
}

export default function Roles() {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: "Administrador" },
    { id: 2, name: "Editor" },
  ]);
  const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setSelectedRole(undefined);
    setShowForm(true);
  };

  const handleEdit = (role: Role) => {
    setSelectedRole(role);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setRoles(roles.filter((r) => r.id !== id));
  };

  const handleSubmit = (role: Role) => {
    if (role.id) {
      setRoles(roles.map((r) => (r.id === role.id ? role : r)));
    } else {
      const newRole = { ...role, id: Date.now() };
      setRoles([...roles, newRole]);
    }
    setShowForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 pt-16 px-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Gestión de Roles</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <PlusCircle size={20} />
            Agregar rol
          </button>
        </div>

        {showForm && (
          <RoleForm
            role={selectedRole}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}

        <RoleTable roles={roles} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
}
