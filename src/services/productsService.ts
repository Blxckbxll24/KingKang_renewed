import apiService from './apiService';
import type { Product, CreateProductInput } from '../types/products';

export async function fetchProducts(): Promise<Product[]> {
  const response = await apiService.get<Product[]>('/products');
  return response.data;
}

export async function createProduct(data: CreateProductInput): Promise<Product> {
  const response = await apiService.post<Product>('/products', data);
  return response.data;
}

export async function updateProduct(id: number, data: Partial<CreateProductInput>): Promise<Product> {
  const response = await apiService.patch<Product>(`/products/${id}`, data);
  return response.data;
}

export async function deleteProduct(id: number): Promise<void> {
  await apiService.delete(`/products/${id}`);
}
