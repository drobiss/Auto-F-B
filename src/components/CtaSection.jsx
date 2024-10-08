import { Link } from "react-router-dom"
import "./CtaSection.css"

const CtaSection = () => {
  return <section className="cta-section">
  <div className="cta-container">
    <h2>Připraveni svěřit své auto do profesionálních rukou?</h2>
    <p>Kontaktujte nás ještě dnes a domluvte si termín servisu!</p>
    <Link to="/onas"><button className="hero-cta">Kontaktujte nás</button></Link>
  </div>
</section>
}

export default CtaSection