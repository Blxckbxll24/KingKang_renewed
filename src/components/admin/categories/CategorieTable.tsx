import { Pencil, Trash2 } from "lucide-react";
import type { Category } from "../../../types/categories";

interface CategorieTableProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: number) => void;
}

export default function CategorieTable({
  categories,
  onEdit,
  onDelete,
}: CategorieTableProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-blue-100 text-blue-800">
          <tr className="border-b">
            <th className="p-3">Nombre de la categoría</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <tr key={category.id} className="border-b hover:bg-gray-50 even:bg-gray-50">
                <td className="p-3 capitalize">{category.name}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2 flex-wrap">
                    <button
                      onClick={() => onEdit(category)}
                      className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded p-2"
                      title="Editar"
                      aria-label={`Editar categoría ${category.name}`}
                    >
                      <Pencil size={18} aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "¿Seguro que quieres eliminar esta categoría?"
                          )
                        ) {
                          onDelete(category.id);
                        }
                      }}
                      className="bg-red-100 hover:bg-red-200 text-red-600 rounded p-2"
                      title="Eliminar"
                      aria-label={`Eliminar categoría ${category.name}`}
                    >
                      <Trash2 size={18} aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="p-4 text-center text-gray-500">
                No hay categorías registradas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
