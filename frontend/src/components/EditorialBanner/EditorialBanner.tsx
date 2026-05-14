import './EditorialBanner.css'

import bannerImage from '../../assets/images/banners/editorial-banner.jpg'

export default function EditorialBanner() {
  return (
    <section className="editorial-banner">
      <div className="editorial-banner-image">
        <img src={bannerImage} alt="Summer Collection" />
      </div>

      <div className="editorial-banner-overlay" />

      <div className="editorial-banner-content">
        <span>Summer 2026</span>

        <h2>Designed for everyday movement</h2>

        <a href="/">Explorar coleção</a>
      </div>
    </section>
  )
}