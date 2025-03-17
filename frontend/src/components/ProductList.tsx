import { useProducts } from "../api/queries";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <Loading />;
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