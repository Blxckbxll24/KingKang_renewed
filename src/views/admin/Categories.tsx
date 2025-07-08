import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/categoriesService";
import type { CategoryKing } from "../../types/categories";
import CategorieTable from "../../components/admin/categories/CategorieTable";
import Sidebar from "../../components/layout/Sidebar";

export default function Categories() {
  const [categories, setCategories] = useState<CategoryKing[]>([]);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch((err) => console.error("Error cargando categorías:", err));
  }, []);

  const handleEdit = (cat: CategoryKing) => {
    console.log("Editar", cat);
  };

  const handleDelete = (id: string) => {
    console.log("Eliminar", id);
  };

  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Categorías</h1>
        <CategorieTable
          categories={categories}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}
