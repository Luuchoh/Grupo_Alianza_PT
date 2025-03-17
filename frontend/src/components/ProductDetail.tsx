import { useProduct } from "@api/queries";
import { useParams } from "react-router"
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const ProductDetail= () => {

  let params = useParams();
  let id = params.id;
  
  const { data: product, isLoading, isError } = useProduct(Number(id));

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage title="Bad Request" description="Error al cargar productos" />;

  const {name, description, price, stock} = product;


  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-xs">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Nombre </dt>
          <dd className="text-gray-700 sm:col-span-2">{name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Descripcion </dt>
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
      </dl>
    </div>
  )
}

export default ProductDetail