import LayoutBase from '@layouts/LayoutBase'
import ProductDetail from '@components/ProductDetail'

/**
 * Componente que envuelve toda la pagina detalle
 * 
 * @returns pagina 
 */

const Product = () => {

  return (
    <LayoutBase>
      <ProductDetail />
    </LayoutBase>
  )
}

export default Product