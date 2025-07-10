// pages/admin/Users.tsx
import { useState, useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import UserForm from "../../components/admin/users/UserForm";
import UserTable from "../../components/admin/users/UserTable";
import { PlusCircle } from "lucide-react";
import { fetchUsers, createUser, updateUser, deleteUser } from "../../services/userService";
import { fetchRoles } from "../../services/roleService"; // necesitas cargar roles para el form

import type { User } from "../../types/users";
import type { Role } from "../../types/roles";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((e) => console.error("Error cargando usuarios:", e));
    fetchRoles()
      .then(setRoles)
      .catch((e) => console.error("Error cargando roles:", e));
  }, []);

  const handleAdd = () => {
    setSelectedUser(undefined);
    setShowForm(true);
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Error eliminando usuario:", error);
    }
  };

  const handleSubmit = async (userData: Omit<User, "id" | "role"> & { roleId: number }) => {
    if (selectedUser?.id) {
      try {
        const updated = await updateUser(selectedUser.id, userData);
        setUsers(users.map((u) => (u.id === selectedUser.id ? updated : u)));
      } catch (error) {
        console.error("Error actualizando usuario:", error);
      }
    } else {
      try {
        const newUser = await createUser(userData);
        setUsers([...users, newUser]);
      } catch (error) {
        console.error("Error creando usuario:", error);
      }
    }
    setShowForm(false);
    setSelectedUser(undefined);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 pt-16 px-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Gestión de Usuarios</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <PlusCircle size={20} />
            Agregar usuario
          </button>
        </div>

        {showForm && (
          <UserForm
            initialData={selectedUser}
            roles={roles}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false);
              setSelectedUser(undefined);
            }}
          />
        )}

        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
}
