import { useState, useEffect } from "react";

interface Props {
  initialData?: { id: number; name: string };
  onSubmit: (name: string) => void;
  onCancel: () => void;
}

export default function CategorieForm({ initialData, onSubmit, onCancel }: Props) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (initialData) setName(initialData.name);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return alert("El nombre no puede estar vacío");
    onSubmit(name.trim());
    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-lg font-semibold text-gray-700">
        {initialData ? "Editar Categoría" : "Agregar Categoría"}
      </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la categoría"
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
