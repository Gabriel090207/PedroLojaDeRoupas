import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <span>Newsletter</span>

          <h2>Entre para nossa comunidade</h2>

          <p>
            Receba novidades, lançamentos e coleções exclusivas diretamente no
            seu email.
          </p>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Seu melhor email" />

          <button type="submit">Inscrever-se</button>
        </form>
      </div>
    </section>
  )
}