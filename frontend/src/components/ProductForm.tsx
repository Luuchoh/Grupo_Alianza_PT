import { useCreateProduct, useUpdateProduct } from '@api/mutations';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

interface ProductFormInterface {
  id?: number;
  product?: Product;
}

const ProductForm: React.FC<ProductFormInterface> = (props) => {

  const { id, product = { id: null, name: "", description: "", price: 0, stock: 0 } } = props
  const navigate = useNavigate();

  const createProductMutation = useCreateProduct();
  const updateProductMutation = useUpdateProduct();

  const [newProduct, setNewProduct] = useState<Product>(product);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(id)) {
      updateProductMutation.mutate(newProduct);
    } else {
      createProductMutation.mutate(newProduct);
    }

    navigate("/")

  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full grid gap-6">
      <div className="col-span-10">
        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>

        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
      </div>

      <div className="col-span-10">
        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
          Descripcion
        </label>

        <input
          type="text"
          id="description"
          name="description"
          className="mt-1 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
      </div>

      <div className="col-span-10">
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Precio Unitario </label>

        <input
          type="number"
          id="price"
          name="price"
          className="mt-1 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
      </div>

      <div className="col-span-10">
        <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Stock </label>

        <input
          type="number"
          id="stock"
          name="stock"
          className="mt-1 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
        />
      </div>

      <div className="col-span-10 sm:flex sm:items-center sm:gap-4">
        <button
          type='submit'
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
        >
          Crear
        </button>
      </div>
    </form>
  )
}

export default ProductForm