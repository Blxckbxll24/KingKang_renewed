import { useState, useEffect } from "react";
import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/categoriesService";
import Sidebar from "../../components/layout/Sidebar";
import CategorieForm from "../../components/admin/categories/CategorieForm";
import CategorieTable from "../../components/admin/categories/CategorieTable";
import { PlusCircle } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error cargando categorías:", err));
  }, []);

  const handleAdd = () => {
    setSelectedCategory(undefined);
    setShowForm(true);
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);
      setCategories(categories.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error eliminando categoría:", error);
    }
  };

  const handleSubmit = async (name: string) => {
    if (selectedCategory?.id) {
      // Actualizar categoría existente
      try {
        const updated = await updateCategory(selectedCategory.id, { name });
        console.log("Respuesta actualización:", updated);
        setCategories(categories.map((c) => (c.id === updated.id ? updated : c)));
      } catch (error) {
        console.error("Error actualizando categoría:", error);
      }
    } else {
      // Crear nueva categoría
      try {
        const newCategory = await createCategory({ name });
        console.log("Respuesta creación:", newCategory);

        // Si la respuesta es un número (id), crea el objeto
        const newCategoryObj =
          typeof newCategory === "number" ? { id: newCategory, name } : newCategory;

        setCategories([...categories, newCategoryObj]);
      } catch (error) {
        console.error("Error creando categoría:", error);
      }
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
      </main>
    </div>
  );
}
