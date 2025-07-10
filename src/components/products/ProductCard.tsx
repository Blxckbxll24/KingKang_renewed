import type { Product } from "../../types/products";

type Props = {
  item: Product;
};

const ProductCard = ({ item }: Props) => {
  const handleAddToCart = () => {
    console.log(`Producto ${item.name} agregado al carrito`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-gray-500 text-lg">Sin imagen</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <p className="text-red-500 font-bold mb-4">${item.price}</p>

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
