import { useQuery } from "@tanstack/react-query";

import axiosInstance from "./axiosInstance";

// Obtener todos los productos
const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get("producto");
  return data;
};

// Hook para obtener productos
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

// Obtener todos los productos
const getOneProduct = async (id: number): Promise<Product[]> => {
  const { data } = await axiosInstance.get(`producto/${id}`);
  return data;
};

// Hook para obtener un producto por ID
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getOneProduct(id),
    enabled: !!id, 
  });
};