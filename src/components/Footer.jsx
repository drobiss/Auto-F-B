import "./Footer.css"
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Email: liborfaltejsek@seznam.cz</p>
          <p>Telefon: +420 602 322 556</p>
        </div>
        <div className="footer-section">
          <h4>Adresa</h4>
          <p>Autoservis F&B</p>
          <p>Horusická 256, Praha - Kyje</p>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Auto F&B. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
};

export default Footer