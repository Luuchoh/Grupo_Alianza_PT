import { useProducts } from "../api/queries";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

/**
 * Componente que lista los productos con ayuda de productCard
 * 
 * @returns componente 
 */

const ProductList = () => {
  const { data: products, isLoading, isError } = useProducts();

  // Pagina que se muestra mientras carga la info
  if (isLoading) return <Loading />;
  // Pagina que se muestra si hay un error en la peticion
  if (isError) return <ErrorMessage title="Bad Request" description="Error al cargar productos" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;