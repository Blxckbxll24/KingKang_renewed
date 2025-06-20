import axios from "axios";

const API_URL = "http://localhost:8000/logs"; // ajusta si es necesario

// GET de Logs
export async function fetchLogs() {
  try {
    const response = await axios.get(API_URL);
    return response.data; // se espera que sea un array de strings
  } catch (error) {
    console.error("Error obteniendo logs:", error);
    throw error;
  }
}
