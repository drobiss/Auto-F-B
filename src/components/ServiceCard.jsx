/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import "../components/ServiceCard.css"
const ServiceCard = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="service-card">
      <FontAwesomeIcon icon={icon}/>
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={buttonLink} className="service-btn">
        {buttonText}
      </Link>
    </div>
  )
}

export default ServiceCard