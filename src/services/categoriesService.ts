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
