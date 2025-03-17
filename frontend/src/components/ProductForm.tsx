import React from 'react'
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useCreateProduct, useUpdateProduct } from '@api/mutations';

interface ProductFormInterface {
  id?: number;
  product?: Product;
}

/**
 * Esquema de validaciones de productos (se puede separar)
 */
const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nombre demasiado corto')
    .max(50, 'Nombre demasiado largo')
    .required('Nombre es requerido'),
  description: Yup.string()
    .min(5, 'Descripción demasiado corta')
    .max(500, 'Descripción demasiado larga')
    .required('Descripción es requerida'),
  price: Yup.number()
    .positive('El precio debe ser positivo')
    .required('Precio es requerido'),
  stock: Yup.number()
    .integer('El stock debe ser un número entero')
    .min(0, 'El stock no puede ser negativo')
    .required('Stock es requerido')
});

/**
 * Componente que muestra un formulario de creacion o edicion dependiendo los parametros
 * 
 * @param { ProductFormInterface } props - propiedades del componente
 * @param { number } props.id - ID del producto
 * @param { Product } props.product - Objeto con la informacion del producto
 * @returns componente 
 */
const ProductForm: React.FC<ProductFormInterface> = (props) => {

  const { id, product = { id: null, name: "", description: "", price: 0, stock: 0 } } = props
  const navigate = useNavigate();

  const createProductMutation = useCreateProduct();
  const updateProductMutation = useUpdateProduct();

  /**
   * Creacion de formulario
   * inicializando valores
   * integrando el esquema de validaciones
   * funcion que ejecutara el formulario
   */
  const formik = useFormik({
    initialValues: product,
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      if (Number(id)) {
        updateProductMutation.mutate(values);
      } else {
        createProductMutation.mutate(values);
      }

      navigate("/");
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-8 w-full grid gap-6">
      <div className="col-span-10">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>

        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 w-full rounded-md border border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
        )}
      </div>

      <div className="col-span-10">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Descripcion
        </label>

        <input
          type="text"
          id="description"
          name="description"
          className="mt-1 w-full rounded-md border border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        {formik.touched.description && formik.errors.description && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.description}</div>
        )}
      </div>

      <div className="col-span-10">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700"> Precio Unitario </label>

        <input
          type="number"
          id="price"
          name="price"
          className="mt-1 w-full rounded-md border border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={formik.values.price}
          onChange={formik.handleChange}
        />

        {formik.touched.price && formik.errors.price && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.price}</div>
        )}
      </div>

      <div className="col-span-10">
        <label htmlFor="stock" className="block text-sm font-medium text-gray-700"> Stock </label>

        <input
          type="number"
          id="stock"
          name="stock"
          className="mt-1 w-full rounded-md border border-gray bg-white text-sm text-gray-700 shadow-xs p-2"
          value={formik.values.stock}
          onChange={formik.handleChange}
        />

        {formik.touched.stock && formik.errors.stock && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.stock}</div>
        )}
      </div>

      <div className="col-span-10 sm:flex sm:items-center sm:gap-4">
        <button
          type='submit'
          className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          {Number(id) ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  )
}

export default ProductForm