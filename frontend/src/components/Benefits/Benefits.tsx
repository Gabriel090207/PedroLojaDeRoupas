import './Benefits.css'

import {
  FiTruck,
  FiShield,
  FiCreditCard,
  FiBox,
} from 'react-icons/fi'

const benefits = [
  {
    icon: <FiBox />,
    title: 'Tecidos Premium',
    description: 'Materiais selecionados focados em conforto, qualidade e durabilidade.',
  },
  {
    icon: <FiTruck />,
    title: 'Entrega Rápida',
    description: 'Envios seguros para todo o Brasil com rastreamento completo.',
  },
  {
    icon: <FiShield />,
    title: 'Compra Segura',
    description: 'Pagamento protegido e experiência confiável em toda jornada.',
  },
  {
    icon: <FiCreditCard />,
    title: 'Pagamento Facilitado',
    description: 'Diversas formas de pagamento para maior praticidade.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-container">
        {benefits.map((benefit) => (
          <div className="benefit-card" key={benefit.title}>
            <div className="benefit-icon">
              {benefit.icon}
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}