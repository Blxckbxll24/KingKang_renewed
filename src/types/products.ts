// Para hacer peticiones como GET a la api
export type Product = {
  id: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  image: string;
  categoryId: number;
  category: {
    id: number;
    name: string;
  };
};

// Para crear un producto
export type CreateProductInput = {
  name: string;
  description: string;
  stock: number;
  price: number;
  image: string;
  categoryId: number;
};
