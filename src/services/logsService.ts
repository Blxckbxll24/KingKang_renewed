import apiService from "./apiService";

// GET de Logs
export async function fetchLogs(): Promise<string[]> {
  try {
    const response = await apiService.get<string[]>("/logs");
    return response.data; 
  } catch (error) {
    console.error("Error obteniendo logs:", error);
    throw error;
  }
}
