import ProductList from "@components/ProductList"
import LayoutBase from "@layouts/LayoutBase"

/**
 * Componente que envuelve toda la pagina de inicio 
 * 
 * @returns pagina 
 */

const Home = () => {
  return (
    <LayoutBase>
      <ProductList />
    </LayoutBase>
  )
}

export default Home