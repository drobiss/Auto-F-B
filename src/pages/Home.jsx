import { useState, useEffect } from "react"
import "../pages/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faToolbox } from '@fortawesome/free-solid-svg-icons'

//Images import
import dilnaImage from "../images/dilna.jpg"
import dilnaVenkuImage from "../images/dilna-venku.jpg"
import klimaImage from "../images/cisteni-klimatizace.jpg"

const Home = () => {
  const images = [dilnaImage, dilnaVenkuImage, klimaImage]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [images.length])

  return <div className="home-container">
    
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

    <section className="services-container">
      <h2>Naše služby pro váš vůz</h2>

      <div className="services-cards-container">
        <div className="mechanical-work-card">
          <FontAwesomeIcon icon={faGears} />
          <h4>Mechanické práce</h4>
          <p>Zajišťujeme kompletní mechanické práce, od výměn olejů a filtrů až po opravy brzd, spojek, náprav a motorů. Postaráme se o váš vůz se zaměřením na detail, aby byl vždy v perfektním stavu.</p>
          <button className="mechanical-work-btn">Více o mechanických pracích &#62;</button>
        </div>

        <div className="other-services-card">
          <FontAwesomeIcon icon={faToolbox} />
          <h4>Další služby</h4>
          <p>Nabízíme širokou škálu dalších služeb včetně údržby a oprav autoklimatizací, dezinfekce vozidel ozonem, profesionální diagnostiky pro většinu vozidel a leštění světlometů. Vaše vozidlo u nás dostane prvotřídní péči.</p>
          <button className="other-services-btn">Více o dalších službách &#62;</button>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="cta-container">
        <h2>Připraveni svěřit své auto do profesionálních rukou?</h2>
        <p>Kontaktujte nás ještě dnes a domluvte si termín servisu!</p>
        <button className="hero-cta">Kontakt</button>
      </div>
    </section>

  </div>
}

export default Home