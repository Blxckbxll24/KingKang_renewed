import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import ProductForm from "../../components/admin/products/ProductForm";
import ProductTable from "../../components/admin/products/ProductTable";
import { PlusCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Agua", price: 12.5, category: "Bebidas" },
    { id: 2, name: "Papas", price: 18.0, category: "Snacks" },
  ]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setSelectedProduct(undefined);
    setShowForm(true);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleSubmit = (product: Product) => {
    if (product.id) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    } else {
      const newProduct = { ...product, id: Date.now() };
      setProducts([...products, newProduct]);
    }
    setShowForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 pt-16 px-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Gestión de Productos</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <PlusCircle size={20} />
            Agregar producto
          </button>
        </div>

        {showForm && (
          <ProductForm
            product={selectedProduct}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}

        <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
}
