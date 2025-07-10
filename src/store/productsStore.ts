import { create } from 'zustand';
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productsService';
import type { Product, CreateProductInput } from '../types/products';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  loadProducts: () => Promise<void>;
  addProduct: (product: CreateProductInput) => Promise<void>;
  editProduct: (id: number, product: Partial<CreateProductInput>) => Promise<void>;
  removeProduct: (id: number) => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  loading: false,
  error: null,

  loadProducts: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchProducts();
      set({ products: data });
    } catch (err) {
      set({ error: 'Error al cargar los productos' });
    } finally {
      set({ loading: false });
    }
  },

  addProduct: async (product) => {
    set({ loading: true, error: null });
    try {
      const newProduct = await createProduct(product);
      set((state) => ({
        products: [...state.products, newProduct],
      }));
    } catch (err) {
      set({ error: 'Error al crear el producto' });
    } finally {
      set({ loading: false });
    }
  },

  editProduct: async (id, product) => {
    set({ loading: true, error: null });
    try {
      const updated = await updateProduct(id, product);
      set((state) => ({
        products: state.products.map((prod) =>
          prod.id === updated.id ? updated : prod
        ),
      }));
    } catch (err) {
      set({ error: 'Error al editar el producto' });
    } finally {
      set({ loading: false });
    }
  },

  removeProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteProduct(id);
      set((state) => ({
        products: state.products.filter((prod) => prod.id !== id),
      }));
    } catch (err) {
      set({ error: 'Error al eliminar el producto' });
    } finally {
      set({ loading: false });
    }
  },
}));
