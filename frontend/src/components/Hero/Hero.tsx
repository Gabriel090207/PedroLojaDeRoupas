import './Hero.css'

import heroImage from '../../assets/images/hero/hero-main.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Fashion Hero" className="hero-image" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span>NEW COLLECTION</span>

        <h1>
          Streetwear &
          <br />
          Summer Essentials
        </h1>

        <button>Explorar coleção</button>
      </div>
    </section>
  )
}