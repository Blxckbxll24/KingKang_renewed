import { useEffect, useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import CategorieForm from "../../components/admin/categories/CategorieForm";
import CategorieTable from "../../components/admin/categories/CategorieTable";
import { PlusCircle } from "lucide-react";
import { useCategoriesStore } from "../../store/categoryStore";
import type { Category } from "../../types/categories";

export default function Categories() {
  const {
    categories,
    loading,
    error,
    loadCategories,
    addCategory,
    editCategory,
    removeCategory,
  } = useCategoriesStore();

  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleAdd = () => {
    setSelectedCategory(undefined);
    setShowForm(true);
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await removeCategory(id);
  };

  const handleSubmit = async (name: string) => {
    if (selectedCategory?.id) {
      await editCategory(selectedCategory.id, name);
    } else {
      await addCategory(name);
    }
    setShowForm(false);
    setSelectedCategory(undefined);
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

        {error && <p className="text-red-500">{error}</p>}

        {showForm && (
          <CategorieForm
            initialData={selectedCategory}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false);
              setSelectedCategory(undefined);
            }}
          />
        )}

        <CategorieTable
          categories={categories}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {loading && <p className="text-center text-gray-500 mt-4">Cargando categorías...</p>}
      </main>
    </div>
  );
}
