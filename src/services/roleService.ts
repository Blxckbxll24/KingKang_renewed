import apiService from "./apiService";
import type { Role } from "../types/roles";  

const BASE_PATH = "/roles";

export async function fetchRoles(): Promise<Role[]> {
  try {
    const response = await apiService.get<Role[]>(BASE_PATH);
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
}

export async function createRole(roleData: { name: string }): Promise<Role> {
  try {
    const response = await apiService.post<Role>(BASE_PATH, roleData);
    return response.data;
  } catch (error) {
    console.error("Error creating role:", error);
    throw error;
  }
}

export async function deleteRole(id: number): Promise<void> {
  try {
    await apiService.delete(`${BASE_PATH}/${id}`);
  } catch (error) {
    console.error("Error deleting role:", error);
    throw error;
  }
}

export async function updateRole(id: number, roleData: { name: string }): Promise<Role> {
  try {
    const response = await apiService.patch<Role>(`${BASE_PATH}/${id}`, roleData);
    return response.data;
  } catch (error) {
    console.error("Error updating role:", error);
    throw error;
  }
}
