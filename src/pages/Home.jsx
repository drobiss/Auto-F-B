//Components, hooks etc. import
import { useState, useEffect, useRef } from "react"
import HeroSection from "../components/HeroSection"
import ServiceCard from "../components/ServiceCard"
import useScrollEffect from "../hooks/useScrollEffect"
import CtaSection from "../components/CtaSection"
import ReviewsSection from "../components/ReviewsSection"

// Styles import
import "../pages/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faToolbox } from '@fortawesome/free-solid-svg-icons'

//Images import
import dilnaImage from "../images/dilna.jpg"
import dilnaVenkuImage from "../images/dilna-venku.jpg"
import klimaImage from "../images/cisteni-klimatizace.jpg"

const IMAGES = [dilnaImage, dilnaVenkuImage, klimaImage]


const Home = () => {
  const [currentImageIndex, setcurrentImageIndex] = useState(0)
  const servicesHeadingRef = useRef(null)
  const isVisible = useScrollEffect(servicesHeadingRef)

  // Automatic image slideshow
  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])


  return (
    <div className="home-container">
      <HeroSection
        images={IMAGES}
        currentImageIndex={currentImageIndex}
      />

      <section className="services-container">
        <h2 ref={servicesHeadingRef} className={isVisible ? `visible` : ``}
          >Naše služby pro váš vůz
        </h2>

        <div className="services-cards-container">
          <ServiceCard
            icon={faGears}
            title="Mechanické práce"
            description="Zajišťujeme kompletní mechanické práce, od výměn olejů a filtrů až po opravy brzd, spojek, náprav a motorů. Postaráme se o váš vůz se zaměřením na detail, aby byl vždy v perfektním stavu."
            buttonText="Více o mechanických pracích"
          />
          <ServiceCard
            icon={faToolbox}
            title="Další služby"
            description="Nabízíme širokou škálu dalších služeb včetně údržby a oprav autoklimatizací, dezinfekce vozidel ozonem, profesionální diagnostiky pro většinu vozidel a leštění světlometů. Vaše vozidlo u nás dostane prvotřídní péči."
            buttonText="Více o dalších služách"
          />
        </div>
      </section>

      <ReviewsSection/>

      <CtaSection/>
    </div>
  )
}

export default Home