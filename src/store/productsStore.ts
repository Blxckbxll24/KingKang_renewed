// src/store/productsStore.ts
import { create } from 'zustand';
import type { Products } from '../types/products';

interface ProductsState {
  products: Products[];
  loading: boolean;
  setProducts: (products: Products[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  loading: true,
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
}));
