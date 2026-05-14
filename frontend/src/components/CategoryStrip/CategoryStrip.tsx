import './CategoryStrip.css'

import product1 from '../../assets/images/product/product-1.jpg'
import product2 from '../../assets/images/product/product-2.jpg'
import product3 from '../../assets/images/product/product-3.jpg'
import product4 from '../../assets/images/product/product-4.jpg'
import product5 from '../../assets/images/product/product-5.jpg'
import product6 from '../../assets/images/product/product-6.jpg'

const categories = [
  {
    title: 'Oversized',
    image: product1,
  },
  {
    title: 'Linho',
    image: product2,
  },
  {
    title: 'Shorts',
    image: product3,
  },
  {
    title: 'Essentials',
    image: product4,
  },
  {
    title: 'Summer',
    image: product5,
  },
  {
    title: 'Streetwear',
    image: product6,
  },
]

export default function CategoryStrip() {
  return (
    <section className="category-strip">
      <div className="category-strip-container">
        {categories.map((category) => (
          <a href="/" className="category-item" key={category.title}>
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>

            <span>{category.title}</span>
          </a>
        ))}
      </div>
    </section>
  )
}