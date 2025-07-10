
import type { Products } from '../types/products';
import apiService from './apiService';

export async function fetchProducts(): Promise<Products[]> {
  try {
    const response = await apiService.get<Products[]>('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}