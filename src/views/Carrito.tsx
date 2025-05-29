import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useState } from "react";

interface ProductoCarrito {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}

export default function Carrito() {
  const [productos, setProductos] = useState<ProductoCarrito[]>([
    {
      id: 1,
      nombre: "Playera KingKang Negra",
      precio: 299,
      cantidad: 2,
      imagen: "/Camisa.jpg",
    },
    {
      id: 2,
      nombre: "Gorra Roja KingKang",
      precio: 199,
      cantidad: 1,
      imagen: "/Camisa.jpg",
    },
  ]);

  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const actualizarCantidad = (id: number, nuevaCantidad: number) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: nuevaCantidad } : p
      )
    );
  };

  const eliminarProducto = (id: number) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Header />

      <main className="flex-grow py-12 px-4 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-red-600 mb-10 text-center">Mi carrito</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Productos */}
          <div className="lg:col-span-2 space-y-6">
            {productos.length === 0 ? (
              <p className="text-center text-gray-600">Tu carrito está vacío.</p>
            ) : (
              productos.map((producto) => (
                <div
                  key={producto.id}
                  className="flex items-center bg-white p-4 rounded-xl shadow-md gap-4"
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="h-24 w-24 object-cover rounded-lg border"
                  />
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">{producto.nombre}</h3>
                    <p className="text-gray-500">${producto.precio} MXN</p>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-sm">Cantidad:</label>
                      <input
                        type="number"
                        value={producto.cantidad}
                        min={1}
                        className="w-16 border rounded-lg px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-red-500"
                        onChange={(e) =>
                          actualizarCantidad(
                            producto.id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="text-red-500 hover:text-red-700 font-semibold text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Resumen */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-red-600">Resumen</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)} MXN</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Envío</span>
              <span>$99.00 MXN</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(total + 99).toFixed(2)} MXN</span>
            </div>

            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full font-semibold transition">
              Continuar al pago
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
