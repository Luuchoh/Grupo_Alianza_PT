import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "./axiosInstance";

// Hook para crear un producto y resetea la cache
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: Product) => axiosInstance.post("/producto", newProduct),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};

// Hook para editar un producto y resetea la cache
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedProduct: Product) =>
      axiosInstance.put(`/producto/${updatedProduct.id}`, updatedProduct),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};

// Hook para eliminar un producto y resetea la cache
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axiosInstance.delete(`/producto/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};