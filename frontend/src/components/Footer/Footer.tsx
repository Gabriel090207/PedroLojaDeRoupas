import './Footer.css'

import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>LOGO</h2>

          <p>
            Minimalismo, conforto e identidade para o streetwear moderno.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <span>Navegação</span>

            <a href="/">Masculino</a>
            <a href="/">Feminino</a>
            <a href="/">Coleções</a>
            <a href="/">Novidades</a>
          </div>

          <div className="footer-column">
            <span>Categorias</span>

            <a href="/">Oversized</a>
            <a href="/">Linho</a>
            <a href="/">Streetwear</a>
            <a href="/">Essentials</a>
          </div>

          <div className="footer-column">
            <span>Pagamentos</span>

            <a href="/">Pix</a>
            <a href="/">Cartão de Crédito</a>
            <a href="/">Boleto Bancário</a>
            <a href="/">Parcelamento</a>
          </div>

          <div className="footer-column">
            <span>Contato</span>

            <div className="footer-socials">
              <a href="/">
                <FiInstagram />
              </a>

              <a href="/">
                <FiTwitter />
              </a>

              <a href="/">
                <FiFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 LOGO. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}