import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

// Obtener todos los productos
const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get("/api/productos");
  return data;
};

// Hook de React Query para obtener productos
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

// Obtener todos los productos
const getOneProduct = async (id: number): Promise<Product[]> => {
  const { data } = await axiosInstance.get(`/api/productos/${id}`);
  return data;
};

// Obtener un producto por ID
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getOneProduct(id),
    enabled: !!id, 
  });
};