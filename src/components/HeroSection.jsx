/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "../components/HeroSection.css"
const HeroSection = ({ images, currentImageIndex }) => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImageIndex ? 'fade-in' : ''}`}
            style={{ 
              backgroundImage: `url(${img})`,
              zIndex: index === currentImageIndex ? 1 : 0 
            }}
          />
        ))}
      </div>
      <div className="hero-content">
        <h1>Autoservis Horusická,<br/> Praha - Kyje</h1>
        <p>Začněte každou jízdu s jistotou. V našem servisu se staráme o to, aby byl váš vůz vždy v top kondici. Ať už jde o pravidelnou údržbu nebo složitější opravy, naším cílem je vaše bezpečí a pohodlí za volantem.</p>
        <Link to="/onas"><button className="hero-cta">Kontakt</button></Link>
      </div>
    </section>
  )
}

export default HeroSection