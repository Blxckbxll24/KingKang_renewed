import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import UserForm from "../../components/admin/users/UserForm";
import UserTable from "../../components/admin/users/UserTable";
import { PlusCircle } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "admin" },
    { id: 2, name: "Laura Gómez", email: "laura@example.com", role: "editor" },
  ]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    const confirm = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (confirm) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleSubmit = (user: User) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      const newUser = { ...user, id: Date.now() };
      setUsers([...users, newUser]);
    }
    setShowForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 pt-16 px-8 overflow-y-auto">


        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Gestión de usuarios</h2>
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
            user={selectedUser}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}

        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
}
