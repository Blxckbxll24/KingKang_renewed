import apiService from "./apiService";
import type { Category } from "../types/categories";

export async function fetchCategories(): Promise<Category[]> {
  const response = await apiService.get<Category[]>("/categories");
  return response.data;
}

export async function createCategory(data: { name: string }): Promise<Category> {
  const response = await apiService.post<Category>("/categories", data);
  return response.data;
}

export async function updateCategory(id: number, data: { name: string }): Promise<Category> {
  const response = await apiService.patch<Category>(`/categories/${id}`, data);
  return response.data;
}

export async function deleteCategory(id: number): Promise<void> {
  await apiService.delete(`/categories/${id}`);
}
