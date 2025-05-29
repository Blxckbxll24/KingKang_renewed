const ProductCard = ({ item }) => {
  const handleAddToCart = () => {
    
    console.log(`Producto ${item} agregado al carrito`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-lg">Imagen {item}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Producto {item}</h3>
        <p className="text-gray-600 mb-4">
          Breve descripción del producto {item}. Ideal para quienes buscan calidad y diseño.
        </p>
<img
  src="/Carrito.png"
  alt="Agregar al carrito"
  className="cursor-pointer w-10 bg-red-400 p-1 rounded-3xl "
  onClick={handleAddToCart}
/>

      </div>
    </div>
  );
};

export default ProductCard;
