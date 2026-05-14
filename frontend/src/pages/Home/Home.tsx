import './Home.css'

import Hero from '../../components/Hero/Hero'
import CategoryStrip from '../../components/CategoryStrip/CategoryStrip'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import EditorialBanner from '../../components/EditorialBanner/EditorialBanner'
import Benefits from '../../components/Benefits/Benefits'
import Newsletter from '../../components/Newsletter/Newsletter'

export default function Home() {
  return (
    <main className="home">
      <Hero />

      <CategoryStrip />

      <FeaturedProducts />

      <EditorialBanner />

      <Benefits />

      <Newsletter />
    </main>
  )
}