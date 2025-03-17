import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ModalWarning from "./ModalWarning";

import { useProduct } from "@api/queries";
import { useDeleteProduct } from "@api/mutations";

const ProductDetail = () => {
  let params = useParams();
  let id = params.id;
  
  const { data: product, isLoading, isError } = useProduct(Number(id));
  const deleteProductMutation = useDeleteProduct();
  const navigate = useNavigate();

  const [Modal, setModal] = useState<boolean>(false);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage title="Bad Request" description="Error al cargar productos" />;

  const {name, description, price, stock} = product;

  const handleModal = () => {
    setModal(!Modal)
  }

  const confirmDelete = () => {
    deleteProductMutation.mutate(Number(id))
    navigate("/")
  }

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-xs">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Nombre </dt>
          <dd className="text-gray-700 sm:col-span-2">{name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Descripción </dt>
          <dd className="text-gray-700 sm:col-span-2">{description}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Precio Unitario</dt>
          <dd className="text-gray-700 sm:col-span-2">${price}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Unidades Disponibles</dt>
          <dd className="text-gray-700 sm:col-span-2">{stock} unidades</dd>
        </div>
        
        <div className="flex justify-end gap-2 p-3">
          <Link 
            to={`/edit-product/${id}`} 
            className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Editar
          </Link>
          
          <button
            onClick={handleModal}
            className="inline-flex items-center gap-1 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Eliminar
          </button>
        </div>
      </dl>
      {Modal && <ModalWarning handleConfirm={confirmDelete} handleCancel={handleModal}/>} 
    </div>
  );
};

export default ProductDetail;