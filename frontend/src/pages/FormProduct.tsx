import { useParams } from "react-router"

import LayoutBase from "@layouts/LayoutBase"
import ProductForm from "@components/ProductForm"
import Loading from "@components/Loading";
import ErrorMessage from "@components/ErrorMessage";

import { useProduct } from "@api/queries";

const FormProduct = () => {

  let params = useParams();
  let id = Number(params.id);

  if (!id) {
    return (
      <LayoutBase>
        <ProductForm />
      </LayoutBase>
    )
  }

  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage title="Bad Request" description="Error al cargar productos" />;

  return (
    <LayoutBase>
      <ProductForm id={id} product={product}/>
    </LayoutBase>
  )

}

export default FormProduct
