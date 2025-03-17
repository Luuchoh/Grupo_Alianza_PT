import { useParams } from "react-router"

import LayoutBase from "@layouts/LayoutBase"
import ProductForm from "@components/ProductForm"
import Loading from "@components/Loading";
import ErrorMessage from "@components/ErrorMessage";

import { useProduct } from "@api/queries";

/**
 * Componente que envuelve toda la pagina formulario de creacion o edicion
 * 
 * @returns pagina 
 */

const FormProduct = () => {

  let params = useParams();
  let id = Number(params.id);

  // Valida que no hayan parametros ID y retorna el formulario de creacion
  if (!id) {
    return (
      <LayoutBase>
        <ProductForm key={'new'}/>
      </LayoutBase>
    )
  }

  const { data: product, isLoading, isError } = useProduct(id);

  // Pagina que se muestra mientras carga la info
  if (isLoading) return <Loading />;
  // Pagina que se muestra si hay un error en la peticion
  if (isError) return <ErrorMessage title="Bad Request" description="Error al cargar productos" />;

  // Retorna formulario de edicion
  return (
    <LayoutBase>
      <ProductForm key={id} id={id} product={product} />
    </LayoutBase>
  )

}

export default FormProduct
