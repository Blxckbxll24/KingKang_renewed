import { Pencil, Trash2 } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: number) => void;
}

export default function CategorieTable({ categories, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[500px]">
        <thead className="bg-blue-100 text-blue-800">
          <tr className="border-b">
            <th className="p-3">ID</th>
            <th className="p-3">Nombre de categoría</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <tr key={cat.id} className="border-b hover:bg-gray-50 even:bg-gray-50">
                <td className="p-3">{cat.id}</td>
                <td className="p-3 capitalize">{cat.name}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(cat)}
                      className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded p-2"
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("¿Eliminar esta categoría?")) {
                          onDelete(cat.id);
                        }
                      }}
                      className="bg-red-100 hover:bg-red-200 text-red-600 rounded p-2"
                      title="Eliminar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">
                No hay categorías registradas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
