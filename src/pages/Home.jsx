//Components, hooks etc. import
import { useState, useEffect, useRef } from "react"
import HeroSection from "../components/HeroSection"
import ServiceCard from "../components/ServiceCard"
import useScrollEffect from "../hooks/useScrollEffect"
import CtaSection from "../components/CtaSection"
import ReviewsSection from "../components/ReviewsSection"

// Styles import
import "../pages/Home.css"
import { faGears, faToolbox } from '@fortawesome/free-solid-svg-icons'

//Images import
import dilnaImage from "../images/dilna2.png"
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
          description="Zajišťujeme kompletní mechanické práce..."
          buttonText="Více o cenách mechanických prací"
          buttonLink="/cenik"
        />
          <ServiceCard
            icon={faToolbox}
            title="Další služby"
            description="Nabízíme širokou škálu dalších služeb..."
            buttonText="Více o cenách dalších služeb"
            buttonLink="/cenik"
          />
        </div>
      </section>

      <ReviewsSection/>

      <CtaSection/>
    </div>
  )
}

export default Home