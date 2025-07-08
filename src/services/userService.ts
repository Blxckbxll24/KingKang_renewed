import apiService from "./apiService";
import type { User } from "../types/users"; 

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await apiService.get<User[]>("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function createUser(userData: Partial<User>): Promise<User> {
  try {
    const response = await apiService.post<User>("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function updateUser(id: number, userData: Partial<User>): Promise<User> {
  try {
    const response = await apiService.patch<User>(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

export async function deleteUser(id: number): Promise<void> {
  try {
    await apiService.delete(`/users/${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
