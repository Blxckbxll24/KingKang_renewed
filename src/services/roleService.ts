import axios from "axios";

const API_URL = "http://localhost:8000/roles"; 


//GET de Roles
export async function fetchRoles() {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
}

//POST de Roles
export async function createRole(roleData: { name: string }) {
  try {
    const response = await axios.post(API_URL, roleData);
    return response.data; 
  } catch (error) {
    console.error("Error creando rol:", error);
    throw error;
  }
}

//DELETE de Roles
export async function deleteRole(id: number) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error eliminando rol:", error);
    throw error;
  }
}

//UPDATE de Roles
export async function updateRole(id: number, roleData: { name: string }) {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, roleData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando rol:", error);
    throw error;
  }
}
