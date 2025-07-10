import { useState, useEffect } from "react";
import { fetchRoles, createRole, deleteRole, updateRole } from "../../services/roleService";
import Sidebar from "../../components/layout/Sidebar";
import RoleForm from "../../components/admin/roles/RoleForm";
import RoleTable from "../../components/admin/roles/RoleTable";
import { PlusCircle } from "lucide-react";

interface Role {
  id: number;
  name: string;
}

export default function Roles() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchRoles()
      .then((rolesData) => setRoles(rolesData))
      .catch((error) => {
        console.error("Error cargando roles:", error);
      });
  }, []);

  const handleAdd = () => {
    setSelectedRole(undefined);
    setShowForm(true);
  };

  const handleEdit = (role: Role) => {
    setSelectedRole(role);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteRole(id);
      setRoles(roles.filter((r) => r.id !== id));
    } catch (error) {
      console.error("Error al eliminar el rol:", error);
    }
  };

  const handleSubmit = async (name: string) => {
    if (selectedRole?.id) {
      // Actualizar rol existente
      try {
        const updatedRole = await updateRole(selectedRole.id, { name });
        setRoles(roles.map((r) => (r.id === selectedRole.id ? updatedRole : r)));
      } catch (error) {
        console.error("Error al actualizar el rol:", error);
      }
    } else {
      // Crear nuevo rol
      try {
        const newRole = await createRole({ name });
        setRoles([...roles, newRole]);
      } catch (error) {
        console.error("Error al crear el rol:", error);
      }
    }
    setShowForm(false);
    setSelectedRole(undefined);
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
            roleName={selectedRole?.name}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false);
              setSelectedRole(undefined);
            }}
          />
        )}

        <RoleTable roles={roles} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
}
