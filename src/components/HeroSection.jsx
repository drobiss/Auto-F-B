import "../components/HeroSection.css"

const HeroSection = ({ images, currentImageIndex }) => {
  return (
    <section className="hero-section">
      <div className="hero-text-container">
        <h1>Autoservis Horusická,<br/> Praha - Kyje</h1>
        <p>Začněte každou jízdu s jistotou. V našem servisu se staráme o to, aby byl váš vůz vždy v top kondici. Ať už jde o pravidelnou údržbu nebo složitější opravy, naším cílem je vaše bezpečí a pohodlí za volantem.</p>
        <button className="hero-cta">Kontakt</button>
      </div>

      <div className="hero-img-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Dílna ${index + 1}`}
            className={`hero-image ${index === currentImageIndex ? 'fade-in' : ''}`}
            style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection