import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import CategorieForm from "../../components/admin/categories/CategorieForm";
import CategorieTable from "../../components/admin/categories/CategorieTable";
import { PlusCircle } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Bebidas" },
    { id: 2, name: "Snacks" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setSelectedCategory(undefined);
    setShowForm(true);
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  const handleSubmit = (category: Category) => {
    if (category.id) {
      setCategories(categories.map((c) => (c.id === category.id ? category : c)));
    } else {
      const newCategory = { ...category, id: Date.now() };
      setCategories([...categories, newCategory]);
    }
    setShowForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 pt-16 px-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Gestión de Categorías</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <PlusCircle size={20} />
            Agregar categoría
          </button>
        </div>

        {showForm && (
          <CategorieForm
            category={selectedCategory}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}

        <CategorieTable categories={categories} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
}
