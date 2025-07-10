export type Products = {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  imageUrl: string;
  categoryId: {
    id: number;
    name: string;
  };
};