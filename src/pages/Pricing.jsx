import React from 'react';
import CtaButton from '../components/CtaButton';
import "./Pricing.css"

const PricingPage = () => {
  const services = [
    { name: 'Výměna oleje a filtrů', price: '1 500 Kč' },
    { name: 'Oprava brzd', price: 'od 2 000 Kč' },
    { name: 'Výměna spojky', price: 'od 5 000 Kč' },
    { name: 'Údržba a oprava klimatizace', price: 'od 1 800 Kč' },
    { name: 'Diagnostika vozu', price: '800 Kč' },
    { name: 'Leštění světlometů', price: 'od 500 Kč' }
  ];

  return (
    <div className="pricing-container">
      <h1>Ceník služeb</h1>
      <p>Podívejte se na náš aktuální ceník a zjistěte, jak můžeme pomoci s údržbou a opravami vašeho vozu.</p>

      <section className="services-section">
        <h2>Naše služby a ceny</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Služba</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="cta-section">
        <h2>Připraveni svěřit své auto do profesionálních rukou?</h2>
        <p>Kontaktujte nás ještě dnes a domluvte si termín servisu!</p>
        <CtaButton text="Kontakt" />
      </section>
    </div>
  );
};

export default PricingPage;