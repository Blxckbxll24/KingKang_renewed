import { create } from "zustand";
import { fetchCategories, createCategory, updateCategory, deleteCategory } from "../services/categoriesService";
import type { Category } from "../types/categories";

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  loadCategories: () => Promise<void>;
  addCategory: (name: string) => Promise<void>;
  editCategory: (id: string, name: string) => Promise<void>;
  removeCategory: (id: string) => Promise<void>;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  loading: false,
  error: null,

  loadCategories: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchCategories();
      set({ categories: data });
    } catch (err) {
      set({ error: "Error al cargar las categorías" });
    } finally {
      set({ loading: false });
    }
  },

  addCategory: async (name) => {
    set({ loading: true, error: null });
    try {
      const newCategory = await createCategory({ name });
      set((state) => ({
        categories: [...state.categories, newCategory],
      }));
    } catch (err) {
      set({ error: "Error al crear la categoría" });
    } finally {
      set({ loading: false });
    }
  },

  editCategory: async (id, name) => {
    set({ loading: true, error: null });
    try {
      const updated = await updateCategory(Number(id), { name });
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat.id === id ? updated : cat
        ),
      }));
    } catch (err) {
      set({ error: "Error al actualizar la categoría" });
    } finally {
      set({ loading: false });
    }
  },

  removeCategory: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteCategory(Number(id));
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== id),
      }));
    } catch (err) {
      set({ error: "Error al eliminar la categoría" });
    } finally {
      set({ loading: false });
    }
  },
}));
