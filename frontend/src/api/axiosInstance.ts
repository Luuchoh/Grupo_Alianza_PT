import axios from "axios";

/**
 * Instacia reutilizable de axios para peticion http
 */
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER}api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;