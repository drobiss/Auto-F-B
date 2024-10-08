import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useScrollEffect from "../hooks/useScrollEffect"
import './ReviewsSection.css'
const ReviewsSection = () => {
  const reviewsHeadingRef = useRef(null)
  const isVisible = useScrollEffect(reviewsHeadingRef)

  const reviews = [
    {
      id: 1,
      name: "Jan Novák",
      rating: 5,
      text: "Skvělý servis! Profesionální přístup a rychlé řešení problému s mým vozem."
    },
    {
      id: 2,
      name: "Marie Svobodová",
      rating: 4,
      text: "Velmi spokojená s kvalitou práce. Ceny jsou rozumné a personál je přátelský."
    },
    {
      id: 3,
      name: "Petr Dvořák",
      rating: 5,
      text: "Nejlepší autoservis v okolí. Vždy se sem rád vracím pro jejich spolehlivost."
    },
    {
      id: 4,
      name: "Jan Novák",
      rating: 5,
      text: "Skvělý servis! Profesionální přístup a rychlé řešení problému s mým vozem."
    },
    {
      id: 5,
      name: "Jan Novák",
      rating: 5,
      text: "Skvělý servis! Profesionální přístup a rychlé řešení problému s mým vozem."
    },
    {
      id: 6,
      name: "Jan Novák",
      rating: 5,
      text: "Skvělý servis! Profesionální přístup a rychlé řešení problému s mým vozem."
    },
  ]

  return (
    <section className="reviews-container">
      <h2 ref={reviewsHeadingRef} className={isVisible ? 'visible' : ''}>
        Co o nás říkají naši zákazníci
      </h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                ))}
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection