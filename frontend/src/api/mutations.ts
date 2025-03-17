import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: Product) => axiosInstance.post("/producto", newProduct),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};


export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedProduct: Product) =>
      axiosInstance.put(`/producto/${updatedProduct.id}`, updatedProduct),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};
