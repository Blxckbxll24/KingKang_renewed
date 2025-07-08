import apiService from "./apiService";
import type { CategoryKing } from "../types/categories";

export async function fetchCategories(): Promise<CategoryKing[]> {
  try {
    const response = await apiService.get<CategoryKing[]>("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function createCategory(data: { name: string }): Promise<CategoryKing> {
  try {
    const response = await apiService.post<CategoryKing>("/categories", data);
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
}

export async function updateCategory(id: number, data: { name: string }): Promise<CategoryKing> {
  try {
    const response = await apiService.patch<CategoryKing>(`/categories/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
}

export async function deleteCategory(id: number): Promise<void> {
  try {
    await apiService.delete(`/categories/${id}`);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
}
