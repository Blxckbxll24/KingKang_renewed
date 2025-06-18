type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen?: string;
  categoria: string;
};

type Props = {
  item: Producto;
};

const ProductCard = ({ item }: Props) => {
  const handleAddToCart = () => {
    console.log(`Producto ${item.nombre} agregado al carrito`);
  };

  return (
    <div className="bg-white rounded-lg  shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 flex w-65 items-center justify-center">
        {item.imagen ? (
          <img
            src={item.imagen}
            alt={item.nombre}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-gray-500 text-lg">Sin imagen</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.nombre}</h3>
        <p className="text-gray-600 mb-4">{item.descripcion}</p>

        <img
          src="/Carrito.png"
          alt="Agregar al carrito"
          className="cursor-pointer w-10 bg-red-400 p-1 rounded-3xl"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
