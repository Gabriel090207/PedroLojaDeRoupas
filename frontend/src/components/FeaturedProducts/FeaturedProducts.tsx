import './FeaturedProducts.css'

import product1 from '../../assets/images/product/product-1.jpg'
import product2 from '../../assets/images/product/product-2.jpg'
import product3 from '../../assets/images/product/product-3.jpg'
import product6 from '../../assets/images/product/product-6.jpg'

const products = [
  {
    name: 'Camiseta Oversized',
    category: 'Essencial de Verão',
    price: 'R$ 189,90',
    image: product1,
  },
  {
    name: 'Conjunto Linho',
    category: 'Coleção Minimalista',
    price: 'R$ 239,90',
    image: product2,
  },
  {
    name: 'Short Relaxed',
    category: 'Streetwear',
    price: 'R$ 159,90',
    image: product3,
  },
  {
    name: 'Jaqueta Windbreaker',
    category: 'Urban Summer',
    price: 'R$ 329,90',
    image: product6,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="featured-products-header">
        <span>Coleção em destaque</span>

        <h2>Peças minimalistas para o dia a dia</h2>
      </div>

      <div className="featured-products-grid">
        {products.map((product) => (
          <a href="/" className="featured-product-card" key={product.name}>
            <div className="featured-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="featured-product-info">
              <h3>{product.name}</h3>

              <span>{product.category}</span>

              <strong>{product.price}</strong>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}